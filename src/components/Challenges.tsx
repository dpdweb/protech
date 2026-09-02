import { CHALLENGES } from "../data/content";

export default function Challenges() {
  return (
    <section className="challenges" aria-label="Industry challenges">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">
            Industrial Systems Under Pressure: Complexity, Risk, and Compliance Challenges
          </h2>
          <button className="section-next" type="button">
            Next <img src="/img/vector-14.svg" alt="" />
          </button>
        </div>
        <div className="challenges__row">
          {CHALLENGES.map((card) => (
            <div className="challenge-card" key={card.caption}>
              <img className="challenge-card__bg" src={card.bg} alt="" loading="lazy" />
              <p className="challenge-card__caption">{card.caption}</p>
              <img className="challenge-card__icon" src={card.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
