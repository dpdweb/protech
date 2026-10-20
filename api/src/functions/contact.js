import { app } from "@azure/functions";

const REQUIRED_ENV_VARS = [
  "AZURE_TENANT_ID",
  "AZURE_CLIENT_ID",
  "AZURE_CLIENT_SECRET",
  "MAIL_FROM",
  "MAIL_TO",
];

function jsonResponse(status, body) {
  return {
    status,
    jsonBody: body,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json",
    },
  };
}

function cleanString(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function getGraphAccessToken() {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  const tokenUrl = `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`;
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Microsoft identity token request failed", response.status, errorText);
    throw new Error("TOKEN_REQUEST_FAILED");
  }

  const payload = await response.json();

  if (!payload.access_token) {
    console.error("Microsoft identity token response did not include access_token");
    throw new Error("TOKEN_MISSING");
  }

  return payload.access_token;
}

async function sendContactEmail(accessToken, contact) {
  const mailFrom = process.env.MAIL_FROM;
  const mailTo = process.env.MAIL_TO;

  const fullName = `${contact.firstName} ${contact.lastName}`.trim();
  const safe = Object.fromEntries(
    Object.entries(contact).map(([key, value]) => [key, escapeHtml(value)])
  );

  const messageBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#222;line-height:1.6">
      <h2 style="margin-bottom:20px">New ProTechX Website Enquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${safe.firstName} ${safe.lastName}</td></tr>
        <tr><td><strong>Company</strong></td><td>${safe.company}</td></tr>
        <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${safe.phone || "Not provided"}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${safe.industry}</td></tr>
      </table>
      <h3 style="margin-top:24px">Message</h3>
      <p style="white-space:pre-wrap">${safe.message || "No message provided."}</p>
      <hr style="margin-top:28px;border:0;border-top:1px solid #ddd" />
      <p style="font-size:12px;color:#666">Submitted through the ProTechX Systems website contact form.</p>
    </div>
  `;

  const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailFrom)}/sendMail`;
  const graphPayload = {
    message: {
      subject: `New ProTechX Website Enquiry - ${contact.company} - ${fullName}`.replace(/[\r\n]+/g, " "),
      body: {
        contentType: "HTML",
        content: messageBody,
      },
      toRecipients: [
        {
          emailAddress: {
            address: mailTo,
          },
        },
      ],
      replyTo: [
        {
          emailAddress: {
            address: contact.email,
            name: fullName,
          },
        },
      ],
    },
    saveToSentItems: true,
  };

  const response = await fetch(graphUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Microsoft Graph sendMail failed", response.status, errorText);
    throw new Error("GRAPH_SEND_FAILED");
  }
}

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "contact",
  handler: async (request, context) => {
    const missingEnv = REQUIRED_ENV_VARS.filter((name) => !process.env[name]);
    if (missingEnv.length > 0) {
      context.error(`Missing required environment variables: ${missingEnv.join(", ")}`);
      return jsonResponse(500, {
        message: "The contact service is temporarily unavailable. Please try again later.",
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse(400, { message: "Invalid request." });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return jsonResponse(400, { message: "Invalid request." });
    }

    // Honeypot: bots commonly fill every field.
    if (cleanString(body.website, 200)) {
      return jsonResponse(200, { message: "Thank you. Your message has been sent successfully." });
    }

    const contact = {
      firstName: cleanString(body.firstName, 80),
      lastName: cleanString(body.lastName, 80),
      company: cleanString(body.company, 150),
      email: cleanString(body.email, 254).toLowerCase(),
      phone: cleanString(body.phone, 40),
      industry: cleanString(body.industry, 150),
      message: cleanString(body.message, 5000),
    };

    if (!contact.firstName || !contact.lastName || !contact.company || !contact.email || !contact.industry) {
      return jsonResponse(400, {
        message: "Please complete all required fields.",
      });
    }

    if (!isValidEmail(contact.email)) {
      return jsonResponse(400, {
        message: "Please enter a valid email address.",
      });
    }

    try {
      const accessToken = await getGraphAccessToken();
      await sendContactEmail(accessToken, contact);

      return jsonResponse(200, {
        message: "Thank you. Your message has been sent successfully.",
      });
    } catch (error) {
      context.error("Contact form delivery failed", error);
      return jsonResponse(502, {
        message: "We couldn't send your message right now. Please try again shortly.",
      });
    }
  },
});
