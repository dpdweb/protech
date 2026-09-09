import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section className="relative z-20 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Project experience">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,6vw,100px)]">
        <h2 className="mb-10 font-[family-name:var(--font-body)] text-[clamp(24px,3vw,32px)] font-medium tracking-[0.96px]">
          Project
          <br />
          Experience
        </h2>

        <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
          {PROJECTS.map((project) => (
            <article
              className="group relative h-[clamp(420px,42vw,480px)] overflow-hidden rounded-2xl border border-[#272727]"
              key={project.title}
            >
              {/* Background image — always fills the card, never moves */}
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={project.image}
                alt=""
                loading="lazy"
              />

              {/* Black overlay — fades in on hover, also static (never translates) */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/75" />

              {/* Content block — icon, title, and paragraphs move together as one unit.
                  Taller than the card; sits low by default (icon + title visible,
                  paragraphs pushed below the fold) and translates up on hover to reveal
                  everything, scrolling underneath the card's fixed frame. */}
              <div className="absolute inset-x-0 bottom-0 z-10 translate-y-[calc(100%-152px)] p-5 transition-transform duration-700 ease-out group-hover:translate-y-0">
                <img className="mb-4 h-9 w-9" src={project.icon} alt="" />

                <h3 className="m-0 mb-3.5 font-[family-name:var(--font-body)] text-base leading-[1.4] font-medium tracking-[0.48px] text-white">
                  {project.title}
                </h3>

                <div className="flex flex-col gap-3.5">
                  <p className="m-0 font-[family-name:var(--font-body)] text-xs leading-[22px] tracking-[0.36px] text-white/72">
                    <strong className="font-semibold text-white">Focus: </strong>
                    {project.focus}
                  </p>
                  <p className="m-0 font-[family-name:var(--font-body)] text-xs leading-[22px] tracking-[0.36px] text-white/72">
                    <strong className="font-semibold text-white">Technologies / themes: </strong>
                    {project.technologies}
                  </p>
                  <p className="m-0 font-[family-name:var(--font-body)] text-xs leading-[22px] tracking-[0.36px] text-white/72">
                    <strong className="font-semibold text-white">Outcome message: </strong>
                    {project.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}