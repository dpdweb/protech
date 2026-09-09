import { useState, type ReactNode } from "react";
import type { AccordionItem } from "../data/content";

interface SplitListProps {
  heading: ReactNode;
  subtitle: string;
  items: AccordionItem[];
  reverse?: boolean;
  ariaLabel: string;
}

export default function SplitList({
  heading,
  subtitle,
  items,
  reverse = false,
  ariaLabel,
}: SplitListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      className={`relative z-20 bg-black mx-auto grid max-w-[1240px] gap-12 px-[clamp(20px,6vw,100px)] py-[clamp(56px,9vw,130px)] max-lg:grid-cols-1 ${
        reverse
          ? "grid-cols-[1fr_1.05fr]"
          : "grid-cols-[1.05fr_1fr]"
      }`}
      aria-label={ariaLabel}
    >
      {/* Heading */}
      <div className={reverse ? "order-2 max-lg:order-none" : ""}>
        <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3vw,32px)] font-bold tracking-[0.96px] leading-8">
          {heading}
        </h2>

        <p className="m-0 max-w-[330px] font-[family-name:var(--font-body)] text-base leading-[26px] tracking-[0.48px] text-white/72">
          {subtitle}
        </p>
      </div>

      {/* Accordion */}
      <div className={reverse ? "order-1 max-lg:order-none" : ""}>
        <div className="flex flex-col gap-6">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `accordion-button-${index}`;
            const panelId = `accordion-panel-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-white/12 pb-5"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent p-0 text-left text-white"
                >
                  <span className="font-[family-name:var(--font-body)] text-base leading-[26px] font-semibold tracking-[0.48px]">
                    {item.question}
                  </span>

                  {/* Plus/minus icon */}
                  <span className="relative h-3.5 w-3.5 shrink-0">
                    <span className="absolute top-1/2 left-0 h-0.5 w-3.5 -translate-y-1/2 bg-white" />

                    <span
                      className={`absolute top-0 left-1/2 h-3.5 w-0.5 -translate-x-1/2 bg-white transition-all duration-300 ${
                        isOpen
                          ? "rotate-90 opacity-0"
                          : "rotate-0 opacity-100"
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {item.answer && (
                      <p className="mt-4 mb-0 max-w-[480px] font-[family-name:var(--font-body)] text-[12px] leading-[22px] font-light tracking-[0.36px] text-white/72">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}