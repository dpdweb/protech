import type { ReactNode } from "react";
import type { AccordionItem } from "../data/content";

interface SplitListProps {
  heading: ReactNode;
  subtitle: string;
  items: AccordionItem[];
  reverse?: boolean;
  ariaLabel: string;
}

export default function SplitList({ heading, subtitle, items, reverse, ariaLabel }: SplitListProps) {
  const className = reverse ? "split-list split-list--reverse container" : "split-list container";

  return (
    <section className={className} aria-label={ariaLabel}>
      <div className="split-list__intro">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="split-list__items">
        <div className="accordion">
          {items.map((item, i) => (
            <details className="accordion-item" open={i === 0} key={item.question}>
              <summary className="accordion-item__trigger">
                <span>{item.question}</span>
                <span className="accordion-item__icon"></span>
              </summary>
              {item.answer && <p className="accordion-item__panel">{item.answer}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
