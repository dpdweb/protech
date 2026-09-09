export default function FloatingActions() {
  const scrollToTop = () => {
    const customContainer = document.querySelector<HTMLElement>(
      "[data-scroll-container]"
    );

    if (customContainer) {
      customContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    const page = document.scrollingElement;

    if (page) {
      page.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    // Browser fallback
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const buttonClasses =
    "flex h-12 w-14 items-center justify-end rounded-l-[64px] " +
    "border-2 border-solid border-white/50 pr-[17px] " +
    "bg-[linear-gradient(46deg,rgba(255,255,255,0.44)_0%,rgba(153,153,153,0.44)_50%,rgba(255,255,255,0.44)_100%)] " +
    "backdrop-blur-[6px] transition-[width,filter] duration-300 ease-out " +
    "hover:w-16 hover:brightness-125";

  return (
    <div className="fixed right-0 bottom-24 z-[90] flex flex-col items-end gap-2 max-md:bottom-[76px]">
      {/* Call button */}
      <a
        href="tel:+1234567890"
        aria-label="Call us"
        className={buttonClasses}
      >
        <img
          src="/img/phone_icon.svg"
          alt=""
          className="h-[22px] w-[22px] shrink-0"
        />
      </a>

      {/* Back-to-top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`${buttonClasses} cursor-pointer`}
      >
        <img
          src="/img/back_to_top_icon.svg"
          alt=""
          className="h-[22px] w-[22px] shrink-0"
        />
      </button>
    </div>
  );
}