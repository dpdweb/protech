import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { SERVICE_PANELS } from "../data/content";
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Displayed in reverse order: 04, 03, 02, 01
const BASE_PANELS = [...SERVICE_PANELS].reverse();
const total = BASE_PANELS.length;

// Triple the data so there's always a buffer of clones to scroll into
const ORDERED_PANELS = [...BASE_PANELS, ...BASE_PANELS, ...BASE_PANELS];

export default function ServicePanels() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Start in the middle copy
  const [currentIndex, setCurrentIndex] = useState(total);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [imageTop, setImageTop] = useState(0);
  const isResetting = useRef(false);

  // Measure where the image starts (bottom of the number+title block) so the
  // static button bar can align to it — every panel shares the same header
  // structure, so this offset holds regardless of which one is active.
  useLayoutEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setImageTop(headerRef.current.offsetHeight);
      }
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

  // After a smooth scroll settles, silently snap back into the middle
  // copy if we've drifted into the cloned start/end buffers.
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

  // const activeIcon = BASE_PANELS[currentIndex % total].nextIcon;

  return (
    <section className="relative z-10 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Service areas">
      {/* Static control bar — pinned to the image's top edge, ignores horizontal scroll */}
      <div
        className="pointer-events-none absolute right-0 left-0 top-4 z-20 flex justify-end px-[clamp(20px,6vw,100px)]"
        style={{ top: imageTop }}
      >
        <div className="pointer-events-auto flex items-center gap-5">
          {hasNavigated && (
            <button
              type="button"
              onClick={scrollPrevious}
              className="inline-flex shrink-0 items-center gap-1.5 border-none bg-none font-[family-name:var(--font-body)] text-xs leading-[22px] font-semibold tracking-[0.36px] text-white transition-opacity hover:opacity-70"
              aria-label="View previous service"
            >
    
              <ChevronLeft className="h-3 w-[13px]" />
              Previous
            </button>
          )}

          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex shrink-0 items-center gap-1.5 border-none bg-none font-[family-name:var(--font-body)] text-xs leading-[22px] font-semibold tracking-[0.36px] text-white transition-opacity hover:opacity-70"
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
              {/* Header is only measured from the first instance; every copy
                  renders identically so alignment holds for all panels. */}
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