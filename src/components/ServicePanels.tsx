import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { SERVICE_PANELS } from "../data/content";
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Displayed in reverse order: 04, 03, 02, 01
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
  const headerRef = useRef<HTMLDivElement>(null);

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
    // Ignore genuinely horizontal gestures (e.g. a trackpad swipe already
    // moving the slider natively) so we don't fight the browser's own scroll.
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;

    // Stop the page itself from scrolling vertically while the user is
    // interacting with this slider via the wheel.
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
      {/* Static control bar — pinned to the image's top edge, ignores horizontal scroll */}
      <div className="pointer-events-none absolute right-0 left-0 top-60 z-20 flex justify-end px-[clamp(20px,6vw,100px)] max-md:top-20 max-[430px]:top-16">
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
            <div className="px-[clamp(20px,6vw,100px)]">
              <div ref={i === 0 ? headerRef : undefined}>
                <p className="m-0 mb-6 font-[family-name:var(--font-display)] text-[clamp(64px,9vw,120px)] font-bold tracking-[3.6px] text-white max-[430px]:text-[56px]">
                  {panel.number}
                </p>

                <h3 className="m-0 mb-6 font-[family-name:var(--font-body)] text-[22px] font-semibold tracking-[0.66px]">
                  {panel.title}
                </h3>
              </div>

              {panel.image ? (
                <img
                  className="mb-8 aspect-[890/400] w-[600px] rounded-2xl object-cover"
                  src={panel.image}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <div
                  className="mb-8 aspect-[890/400] w-full rounded-2xl bg-[linear-gradient(135deg,#1a1a1a_0%,#050505_100%)]"
                  role="img"
                  aria-label={panel.title}
                />
              )}

              <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-6">
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