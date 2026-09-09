import { useRef, useState, useEffect } from "react";
import { CHALLENGES } from "../data/content";
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Challenges() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = CHALLENGES.length;

  // Triple the data so we always have a buffer of clones to scroll into
  const items = [...CHALLENGES, ...CHALLENGES, ...CHALLENGES];

  // Start in the middle copy
  const [currentIndex, setCurrentIndex] = useState(total);
  const [hasNavigated, setHasNavigated] = useState(false);
  const isResetting = useRef(false);

  // Jump to the middle set on mount, with no animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>("[data-challenge-card]");
    const card = cards[total];
    if (!card) return;

    slider.scrollLeft = card.offsetLeft - slider.offsetLeft;
  }, [total]);

  const scrollToCard = (index: number, behavior: ScrollBehavior = "smooth") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>("[data-challenge-card]");
    const card = cards[index];
    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
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
      scrollToCard(resetIndex, "instant");
    }
  };

  const scrollNext = () => {
    setHasNavigated(true);
    scrollToCard(currentIndex + 1);
  };

  const scrollPrevious = () => {
    setHasNavigated(true);
    scrollToCard(currentIndex - 1);
  };

  return (
    <section
      className="py-[clamp(56px,9vw,130px)]"
      aria-label="Industry challenges"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,6vw,100px)]">
        <div className="mb-10 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start max-md:gap-3">
          <h2 className="m-0 max-w-[600px] font-[family-name:var(--font-body)] text-[22px] leading-[1.3] font-semibold tracking-[0.66px]">
            Industrial Systems Under Pressure: Complexity, Risk, and Compliance
            Challenges
          </h2>

          <div className="flex items-center gap-5">
            {hasNavigated && (
              <button
                type="button"
                onClick={scrollPrevious}
                className="inline-flex shrink-0 items-center gap-1.5 border-none bg-transparent font-[family-name:var(--font-body)] text-xs leading-[22px] font-semibold tracking-[0.36px] text-white transition-opacity hover:opacity-70"
                aria-label="View previous challenge"
              >
                <ChevronLeft className="h-3 w-[13px]" />
                Previous
              </button>
            )}

            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex shrink-0 items-center gap-1.5 border-none bg-transparent font-[family-name:var(--font-body)] text-xs leading-[22px] font-semibold tracking-[0.36px] text-white transition-opacity hover:opacity-70"
              aria-label="View next challenge"
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
            (sliderRef.current as any)._scrollTimer = window.setTimeout(
              handleScrollEnd,
              120
            );
          }}
          className="-mx-[clamp(20px,6vw,100px)] flex gap-5 overflow-x-auto px-[clamp(20px,6vw,100px)] py-8 scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((card, i) => (
            <article
              key={`${card.caption}-${i}`}
              data-challenge-card
              className="group relative aspect-[350/450] w-[350px] flex-none overflow-hidden rounded-2xl bg-[#111] shadow-none transition-all duration-500 ease-out [scroll-snap-align:start] hover:z-20 hover:scale-[1.06] hover:shadow-[0_5px_10px_rgba(200,0,0,0.9)] max-md:w-[220px]"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                src={card.bg}
                alt=""
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <img
                className="absolute bottom-28 left-6 z-10 h-10 transition-transform duration-500 ease-out group-hover:translate-y-4"
                src={card.icon}
                alt=""
              />

              <div className="absolute right-6 bottom-4 left-6 z-10 h-20 transition-transform duration-500 ease-out group-hover:translate-y-4">
                <p className=" font-[family-name:var(--font-body)] text-[15px] leading-[24px] font-light tracking-[0.48px] ">
                  {card.caption}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}