import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../ui/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software development projects by Zachary Wotawa, including full-stack applications and user-centered web experiences.",
};

const projects = [
  {
    number: "01",
    type: "Full-stack application",
    title: "Life Copilot",
    summary:
      "A personal productivity experience designed to turn everyday priorities into focused, manageable action. The project explores how thoughtful workflows and clear feedback can help people move from intention to progress.",
    highlight: "Productivity, simplified",
    className: "project-coral",
    tags: ["Product thinking", "Full stack", "UX"],
  },
  {
    number: "02",
    type: "Community platform",
    title: "Tool Share App",
    summary:
      "A community-focused application that makes it easier to discover, borrow, and manage shared tools. It brings together a responsive interface, RESTful services, and persistent data around a practical local need.",
    highlight: "Built for sharing",
    className: "project-blue",
    tags: ["React", "REST API", "Database"],
  },
  {
    number: "03",
    type: "Front-end experience",
    title: "Website Redesign",
    summary:
      "A responsive redesign centered on clearer navigation, accessible content, and a more useful user journey. The work balances visual refinement with practical improvements to structure and usability.",
    highlight: "Clearer by design",
    className: "project-gold",
    tags: ["TypeScript", "Responsive design", "UI / UX"],
  },
  {
    number: "04",
    type: "Professional portfolio",
    title: "This Website",
    summary:
      "A custom portfolio built to communicate my experience, projects, and current direction as a software developer. It uses reusable components, responsive layouts, and a cohesive design system across five routes.",
    highlight: "Next.js 16",
    className: "project-mint",
    tags: ["Next.js", "React", "TypeScript", "Responsive design"],
  },
];

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
              <Link href="/contact" className="text-link">
                Ask me about this project <ArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
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
