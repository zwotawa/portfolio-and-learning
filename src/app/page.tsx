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
    slug: "life-copilot",
    title: "Life Copilot",
    description:
      "A personal productivity system for weekly planning, daily rotation, progress tracking, and adaptive goal surfacing.",
    tags: ["Angular", ".NET", "PostgreSQL"],
    className: "home-project-coral",
  },
  {
    number: "02",
    slug: "tool-share-app",
    title: "Tool Share App",
    description:
      "An early-stage tool-sharing project. Only planning and some initial environment setup are underway; app features are not yet implemented.",
    tags: ["Work in progress", "Planning & setup"],
    className: "home-project-blue",
  },
  {
    number: "03",
    slug: "website-redesign",
    title: "Website Redesign",
    description:
      "A modernized personal and business website concept with clearer messaging, improved layout, and a more professional presentation.",
    tags: ["UX", "Responsive", "Client work"],
    className: "home-project-gold",
  },
];

const skills = [
  {
    label: "Front-End Development",
    description:
      "Professional front-end experience with React at Express Scripts/Cigna and Angular at Edward Jones, building enterprise interfaces around real business workflows, usability, and maintainability.",
    items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive interfaces", "Component-based UI"],
  },
  {
    label: "Back-End & API Development",
    description:
      "Expanding full-stack skills through Life Copilot’s C#/.NET APIs, custom JWT authentication, and goal rotation logic for weekly planning and daily surfacing. Building on professional Java exposure, with Spring Boot practice through Tool Share.",
    items: ["C#", ".NET", "Java", "Spring Boot", "REST APIs", "JWT authentication", "Business logic"],
  },
  {
    label: "Databases & Persistence",
    description:
      "Experience with MongoDB at Express Scripts/Cigna and PostgreSQL in Life Copilot, connecting application workflows to persistent data for planning and progress tracking. Growing skills in relational modeling and data access.",
    items: ["PostgreSQL", "MongoDB", "Relational modeling", "Data access", "DBeaver", "Migrations / seeding"],
  },
  {
    label: "Testing, Agile & Delivery",
    description:
      "Professional experience collaborating in agile teams and contributing to tested enterprise applications. Edward Jones work included Angular, Kotlin, and Android Studio in financial-services software, with an emphasis on incremental delivery.",
    items: ["Agile", "Scrum", "BDD / TDD", "Automated testing", "Collaboration", "Iterative delivery", "Kotlin", "Android Studio"],
  },
  {
    label: "Cloud, DevOps & Tooling",
    description:
      "Hands-on project experience deploying Life Copilot across Vercel and Azure, configuring environments, and troubleshooting deployments. Tool Share adds Docker and local setup practice as I develop more reliable workflows.",
    items: ["Azure", "Vercel", "Docker", "Git", "GitHub", "Environment configuration", "Deployment troubleshooting"],
  },
  {
    label: "Product & Business Thinking",
    description:
      "My accounting background and financial-services experience help me understand business constraints and user needs. I apply that perspective to practical features such as Life Copilot’s weekly planning and progress tracking.",
    items: ["Accounting background", "Financial services", "Workflow analysis", "User-centered problem solving", "Product thinking"],
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
              href="https://drive.google.com/uc?export=download&id=1bDx9eRqPVPzL75UOqhnlNgXG4xrbdWzm"
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
              href={`/projects/${project.slug}`}
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
            Professional front-end experience, expanding into full-stack
            development through hands-on projects and ongoing Computer Science
            degree work.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((group, index) => (
            <article key={group.label}>
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">
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
          <a href="https://github.com/zwotawa" target="_blank" rel="noreferrer">
            <Github /> GitHub
          </a>
        </div>
      </section>
    </>
  );
}
