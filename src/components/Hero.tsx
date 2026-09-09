import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[800px] items-center overflow-hidden bg-cover bg-center bg-[linear-gradient(135deg,#1a1a1a_0%,#050505_100%)] pt-[160px] pb-20 px-[clamp(20px,6vw,100px)] after:absolute after:inset-0 after:z-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.55)_100%)] max-lg:min-h-[640px] max-lg:pt-[140px] max-md:min-h-[560px] max-md:px-5 max-md:pt-[120px] max-md:pb-[60px]"
      style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      aria-label="Introduction"
    >
      <div className="relative z-10 max-w-[600px]">

        <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(30px,3.4vw,44px)] leading-[1.15] font-bold tracking-[1.32px] max-[430px]:text-[28px]">
          Secure Automation.
          <br />
          Engineered for Industry.
        </h1>
        <p className="mb-10 max-w-[560px] font-[family-name:var(--font-body)] text-base leading-[26px] font-normal tracking-[0.48px]">
          German-led industrial automation and OT security consulting for secure, scalable and
          reliable production systems.
        </p>
        <div className="mb-8 flex items-center gap-3.5 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-2.5">
          <div className="flex">
            <img
              src="/img/ellipse-1.png" alt="" width={43} height={42} loading="lazy"
              className="ml-0 h-[42px] w-[43px] rounded-full object-cover"
            />
            <img
              src="/img/ellipse-2.png" alt="" width={42} height={42} loading="lazy"
              className="-ml-3.5 h-[42px] w-[42px] rounded-full object-cover"
            />
            <img
              src="/img/ellipse-3.png" alt="" width={43} height={42} loading="lazy"
              className="-ml-3.5 h-[42px] w-[43px] rounded-full object-cover"
            />
          </div>
          <p className="max-w-[420px] font-[family-name:var(--font-body)] text-xs leading-[22px] tracking-[0.36px]">
            <strong className="font-bold">10+ years</strong> of industrial engineering and
            automation-related experience, regulated industry know-how and structured project
            delivery.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 max-md:flex-col max-md:items-stretch">
          <a
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[64px] bg-[linear-gradient(46deg,#9d1a20_0%,#d0262c_23%,#9d1a20_100%)] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs leading-[26px] font-light tracking-[0.36px] text-white max-md:w-full"
            href="#services"
          >
            Book a Consultation  <ArrowUpRight className="h-3 w-[12px]" />
          </a>
          <a
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[64px] border border-white/35 px-8 py-3.5 font-[family-name:var(--font-body)] text-xs leading-[26px] font-light tracking-[0.36px] text-white max-md:w-full"
            href="#services"
          >
            View Services <ArrowUpRight className="h-3 w-[12px]" />
          </a>
        </div>
        
      </div>
    </section>
  );
}
