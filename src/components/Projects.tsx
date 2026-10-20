import { useState } from "react";
import { PROJECTS } from "../data/content"; // adjust the import path to match your project

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="projects" className="relative z-20 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Project experience">
      <div className="mx-auto px-[clamp(20px,6vw,100px)] max-md:px-0">
        <h2 className="mb-10 font-[family-name:var(--font-body)] text-[clamp(24px,3vw,32px)] font-medium tracking-[0.96px] max-md:px-[clamp(20px,6vw,100px)]">
          <span className="text-[#cf262b]">Project</span>
          <br />
          Experience
        </h2>

        {/* Desktop: grid, hover reveals details.
            Tablet / mobile: same collapsed teaser, tap reveals details. */}
        <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-xl:gap-5 max-md:flex max-md:grid-cols-none max-md:gap-4 max-md:overflow-x-auto max-md:px-[clamp(20px,6vw,100px)] max-md:[scroll-snap-type:x_mandatory] max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
          {PROJECTS.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className="group relative h-[clamp(420px,42vw,440px)] cursor-pointer overflow-hidden rounded-2xl border border-[#272727] max-md:h-[440px] max-md:w-full max-md:flex-none max-md:[scroll-snap-align:center]"
                key={project.title}
                onClick={() => toggleCard(index)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleCard(index);
                  }
                }}
              >
                {/* Background image — always fills the card, never moves */}
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={project.image}
                  alt=""
                  loading="lazy"
                />

                {/* Black overlay — fades in on hover (desktop) or when tapped open (touch).
                    Only one background state is ever present at once. */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 ease-out ${
                    isOpen ? "bg-black/75" : "bg-black/0 lg:group-hover:bg-black/75"
                  }`}
                />

                {/* Content block — only one translate class is ever present at once,
                    so there's no conflicting utility fighting for the same property. */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-5 transition-transform duration-700 ease-out ${
                    isOpen ? "translate-y-0" : "translate-y-[calc(100%-152px)] lg:group-hover:translate-y-0"
                  }`}
                >
                  <img className="mb-5 h-9 w-9" src={project.icon} alt="" />

                  <h3 className="m-0 mb-3.5 h-16 font-[family-name:var(--font-body)] text-base leading-[1.4] font-medium tracking-[0.48px] text-white">
                    {project.title}
                  </h3>

                  <div className="flex h-82 flex-col gap-1">
                    <p className="m-0 font-[family-name:var(--font-body)] text-xs leading-[20px] tracking-[0.36px] text-white/72">
                      <strong className="font-semibold text-white">Focus: </strong>
                      {project.focus}
                    </p>
                    <p className="m-0 font-[family-name:var(--font-body)] text-xs leading-[20px] tracking-[0.36px] text-white/72">
                      <strong className="font-semibold text-white">Technologies / themes: </strong>
                      {project.technologies}
                    </p>
                    <p className="m-0 font-[family-name:var(--font-body)] text-xs leading-[20px] tracking-[0.36px] text-white/72">
                      <strong className="font-semibold text-white">Outcome: </strong>
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}