import Link from "next/link";
import {
  ArrowUpRight,
  Code,
  FileText,
  Github,
  GraduationCap,
  LinkedIn,
  Spark,
} from "./ui/icons";

const featuredProjects = [
  {
    number: "01",
    title: "Life Copilot",
    description:
      "A personal productivity experience designed to turn everyday priorities into focused, manageable action.",
    tags: ["Product thinking", "Full stack", "UX"],
    className: "home-project-coral",
  },
  {
    number: "02",
    title: "Tool Share App",
    description:
      "A community-focused application that makes it easier to discover, borrow, and manage shared tools.",
    tags: ["React", "REST API", "Database"],
    className: "home-project-blue",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
      "A responsive redesign centered on clearer navigation, accessible content, and a more useful user journey.",
    tags: ["TypeScript", "Responsive", "UI"],
    className: "home-project-gold",
  },
];

const skills = [
  { label: "Frontend", items: ["React", "Angular", "TypeScript"] },
  { label: "Backend", items: ["C#", ".NET", "Java", "Spring Boot"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB"] },
  {
    label: "Practices",
    items: ["Agile", "BDD / TDD", "REST APIs", "Product thinking"],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero shell developer-hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span /> Software Developer
          </p>
          <h1>
            Building practical,
            <br />
            <em>user-centered</em> systems.
          </h1>
          <p className="hero-lede">
            I’m Zachary Wotawa, a software developer who connects thoughtful
            front-end experiences with real business needs. My background in
            accounting and agile delivery helps me approach software as both a
            technical system and a practical tool for people.
          </p>
          <div className="button-row hero-actions">
            <Link className="button button-dark" href="/projects">
              View Projects <ArrowUpRight />
            </Link>
            <a
              className="button button-outline"
              href="/Zachary-Wotawa-Resume.pdf"
              download
            >
              <FileText /> Download Resume
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/zachary-wotawa-27892a21"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn /> LinkedIn
            </a>
          </div>
        </div>
        <div
          className="hero-art reveal delay-1"
          aria-label="Abstract portrait composition"
        >
          <div className="portrait-frame">
            <div className="portrait-sun" />
            <div className="portrait-figure">
              <span />
            </div>
            <p>
              Build with
              <br />
              purpose.
            </p>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-note">
            <Code />
            Software meets
            <br />
            business thinking
          </div>
        </div>
      </section>

      <section className="shell section-space home-projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> Featured projects
            </p>
            <h2>
              Ideas brought
              <br />
              to life.
            </h2>
          </div>
          <div className="section-side-copy">
            <p>
              Projects that combine practical problems, user-centered
              decisions, and hands-on software development.
            </p>
            <Link href="/projects" className="text-link">
              Explore all projects <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="home-project-grid">
          {featuredProjects.map((project) => (
            <Link
              href="/projects"
              className={`home-project-card ${project.className}`}
              key={project.number}
            >
              <div className="home-project-top">
                <span>{project.number}</span>
                <ArrowUpRight />
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="home-project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="focus-section">
        <div className="shell section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> Current focus
              </p>
              <h2>
                Learning deeply.
                <br />
                Building broadly.
              </h2>
            </div>
            <p>
              I’m growing the technical depth and delivery experience needed to
              build dependable systems from interface to deployment.
            </p>
          </div>
          <div className="focus-grid">
            <article>
              <span>01</span>
              <GraduationCap />
              <h3>Finishing my CS degree</h3>
              <p>
                Strengthening my computer science foundation and connecting
                core concepts to applied development.
              </p>
            </article>
            <article>
              <span>02</span>
              <Code />
              <h3>Building full-stack projects</h3>
              <p>
                Creating complete applications across front ends, APIs,
                business logic, and persistent data.
              </p>
            </article>
            <article>
              <span>03</span>
              <Spark />
              <h3>Improving systems and deployment</h3>
              <p>
                Developing stronger instincts for system design, cloud
                deployment, reliability, and maintainability.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="shell skills-section">
        <div className="skills-heading">
          <p className="eyebrow">
            <span /> Skills
          </p>
          <h2>
            Tools for building the
            <br />
            <em>whole experience.</em>
          </h2>
          <p>
            A growing technical toolkit, supported by collaborative practices
            and a product-minded approach.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((group, index) => (
            <article key={group.label}>
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell contact-cta">
        <div>
          <p className="eyebrow light">
            <span /> Let’s connect
          </p>
          <h2>Interested in working together?</h2>
          <p>
            I’m always glad to talk about software, practical problems, and
            opportunities to build something useful.
          </p>
        </div>
        <div className="contact-cta-actions">
          <Link className="button button-light" href="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github /> GitHub
          </a>
        </div>
      </section>
    </>
  );
}
