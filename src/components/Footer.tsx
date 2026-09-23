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
    <footer className="flex flex-wrap items-center gap-6 gap-x-10 bg-[#080808] px-[clamp(20px,6vw,100px)] py-6 shadow-[5px_0_12px_4px_rgba(239,239,239,0.08)] max-md:flex-col max-md:items-start">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="ProTechX Systems home"
        className="border-0 bg-transparent p-0"
      >
        <img src="/img/logo.svg" alt="ProTechX Systems" className="h-16 w-auto" />
      </button>

      <nav className="ml-auto flex flex-wrap items-center gap-8 max-md:ml-0 max-md:gap-5" aria-label="Footer">
        
        <a
            href="#services"
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
      </nav>
    </footer>
  );
}