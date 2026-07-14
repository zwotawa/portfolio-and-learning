import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../ui/icons";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software development projects by Zachary Wotawa, including full-stack applications and user-centered web experiences.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero shell split-hero projects-hero">
        <div>
          <p className="eyebrow">
            <span /> Selected work
          </p>
          <h1>
            Ideas made <em>real.</em>
          </h1>
        </div>
        <p className="intro-copy">
          A growing body of work focused on practical problems, thoughtful user
          experiences, and building complete systems from concept to delivery.
        </p>
      </section>

      <section className="shell project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className={`project-image ${project.className}`}>
              <span className="project-index">{project.number}</span>
              <div className="visual-shape one" />
              <div className="visual-shape two" />
              <strong>{project.highlight}</strong>
            </div>

            <div className="project-copy">
              <p className="eyebrow">
                <span /> {project.type}
              </p>
              <h2>{project.title}</h2>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{project.summary}</p>
              <Link href={`/projects/${project.slug}`} className="text-link">
                View project details <ArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="learning-work-section">
        <div className="shell learning-work-grid">
          <div className="learning-work-heading">
            <p className="eyebrow light">
              <span /> Learning / CS degree work
            </p>
            <h2>
              Strengthening the<br />foundations behind the build.
            </h2>
            <p>
              My computer science coursework complements my portfolio projects
              with deeper practice in the concepts that make software reliable,
              understandable, and maintainable.
            </p>
          </div>

          <div className="learning-work-list">
            <article>
              <span>01</span>
              <div>
                <h3>Core computer science</h3>
                <p>
                  Developing stronger foundations in algorithms, data
                  structures, object-oriented programming, and computational
                  problem solving.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Software engineering</h3>
                <p>
                  Applying requirements analysis, testing, version control,
                  documentation, and collaborative development practices.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Systems and data</h3>
                <p>
                  Expanding my understanding of databases, system design, APIs,
                  and the way application layers work together.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="project-note">
        <div className="shell">
          <span>More in progress</span>
          <p>
            I’m continuing to expand these projects as I deepen my full-stack,
            system design, and cloud deployment skills.
          </p>
          <Link href="/contact" className="button button-light">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
