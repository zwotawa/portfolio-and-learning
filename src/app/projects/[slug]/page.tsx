import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "../../ui/icons";
import { getProject, projects } from "../project-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <section className="shell detail-hero">
        <nav className="project-breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">Projects</Link>
          <span>/</span>
          <span>{project.title}</span>
        </nav>

        <div className="detail-hero-grid">
          <div>
            <p className="eyebrow">
              <span /> {project.type}
            </p>
            <h1>{project.title}</h1>
            <p className="detail-summary">{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={`detail-visual ${project.className}`}>
            <span className="detail-number">{project.number}</span>
            <div className="visual-shape one" />
            <div className="visual-shape two" />
            <strong>{project.highlight}</strong>
          </div>
        </div>
      </section>

      <section className="detail-overview">
        <div className="shell detail-two-column">
          <article>
            <p className="detail-label">Problem</p>
            <h2>What need did this solve?</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <p className="detail-label">Goal</p>
            <h2>What was I trying to build?</h2>
            <p>{project.goal}</p>
          </article>
        </div>
      </section>

      <section className="shell detail-role-section">
        <div>
          <p className="eyebrow">
            <span /> My role
          </p>
          <h2>From problem framing<br />through implementation.</h2>
          <p>{project.role}</p>
        </div>
        <aside className="tech-panel">
          <p className="detail-label">Tech stack</p>
          <ul>
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="detail-features">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow light">
                <span /> Key features
              </p>
              <h2>What the experience<br />is built to do.</h2>
            </div>
            <p>
              The primary functionality supporting the project’s central user
              need.
            </p>
          </div>
          <div className="feature-list">
            {project.features.map((feature, index) => (
              <article key={feature}>
                <span>0{index + 1}</span>
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell reflection-grid">
        <article>
          <p className="detail-label">Challenges</p>
          <h2>Where the work got difficult.</h2>
          <p>{project.challenges}</p>
        </article>
        <article className="learning-card">
          <p className="detail-label">What I learned</p>
          <h2>What I’ll carry forward.</h2>
          <p>{project.learned}</p>
        </article>
      </section>

      <section className="project-proof">
        <div className="shell">
          <div className="proof-heading">
            <div>
              <p className="eyebrow">
                <span /> Screenshots / demo
              </p>
              <h2>Interface preview.</h2>
            </div>
            <div className="proof-links">
              <span className="proof-unavailable">
                <Github /> Repository link coming soon
              </span>
              {project.liveUrl && (
                <Link href={project.liveUrl} className="text-link">
                  View live project <ArrowUpRight />
                </Link>
              )}
            </div>
          </div>

          <div className={`browser-mockup ${project.className}`}>
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <p>{project.slug}.project</p>
            </div>
            <div className="mockup-content">
              <aside>
                <strong>{project.number}</strong>
                <span />
                <span />
                <span />
              </aside>
              <div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <div className="mockup-line wide" />
                <div className="mockup-line" />
                <div className="mockup-cards">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <p className="proof-caption">
            Stylized interface preview. Replace with final product screenshots
            or an embedded demo as the project evolves.
          </p>
        </div>
      </section>

      <section className="shell improvements-section">
        <div>
          <p className="eyebrow">
            <span /> Next improvements
          </p>
          <h2>Where this goes next.</h2>
        </div>
        <ol>
          {project.improvements.map((improvement, index) => (
            <li key={improvement}>
              <span>0{index + 1}</span>
              <p>{improvement}</p>
            </li>
          ))}
        </ol>
      </section>

      <nav className="shell project-pagination" aria-label="Project navigation">
        {previousProject ? (
          <Link href={`/projects/${previousProject.slug}`}>
            <ArrowLeft />
            <span>
              <small>Previous project</small>
              {previousProject.title}
            </span>
          </Link>
        ) : (
          <Link href="/projects">
            <ArrowLeft />
            <span>
              <small>Back to</small>
              All projects
            </span>
          </Link>
        )}
        <Link href={`/projects/${nextProject.slug}`}>
          <span>
            <small>Next project</small>
            {nextProject.title}
          </span>
          <ArrowRight />
        </Link>
      </nav>
    </>
  );
}
