# ProTechX Contact Form - Microsoft Graph Integration

The website contact form now posts to `/api/contact`, implemented as an Azure Static Web Apps managed API (Azure Functions Node.js v4 model).

## Required Azure Static Web App production environment variables

These must already exist in Azure and must NOT be committed to source control:

- `AZURE_TENANT_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`
- `MAIL_FROM` (expected: `forms@protechxsystems.com`)
- `MAIL_TO` (expected: `sales@protechxsystems.com`)

The backend uses the OAuth 2.0 client-credentials flow with the Graph `.default` scope and sends via:

`POST https://graph.microsoft.com/v1.0/users/{MAIL_FROM}/sendMail`

Do not add a redirect URI for this flow. Do not add a separate tenant-wide Mail.Send permission if Exchange RBAC is already configured as advised by the tenant administrator.

## Azure Static Web Apps deployment configuration

If deployed by GitHub Actions/Azure DevOps, make sure the Static Web Apps deployment settings use:

- App location: `/`
- API location: `api`
- Output location: `dist`

The frontend build command remains `npm run build`.

## Local API settings

Copy `api/local.settings.example.json` to `api/local.settings.json` and add development credentials only when local testing is required. `api/local.settings.json` is ignored by Git.

Never commit the real client secret.
