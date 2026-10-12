import { type FormEvent, useEffect, useState } from "react";
import { useContactModal } from "../context/ContactModalContext";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      let payload: { message?: string } = {};
      try {
        payload = await response.json();
      } catch {
        // Keep the fallback message below if the server response is not JSON.
      }

      if (!response.ok) {
        throw new Error(payload.message || "We couldn't send your message. Please try again.");
      }

      setSubmitStatus("success");
      setSubmitMessage(payload.message || "Thank you. Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again."
      );
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  }, [isOpen]);

  const fieldClasses =
    "h-[35px] w-full rounded-[4px] border border-white/10 bg-[#343434] " +
    "px-4 font-[family-name:var(--font-body)] text-[16px] text-white " +
    "outline-none transition-colors duration-300 placeholder:text-white/45 " +
    "focus:border-[#df252d] focus:ring-1 focus:ring-[#df252d]/30";

  if (!isOpen) return null;

  const isSubmitting = submitStatus === "submitting";

  return (
    <div
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/75 p-3 backdrop-blur-[3px] sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isSubmitting) {
          close();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative mx-auto min-h-full w-full max-w-[850px] overflow-hidden bg-[#282828] px-[clamp(24px,8vw,170px)] py-[clamp(30px,6vw,100px)] text-white shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          disabled={isSubmitting}
          aria-label="Close contact form"
          className="group absolute top-4 right-4 flex h-8 w-8 items-center justify-center border-0 bg-transparent disabled:cursor-not-allowed disabled:opacity-50 max-sm:top-4 max-sm:right-4"
        >
          <span className="absolute h-[3px] w-6 rotate-45 bg-white transition-colors group-hover:bg-[#df252d]" />
          <span className="absolute h-[3px] w-6 -rotate-45 bg-white transition-colors group-hover:bg-[#df252d]" />
        </button>

        <div className="mb-[clamp(45px,6vw,40px)] text-center">
          <h2
            id="contact-modal-title"
            className="m-0 font-[family-name:var(--font-display)] text-[clamp(38px,4vw,62px)] leading-tight font-bold"
          >
            <span className="text-[#df252d]">Contact</span>{" "}
            <span className="text-white">us</span>
          </h2>

          <p className="font-[family-name:var(--font-body)] text-[clamp(16px,2vw,22px)] font-light tracking-wide text-white/95">
            We're here to help and look forward to hearing from you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Honeypot field. Real users never see or fill this. */}
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 max-md:grid-cols-1 max-md:gap-y-6">
            <label className="block">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">
                First name <span className="text-[#df252d]">*</span>
              </span>
              <input type="text" name="firstName" placeholder="John" required maxLength={80} disabled={isSubmitting} className={fieldClasses} />
            </label>

            <label className="block">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">
                Last name <span className="text-[#df252d]">*</span>
              </span>
              <input type="text" name="lastName" placeholder="Doe" required maxLength={80} disabled={isSubmitting} className={fieldClasses} />
            </label>

            <label className="block">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">
                Company <span className="text-[#df252d]">*</span>
              </span>
              <input type="text" name="company" placeholder="Company" required maxLength={150} disabled={isSubmitting} className={fieldClasses} />
            </label>

            <label className="block">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">
                Email <span className="text-[#df252d]">*</span>
              </span>
              <input type="email" name="email" placeholder="john@example.com" required maxLength={254} disabled={isSubmitting} className={fieldClasses} />
            </label>

            <label className="block">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">Phone number</span>
              <input type="tel" name="phone" placeholder="+971" maxLength={40} disabled={isSubmitting} className={fieldClasses} />
            </label>

            <label className="block">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">
                Industry <span className="text-[#df252d]">*</span>
              </span>
              <input type="text" name="industry" placeholder="Your industry" required maxLength={150} disabled={isSubmitting} className={fieldClasses} />
            </label>

            <label className="col-span-2 block max-md:col-span-1">
              <span className="mb-3 block font-[family-name:var(--font-body)] text-[14px]">Message</span>
              <textarea
                name="message"
                placeholder="Write your message"
                rows={5}
                maxLength={5000}
                disabled={isSubmitting}
                className={`${fieldClasses} h-[145px] resize-none py-4`}
              />
            </label>
          </div>

          {submitMessage && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-6 rounded-[4px] border px-4 py-3 font-[family-name:var(--font-body)] text-sm ${
                submitStatus === "success"
                  ? "border-green-500/30 bg-green-500/10 text-green-100"
                  : "border-[#df252d]/40 bg-[#df252d]/10 text-red-100"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <div className="mt-12 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-w-[196px] items-center justify-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(90deg,#df252d_0%,#b9141c_100%)] px-8 py-4 font-[family-name:var(--font-body)] text-[16px] font-light tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit"}
              {!isSubmitting && <span aria-hidden="true">↗</span>}
            </button>
          </div>
        </form>

        <div className="mt-[clamp(70px,10vw,130px)] flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/protechx-systems-consultancies-fzco/" aria-label="LinkedIn">
              <img src="/img/linkedin-icon.svg" alt="" className="h-5 w-5" />
            </a>
          </div>

          <p className="m-0 font-[family-name:var(--font-body)] text-sm font-light tracking-wide text-white/90">
            2026 © ProTechX Systems
          </p>
        </div>
      </div>
    </div>
  );
}
