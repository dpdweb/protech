import { useEffect, useState, type FormEvent } from "react";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToTop = () => {
    const customContainer = document.querySelector<HTMLElement>(
      "[data-scroll-container]"
    );

    const scrollContainer = customContainer || document.scrollingElement;

    scrollContainer?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    console.log(values);

    // Add your API request here.
  };

  useEffect(() => {
    if (!isContactOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeContactModal();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isContactOpen]);

  const fieldClasses =
    "h-[58px] w-full rounded-[4px] border border-white/10 bg-[#343434] " +
    "px-4 font-[family-name:var(--font-body)] text-[16px] text-white " +
    "outline-none transition-colors duration-300 placeholder:text-white/45 " +
    "focus:border-[#df252d] focus:ring-1 focus:ring-[#df252d]/30";

  return (
    <>
      <footer className="flex flex-wrap items-center gap-6 gap-x-10 bg-[#080808] px-[clamp(20px,6vw,100px)] py-6 shadow-[5px_0_12px_4px_rgba(239,239,239,0.08)] max-md:flex-col max-md:items-start">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="ProTechX Systems home"
          className="border-0 bg-transparent p-0"
        >
          <img
            src="/img/logo.svg"
            alt="ProTechX Systems"
            className="h-16 w-auto"
          />
        </button>

        <nav
          className="ml-auto flex flex-wrap items-center gap-8 max-md:ml-0 max-md:gap-5"
          aria-label="Footer"
        >
          <a
            href="#services"
            className="font-[family-name:var(--font-body)] text-xs leading-[22px] font-light tracking-[0.36px] text-white transition-colors hover:text-[#df252d]"
          >
            Services Overview
          </a>

          <button
            type="button"
            onClick={openContactModal}
            className="border-0 bg-transparent p-0 font-[family-name:var(--font-body)] text-xs leading-[22px] font-light tracking-[0.36px] text-white transition-colors hover:text-[#df252d]"
          >
            Contact us
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="border-0 bg-transparent p-0 font-[family-name:var(--font-body)] text-xs leading-[22px] font-light tracking-[0.36px] text-white transition-colors hover:text-[#df252d]"
          >
            Back to top
          </button>
        </nav>
      </footer>

      {/* Contact popup */}
      {isContactOpen && (
        <div
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/75 p-3 backdrop-blur-[3px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeContactModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative mx-auto min-h-full w-full max-w-[1450px] overflow-hidden bg-[#282828] px-[clamp(24px,8vw,170px)] py-[clamp(70px,8vw,130px)] text-white shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeContactModal}
              aria-label="Close contact form"
              className="group absolute top-8 right-8 flex h-12 w-12 items-center justify-center border-0 bg-transparent max-sm:top-4 max-sm:right-4"
            >
              <span className="absolute h-[3px] w-12 rotate-45 bg-white transition-colors group-hover:bg-[#df252d]" />
              <span className="absolute h-[3px] w-12 -rotate-45 bg-white transition-colors group-hover:bg-[#df252d]" />
            </button>

            {/* Heading */}
            <div className="mb-[clamp(55px,7vw,100px)] text-center">
              <h2
                id="contact-modal-title"
                className="m-0 font-[family-name:var(--font-body)] text-[clamp(38px,4vw,62px)] leading-tight font-semibold"
              >
                <span className="text-[#df252d]">Contact</span>{" "}
                <span className="text-white">us</span>
              </h2>

              <p className="mt-5 font-[family-name:var(--font-body)] text-[clamp(17px,2vw,28px)] font-light tracking-wide text-white/95">
                We’re here to help and look forward to hearing from you.
              </p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 max-md:grid-cols-1 max-md:gap-y-6">
                <label className="block">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    First name <span className="text-[#df252d]">*</span>
                  </span>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    required
                    className={fieldClasses}
                  />
                </label>

                <label className="block">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    Last name <span className="text-[#df252d]">*</span>
                  </span>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className={fieldClasses}
                  />
                </label>

                <label className="block">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    Company <span className="text-[#df252d]">*</span>
                  </span>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    required
                    className={fieldClasses}
                  />
                </label>

                <label className="block">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    Email <span className="text-[#df252d]">*</span>
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className={fieldClasses}
                  />
                </label>

                <label className="block">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    Phone number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971"
                    className={fieldClasses}
                  />
                </label>

                <label className="block">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    Industry <span className="text-[#df252d]">*</span>
                  </span>

                  <input
                    type="text"
                    name="industry"
                    placeholder="Your industry"
                    required
                    className={fieldClasses}
                  />
                </label>

                <label className="col-span-2 block max-md:col-span-1">
                  <span className="mb-5 block font-[family-name:var(--font-body)] text-[17px]">
                    Message
                  </span>

                  <textarea
                    name="message"
                    placeholder="Write your message"
                    rows={5}
                    className={`${fieldClasses} h-[145px] resize-none py-4`}
                  />
                </label>
              </div>

              <div className="mt-12 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex min-w-[196px] items-center justify-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(90deg,#df252d_0%,#b9141c_100%)] px-8 py-4 font-[family-name:var(--font-body)] text-[16px] font-light tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
                >
                  Submit
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>

            {/* Popup footer */}
            <div className="mt-[clamp(70px,10vw,130px)] flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-5">
                <a href="#" aria-label="Facebook">
                  <img
                    src="/img/facebook.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>

                <a href="#" aria-label="Instagram">
                  <img
                    src="/img/instagram.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <img
                    src="/img/linkedin.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>

                <a href="#" aria-label="YouTube">
                  <img
                    src="/img/youtube.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>
              </div>

              <p className="m-0 font-[family-name:var(--font-body)] text-sm font-light tracking-wide text-white/90">
                2026 © ProTechX Systems
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}