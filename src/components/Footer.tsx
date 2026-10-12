import { useContactModal } from "../context/ContactModalContext";

export default function Footer() {
  const { open } = useContactModal();

  const scrollToTop = () => {
    const customContainer = document.querySelector<HTMLElement>("[data-scroll-container]");
    const scrollContainer = customContainer || document.scrollingElement;

    scrollContainer?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-col gap-6 bg-[#080808] px-[clamp(20px,6vw,100px)] py-6 shadow-[5px_0_12px_4px_rgba(239,239,239,0.08)]">
  <div className="flex flex-wrap items-center gap-6 gap-x-10 max-md:flex-col max-md:items-start">
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ProTechX Systems home"
      className="mx-auto block border-0 bg-transparent p-0 sm:mx-0"
    >
      <img
        src="/img/logo.svg"
        alt="ProTechX Systems"
        className="h-16 w-auto"
      />
    </button>

    <nav
      className="ml-auto flex flex-wrap items-center gap-8 max-md:ml-0 max-md:w-full max-md:justify-center max-md:gap-5"
      aria-label="Footer"
    >
      
      <a  href="#services"
        className="font-[family-name:var(--font-body)] text-xs leading-[22px] font-light tracking-[0.36px] text-white transition-colors hover:text-[#df252d]"
      >
        Services Overview
      </a>

      <button
        type="button"
        onClick={open}
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


  <a href="https://www.linkedin.com/company/protechx-systems-consultancies-fzco/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ProTechX Systems on LinkedIn (opens in a new tab)"
      className="inline-flex items-center justify-center text-white transition-colors " >
              <img src="/img/linkedin-icon.svg" alt="" className="h-5 w-5" />
  </a>


    </nav>
  </div>

  <p className="my-5 text-center font-[family-name:var(--font-body)] text-[11px] font-light tracking-[0.36px] text-white/50">
    Site by{" "}
    
    <a  href="https://dpdweb.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/50 underline underline-offset-2 transition-colors hover:text-[#df252d]"
    >
      Digital Pendemic
    </a>
  </p>
</footer>
  );
}