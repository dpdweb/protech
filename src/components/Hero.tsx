import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

// Fixed header height to offset scroll targets so sections don't land
// hidden underneath it. Keep this in sync with the same constant in NavPanel.tsx.
const HEADER_OFFSET = 96;

export default function Hero() {
  const { open } = useContactModal();

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const customContainer = document.querySelector<HTMLElement>("[data-scroll-container]");
    const scrollContainer = customContainer || document.scrollingElement;

    const currentOffset =
      scrollContainer === document.scrollingElement
        ? window.scrollY
        : ((scrollContainer as HTMLElement)?.scrollTop ?? 0);

    const targetTop = target.getBoundingClientRect().top + currentOffset - HEADER_OFFSET;

    scrollContainer?.scrollTo({
      top: targetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative flex min-h-[800px] items-center overflow-hidden pt-[160px] pb-20 px-[clamp(20px,6vw,100px)] after:absolute after:inset-0 after:z-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.10)_100%)] max-lg:min-h-[640px] max-lg:pt-[140px] max-md:min-h-[560px] max-md:px-5 max-md:pt-[120px] max-md:pb-[60px] max-md:after:hidden"
      aria-label="Introduction"
    >
      <img
        src="/img/hero-bg.webp"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover md:block"
      />
      <img
        src="/img/hero-bg-mobile.webp"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 -z-10 -top-20 block h-full w-full object-cover md:hidden"
      />

      <div className="relative z-10 max-w-[600px] max-md:pt-100 max-[430px]:pt-16">
        <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(30px,3.4vw,44px)] leading-[1.15] font-bold tracking-[1.32px] max-[430px]:text-[28px]">
          Secure Automation.
          <br />
          Engineered for Industry.
        </h1>

        <p className="mb-10 max-w-[560px] font-[family-name:var(--font-body)] text-base leading-[26px] font-normal tracking-[0.48px]">
          German-led industrial automation and OT security consulting for secure, scalable and
          reliable production systems.
        </p>

<div className="mb-8 flex w-full flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-3.5">
  <div className="flex w-full shrink-0 sm:w-auto">
    <img
      src="/img/ellipse-1.webp"
      alt=""
      width={43}
      height={42}
      loading="lazy"
      className="h-[42px] w-[43px] shrink-0 rounded-full object-cover"
    />
    <img
      src="/img/ellipse-2.webp"
      alt=""
      width={42}
      height={42}
      loading="lazy"
      className="-ml-3.5 h-[42px] w-[42px] shrink-0 rounded-full object-cover"
    />
    <img
      src="/img/ellipse-3.webp"
      alt=""
      width={43}
      height={42}
      loading="lazy"
      className="-ml-3.5 h-[42px] w-[43px] shrink-0 rounded-full object-cover"
    />
  </div>

  <p className="m-0 w-full min-w-0 max-w-none font-[family-name:var(--font-body)] text-xs leading-[22px] tracking-[0.36px] sm:max-w-[420px] sm:flex-1">
    <strong className="font-bold">10+ years</strong> of industrial engineering and
    automation-related experience, regulated industry know-how and structured
    project delivery.
  </p>
</div>

        <div className="flex flex-wrap gap-4 max-md:flex-col max-md:items-stretch">
<button
  type="button"
  onClick={open}
  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[64px] bg-[linear-gradient(46deg,#9d1a20_0%,#d0262c_50%,#9d1a20_100%)] bg-[length:200%_100%] bg-[position:0%_0%] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs leading-[26px] font-light tracking-[0.36px] text-white transition-[background-position] duration-500 ease-out hover:bg-[position:100%_0%] max-md:w-full"
>
  Book a Consultation <ArrowUpRight className="h-3 w-[12px]" />
</button>

          
          <a  href="#services"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#services");
            }}
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[64px] border border-white/35 px-8 py-3.5 font-[family-name:var(--font-body)] text-xs leading-[26px] font-light tracking-[0.36px] text-white max-md:w-full"
          >
            View Services <ArrowUpRight className="h-3 w-[12px]" />
          </a>
        </div>
      </div>
    </section>
  );
}