import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { SERVICE_PANELS } from "../data/content";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BASE_PANELS = SERVICE_PANELS;
const total = BASE_PANELS.length;

// Triple the data so there's always a buffer of clones to scroll into
const ORDERED_PANELS = [...BASE_PANELS, ...BASE_PANELS, ...BASE_PANELS];

// Minimum vertical wheel delta before it counts as an intentional
// "advance one panel" gesture — filters out tiny trackpad jitter.
const WHEEL_THRESHOLD = 12;
// Cooldown after a wheel-triggered navigation before the next one can fire,
// so a single scroll gesture doesn't fire through several panels at once.
const WHEEL_COOLDOWN = 700;

export default function ServicePanels() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLParagraphElement>(null);

  // Start in the middle copy
  const [currentIndex, setCurrentIndex] = useState(total);
  const [hasNavigated, setHasNavigated] = useState(false);
  const isResetting = useRef(false);
  const isWheelLocked = useRef(false);

  useLayoutEffect(() => {
    const measure = () => {
      // (kept for future use, currently a no-op)
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (headerRef.current) observer.observe(headerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Jump to the middle set on mount, with no animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const panels = slider.querySelectorAll<HTMLElement>("[data-service-panel]");
    const panel = panels[total];
    if (!panel) return;

    slider.scrollLeft = panel.offsetLeft - slider.offsetLeft;
  }, []);

  const scrollToPanel = (index: number, behavior: ScrollBehavior = "smooth") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const panels = slider.querySelectorAll<HTMLElement>("[data-service-panel]");
    const panel = panels[index];
    if (!panel) return;

    slider.scrollTo({
      left: panel.offsetLeft - slider.offsetLeft,
      behavior,
    });

    setCurrentIndex(index);
  };

  const handleScrollEnd = () => {
    if (isResetting.current) {
      isResetting.current = false;
      return;
    }

    let resetIndex: number | null = null;

    if (currentIndex >= total * 2) {
      resetIndex = currentIndex - total;
    } else if (currentIndex < total) {
      resetIndex = currentIndex + total;
    }

    if (resetIndex !== null) {
      isResetting.current = true;
      scrollToPanel(resetIndex, "instant");
    }
  };

  const scrollNext = () => {
    setHasNavigated(true);
    scrollToPanel(currentIndex + 1);
  };

  const scrollPrevious = () => {
    setHasNavigated(true);
    scrollToPanel(currentIndex - 1);
  };

  // Vertical wheel input drives horizontal panel navigation.
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;

    event.preventDefault();

    if (isWheelLocked.current) return;
    isWheelLocked.current = true;

    if (event.deltaY > 0) {
      scrollNext();
    } else {
      scrollPrevious();
    }

    window.setTimeout(() => {
      isWheelLocked.current = false;
    }, WHEEL_COOLDOWN);
  };

  return (
    <section id="services" className="relative z-10 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Service areas">
      {/* Static control bar — unchanged */}
      <div className="pointer-events-none absolute right-0 left-0 top-40 z-20 flex justify-end px-[clamp(20px,6vw,100px)] max-md:top-0 max-[430px]:top-16">
        <div className="pointer-events-auto flex items-center gap-5 max-md:gap-3">
          {hasNavigated && (
            <button
              type="button"
              onClick={scrollPrevious}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[64px] border-none bg-[linear-gradient(46deg,#9d1a20_0%,#d0262c_50%,#9d1a20_100%)] bg-[length:200%_100%] bg-[position:0%_0%] px-5 py-2.5 font-[family-name:var(--font-body)] text-xs leading-[22px] font-semibold tracking-[0.36px] text-white transition-[background-position] duration-500 ease-out hover:bg-[position:100%_0%]"
              aria-label="View previous service"
            >
              <ChevronLeft className="h-3 w-[13px]" />
              Previous
            </button>
          )}

          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-[64px] border-none bg-[linear-gradient(46deg,#9d1a20_0%,#d0262c_50%,#9d1a20_100%)] bg-[length:200%_100%] bg-[position:0%_0%] px-5 py-2.5 font-[family-name:var(--font-body)] text-xs leading-[22px] font-semibold tracking-[0.36px] text-white transition-[background-position] duration-500 ease-out hover:bg-[position:100%_0%]"
            aria-label="View next service"
          >
            Next
            <ChevronRight className="h-3 w-[13px]" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        onScroll={() => {
          window.clearTimeout((sliderRef.current as any)?._scrollTimer);
          (sliderRef.current as any)._scrollTimer = window.setTimeout(handleScrollEnd, 120);
        }}
        onWheel={handleWheel}
        className="flex overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {ORDERED_PANELS.map((panel, i) => (
          <article
            className="w-screen flex-none [scroll-snap-align:start]"
            id={`panel-${panel.number}`}
            data-service-panel
            key={`${panel.number}-${i}`}
          >
            {/*
              One grid, two layouts:
              - Mobile: [number | title] on row 1; image + lists span both columns.
              - Desktop (lg): number in a ~28% left column; title, image and
                lists all sit in the right column.
            */}
            <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-5 px-[clamp(20px,6vw,100px)] lg:grid-cols-[28fr_72fr] lg:gap-x-0 lg:gap-y-2">
              {/* Number */}
              <p
                ref={i === 0 ? headerRef : undefined}
                className="col-start-1 row-start-1 m-0 font-[family-name:var(--font-display)] text-[clamp(64px,9vw,120px)] leading-[0.85] font-bold tracking-[3.6px] text-white max-[430px]:text-[56px]"
              >
                {panel.number}
              </p>

              {/* Title — vertically centered against the number */}
              <h3 className="col-start-2 row-start-1 m-0 self-center font-[family-name:var(--font-body)] text-[20px] leading-[1.3] font-semibold tracking-[0.66px] lg:text-[22px]">
                {panel.title}
              </h3>

              {/* Image — full width on mobile, ~57% of the right column on desktop */}
              {panel.image ? (
                <img
                  className="col-span-2 row-start-2 aspect-[769/450] w-full object-cover lg:col-span-1 lg:col-start-2 lg:aspect-[973/378] lg:w-[57%]"
                  src={panel.image}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <div
                  className="col-span-2 row-start-2 aspect-[769/450] w-full bg-[linear-gradient(135deg,#1a1a1a_0%,#050505_100%)] lg:col-span-1 lg:col-start-2 lg:aspect-[973/378] lg:w-[57%]"
                  role="img"
                  aria-label={panel.title}
                />
              )}

              {/* Lists — single stacked column on mobile, two columns on desktop
                  (the split lines up with the image's right edge) */}
              <div className="col-span-2 row-start-3 mt-1 grid grid-cols-1 lg:col-span-1 lg:col-start-2 lg:mt-7 lg:grid-cols-[57fr_43fr]">
                <ul className="m-0 list-none p-0 font-[family-name:var(--font-body)] text-[13px] font-light tracking-[0.36px]">
                  {panel.listA.map((line) => (
                    <li key={line} className="flex gap-2 leading-7">
                      <span className="text-white/60">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <ul className="m-0 list-none p-0 font-[family-name:var(--font-body)] text-[13px] font-light tracking-[0.36px]">
                  {panel.listB.map((line) => (
                    <li key={line} className="flex gap-2 leading-7">
                      <span className="text-white/60">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}