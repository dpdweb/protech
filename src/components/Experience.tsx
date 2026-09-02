export default function Experience() {
  return (
    <section className="experience" aria-label="Experience">
      <div className="container">
        <div className="experience__banner">
          <img src="/img/image-6.png" alt="" loading="lazy" />
          <div className="experience__banner-copy">
            <h2 className="experience__title">
              <span>10+ Years</span> of Experience
            </h2>
            <p>in Industrial Engineering and Automation-related</p>
          </div>
        </div>
        <div className="experience__tiles">
          <div className="experience__tile experience__tile--dark">
            <img className="experience__tile-bg" src="/img/image-7.png" alt="" loading="lazy" />
            <div className="experience__tile-copy">
              <h3>
                German
                <br />
                Engineering
              </h3>
              <p>
                Discipline with a quality-driven
                <br />
                execution mindset.
              </p>
            </div>
          </div>
          <div className="experience__tile experience__tile--light">
            <img className="experience__tile-bg" src="/img/image-8.png" alt="" loading="lazy" />
            <div className="experience__tile-copy">
              <h3>
                Pharma and
                <br />
                GxP Environments
              </h3>
              <p>
                with extensive experience working in
                <br />
                highly regulated industries.
              </p>
            </div>
          </div>
          <div className="experience__tile experience__tile--light-2">
            <div className="experience__tile-copy">
              <h3>
                Founder-led Quality Control
                <br />
                with partner-supported
                <br />
                scalability.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
