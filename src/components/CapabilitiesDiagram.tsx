import { DIAGRAM_NODES } from "../data/content";

export default function CapabilitiesDiagram() {
  return (
    <section className="diagram-section" aria-label="Our capabilities">
      <div className="container">
        <div className="diagram diagram--services">
          <div
            className="diagram__center bg-placeholder"
            style={{ borderRadius: "50%", aspectRatio: "1 / 1" }}
          />
          {DIAGRAM_NODES.map((node) => (
            <div className="diagram__node" key={node.label}>
              <span className="diagram__node-icon">
                <img src={node.icon} alt="" />
              </span>
              <span className="diagram__node-label">{node.label}</span>
            </div>
          ))}
        </div>
        <div className="diagram__footnotes">
          <p className="diagram__footnote">
            Founder-led
            <br />
            Control
          </p>
          <p className="diagram__footnote">
            Single Customer
            <br />
            Contact
          </p>
        </div>
      </div>
    </section>
  );
}
