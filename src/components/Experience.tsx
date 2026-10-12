export default function Experience() {
  return (
    <section className=" z-0 overflow-hidden bg-black py-[clamp(56px,9vw,130px)]" aria-label="Experience">
      <div className="mx-auto  px-[clamp(20px,6vw,100px)] max-md:px-0">
        {/* Desktop / tablet — original overlay bento grid */}
        <div className="hidden grid-cols-2 gap-3 max-xl:grid-cols-1 md:grid">
          {/* Hero row — spans full width */}
          <div className="relative col-span-2 flex min-h-[240px] items-center overflow-hidden bg-black p-10 max-xl:col-span-1">
            <img
              className="absolute inset-0 h-full w-full object-cover object-right"
              src="/img/experience/exp1.webp"
              alt=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0.1)_65%,transparent_100%)]" />
            <div className="relative z-10">
              <h2 className="mb-1 font-[family-name:var(--font-display)] text-[clamp(24px,3vw,32px)] font-bold tracking-[0.96px] text-white">
                <span className="text-[#cf262b]">10+ Years</span> of Experience
              </h2>
              <p className="m-0 font-[family-name:var(--font-body)] text-base leading-[26px] tracking-[0.48px] text-white">
                in Industrial Engineering and Automation-related
              </p>
            </div>
          </div>

          {/* German Engineering — tall left cell, spans both rows below */}
          <div className="relative row-span-2 flex min-h-[460px] flex-col justify-between overflow-hidden rounded-bl-2xl bg-black p-11 max-xl:row-span-1 max-xl:min-h-[320px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/img/experience/exp2.webp"
              alt=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.35)_45%,transparent_75%)]" />
            <div className="relative z-10">
              <h3 className="m-0 font-[family-name:var(--font-body)] text-[clamp(22px,2.6vw,32px)] leading-[1.25] font-medium tracking-[0.96px] text-white">
                German
                <br />
                Engineering
              </h3>
            </div>
            <div className="relative z-10">
              <p className="m-0 font-[family-name:var(--font-body)] text-base leading-[26px] tracking-[0.48px] text-white">
                Discipline with a quality-driven
                <br />
                execution mindset.
              </p>
            </div>
          </div>

          {/* Pharma and GxP Environments — top right cell */}
          <div className="relative flex min-h-[220px] flex-col justify-center overflow-hidden bg-white p-11">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/img/experience/exp3.webp"
              alt=""
              loading="lazy"
            />
            <div className="relative z-10 max-w-[70%]">
              <h3 className="mb-4 font-[family-name:var(--font-body)] text-[clamp(22px,2.6vw,32px)] leading-[1.25] font-medium tracking-[0.96px] text-[#151515]">
                Pharma and
                <br />
                GxP Environments
              </h3>
              <p className="m-0 font-[family-name:var(--font-body)] text-base leading-[26px] tracking-[0.48px] text-[#151515]">
                with extensive experience working in
                <br />
                highly regulated industries.
              </p>
            </div>
          </div>

          {/* Founder-led Quality Control — bottom right cell */}
          <div className="relative flex min-h-[220px] flex-col justify-center overflow-hidden  bg-[linear-gradient(180deg,#b8bfc0_0%,#ededed_100%)] p-11">
            <div className="relative z-10">
              <h3 className="m-0 font-[family-name:var(--font-body)] text-[clamp(22px,2.6vw,32px)] leading-[1.25] font-medium tracking-[0.96px] text-[#151515]">
                Founder-led Quality Control
                <br />
                with partner-supported
                <br />
                scalability.
              </h3>
            </div>
          </div>
        </div>

        {/* Mobile — text and image separate into stacked blocks, with dedicated mobile assets */}
        <div className="block md:hidden">
          {/* Hero text block */}
          <div className="bg-black px-5 py-8 text-center">
            <h2 className="mb-1 font-[family-name:var(--font-display)] text-[clamp(22px,6vw,28px)] font-bold tracking-[0.96px] text-white">
              <span className="text-[#cf262b]">10+ Years</span> of Experience
            </h2>
            <p className="m-0 font-[family-name:var(--font-body)] text-sm leading-[22px] tracking-[0.48px] text-white/85">
              in Industrial Engineering and Automation-related
            </p>
          </div>

          {/* Hero image — dedicated mobile crop/asset */}
          <img
            className="h-[260px] w-full object-cover"
            src="/img/experience/exp1-mobile.webp"
            alt=""
            loading="lazy"
          />

          {/* German Engineering text block */}
          <div className="bg-black px-5 py-8 text-center">
            <h3 className="m-0 mb-2 font-[family-name:var(--font-body)] text-[clamp(20px,5vw,26px)] leading-[1.25] font-bold tracking-[0.96px] text-white">
              German Engineering
            </h3>
            <p className="m-0 font-[family-name:var(--font-body)] text-sm leading-[22px] tracking-[0.48px] text-white/85">
              Discipline with a quality-driven execution mindset.
            </p>
          </div>

          {/* German Engineering image — dedicated mobile crop/asset */}
          <img
            className="h-[320px] w-full object-cover"
            src="/img/experience/exp2-mobile.webp"
            alt=""
            loading="lazy"
          />

          {/* Pharma text block */}
          <div className="bg-black px-5 py-8 text-center">
            <h3 className="m-0 mb-2 font-[family-name:var(--font-body)] text-[clamp(20px,5vw,26px)] leading-[1.25] font-bold tracking-[0.96px] text-white">
              Pharma and GxP Environments
            </h3>
            <p className="m-0 font-[family-name:var(--font-body)] text-sm leading-[22px] tracking-[0.48px] text-white/85">
              with extensive experience working in highly regulated industries.
            </p>
          </div>

          {/* Bottom strip — Founder-led text + dedicated mobile DNA image, side by side */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center bg-[linear-gradient(180deg,#b8bfc0_0%,#ededed_100%)] p-6">
              <h3 className="m-0 font-[family-name:var(--font-body)] text-[15px] leading-[1.35] font-bold tracking-[0.48px] text-[#151515]">
                Founder-led Quality Control with partner-supported scalability.
              </h3>
            </div>
            <img
              className="h-full w-full object-cover"
              src="/img/experience/exp3-mobile.webp"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}