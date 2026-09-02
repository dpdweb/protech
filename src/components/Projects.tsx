import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section className="projects" aria-label="Project experience">
      <div className="container">
        <h2 className="projects__title">
          Project
          <br />
          Experience
        </h2>
        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <img className="project-card__image" src={project.image} alt="" loading="lazy" />
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__meta">
                  <strong>Focus: </strong>
                  {project.focus}
                </p>
                <p className="project-card__meta">
                  <strong>Technologies / themes: </strong>
                  {project.technologies}
                </p>
                <p className="project-card__meta">
                  <strong>Outcome message: </strong>
                  {project.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
