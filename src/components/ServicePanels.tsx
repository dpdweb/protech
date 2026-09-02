import { SERVICE_PANELS } from "../data/content";

export default function ServicePanels() {
  return (
    <section className="panels" id="services" aria-label="Service areas">
      <div className="container">
        <p className="panels__label">CONCEPTUALIZING</p>
      </div>
      <div className="panels__track">
        {SERVICE_PANELS.map((panel) => (
          <article className="panel" id={`panel-${panel.number}`} key={panel.number}>
            <div className="container">
              <p className="panel__number">{panel.number}</p>
              <div className="panel__head">
                <h3 className="panel__title">{panel.title}</h3>
                <button className="section-next" type="button">
                  Next <img src={panel.nextIcon} alt="" />
                </button>
              </div>
              {panel.image ? (
                <img className="panel__image" src={panel.image} alt="" loading="lazy" />
              ) : (
                <div
                  className="panel__image bg-placeholder"
                  role="img"
                  aria-label={panel.title}
                />
              )}
              <div className="panel__lists">
                <p>
                  {panel.listA.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < panel.listA.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p>
                  {panel.listB.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < panel.listB.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
