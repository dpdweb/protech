export default function Hero() {
  return (
    <section
      className="hero bg-placeholder"
      style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      aria-label="Introduction"
    >
      <div className="hero__inner">
        <h1 className="hero__title">
          Secure Automation.
          <br />
          Engineered for Industry.
        </h1>
        <p className="hero__subtitle">
          German-led industrial automation and OT security consulting for secure, scalable and
          reliable production systems.
        </p>
        <div className="hero__trust">
          <div className="hero__avatars">
            <img src="/img/ellipse-1.png" alt="" width={43} height={42} loading="lazy" />
            <img src="/img/ellipse-2.png" alt="" width={42} height={42} loading="lazy" />
            <img src="/img/ellipse-3.png" alt="" width={43} height={42} loading="lazy" />
          </div>
          <p className="hero__trust-text">
            <strong>10+ years</strong> of industrial engineering and automation-related
            experience, regulated industry know-how and structured project delivery.
          </p>
        </div>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#services">
            Book a Consultation <img src="/img/vector-35.svg" alt="" />
          </a>
          <a className="btn btn-outline" href="#services">
            View Services <img src="/img/vector-5.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
