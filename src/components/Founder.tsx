import { ArrowUpRight } from "lucide-react";
import { FOUNDER } from "../data/content";

export default function Founder() {
  return (
    <section id="founder" className="relative z-20 bg-black py-[clamp(56px,9vw,130px)]" aria-label="Founder">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,6vw,100px)]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[27fr_73fr] lg:gap-x-[clamp(32px,4vw,70px)]">
          {/* Photo — landscape crop on mobile, tall portrait on desktop.
              <picture> means each device downloads only one of the two files. */}
          <div className="relative aspect-[5/3] w-full overflow-hidden lg:aspect-auto lg:min-h-[560px]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={FOUNDER.imageDesktop} />
              <img
                src={FOUNDER.imageMobile}
                alt={FOUNDER.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-col">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-5 lg:mb-3">
              <span aria-hidden="true" className="h-[3px] w-[40px] shrink-0 bg-[#cf262b] lg:w-[62px]" />
              <p className="m-0 font-[family-name:var(--font-body)] text-[14px] font-light tracking-[0.48px] text-white/70 lg:text-[clamp(14px,1.3vw,18px)]">
                {FOUNDER.eyebrow}
              </p>
            </div>

            <h2 className="m-0 mb-8 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,44px)] leading-[1.15] font-bold tracking-[0.96px] text-white lg:mb-5">
              {FOUNDER.heading}
            </h2>

            {/* Name + role */}
            <div className="mb-6 lg:mb-5">
              <h3 className="m-0 font-[family-name:var(--font-body)] text-[clamp(22px,2vw,28px)] leading-tight font-semibold tracking-[0.48px] text-white">
                {FOUNDER.name}
              </h3>
              <p className="m-0 mt-1 font-[family-name:var(--font-body)] text-[15px] font-light tracking-[0.36px] text-white/70 lg:mt-2 lg:text-[clamp(18px,1.8vw,26px)]">
                {FOUNDER.title}
              </p>
              <p className="m-0 font-[family-name:var(--font-body)] text-[15px] font-light tracking-[0.36px] text-white/70 lg:mt-1 lg:text-[clamp(14px,1.3vw,18px)]">
                {FOUNDER.subtitle}
              </p>
            </div>

            <p className="m-0 mb-8 font-[family-name:var(--font-body)] text-[14px] leading-[2] font-light tracking-[0.36px] text-white/65 lg:mb-10 lg:text-[15px] lg:leading-[1.5]">
              {FOUNDER.bio}
            </p>

            {/* Feature chips — 2×2 on mobile, one row on desktop */}
            <ul className="m-0 mb-6 grid list-none grid-cols-2 gap-3 p-0 lg:grid-cols-4">
              {FOUNDER.chips.map((chip) => (
                <li
                  key={chip.label}
                  className="flex items-center gap-3 rounded-lg border border-white/15 px-4 py-4 max-sm:flex-col max-sm:items-start max-sm:gap-2 lg:px-5"
                >
                  <img src={chip.icon} alt="" className="h-6 w-6 shrink-0 object-contain" loading="lazy" />
                  <span className="font-[family-name:var(--font-body)] text-[13px] leading-snug font-light tracking-[0.36px] text-white/85 lg:text-[15px]">
                    {chip.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* LinkedIn button — same red gradient sweep as the other CTAs */}
            <a
              href={FOUNDER.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10 inline-flex w-fit items-center justify-center gap-2 rounded-[64px] bg-[linear-gradient(46deg,#9d1a20_0%,#d0262c_50%,#9d1a20_100%)] bg-[length:200%_100%] bg-[position:0%_0%] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs leading-[26px] font-light tracking-[0.36px] text-white transition-[background-position] duration-500 ease-out hover:bg-[position:100%_0%] max-sm:w-full lg:mb-10"
            >
              View LinkedIn Profile <ArrowUpRight className="h-3 w-[12px]" />
            </a>

            {/* Selected experience */}
            <div className="mb-6 flex items-center gap-5">
              <span aria-hidden="true" className="h-[3px] w-[40px] shrink-0 bg-[#cf262b] lg:w-[62px]" />
              <h3 className="m-0 font-[family-name:var(--font-body)] text-[16px] font-light tracking-[0.48px] text-white/80 lg:text-[clamp(16px,1.5vw,20px)]">
                Selected Experience
              </h3>
            </div>

            <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {FOUNDER.experience.map((item) => (
                <li key={item.company} className="flex flex-col rounded-lg border border-white/15 p-6">
                  <img
                    src={item.logo}
                    alt={item.company}
                    loading="lazy"
                    className="mb-6 h-[44px] w-auto max-w-full self-start object-contain object-left"
                  />
                  <p className="m-0 mb-3 font-[family-name:var(--font-body)] text-[15px] leading-snug font-normal tracking-[0.36px] text-white">
                    {item.role}
                  </p>
                  <p className="m-0 font-[family-name:var(--font-body)] text-[13px] leading-[1.5] font-light tracking-[0.36px] text-white/60">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}