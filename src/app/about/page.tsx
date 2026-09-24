import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass } from "../ui/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Zachary Wotawa is a software developer with enterprise front-end experience, a business and accounting background, and a growing full-stack practice.",
};

const principles = [
  ["01", "Make the problem clear", "I work to understand the workflow, user need, and business reason before jumping into implementation."],
  ["02", "Build useful, maintainable systems", "I care about readable code, practical architecture, automated testing, and systems that can keep improving after the first version ships."],
  ["03", "Keep learning in public", "I use projects, coursework, and iteration to strengthen my skills and show visible progress over time—including being clear about what is still in progress."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero shell split-hero">
        <div>
          <p className="eyebrow"><span /> About</p>
          <h1>I build practical software for <em>real workflows.</em></h1>
        </div>
        <div className="intro-copy">
          <p>I’m Zachary Wotawa, a software developer with experience building enterprise front-end applications and working in agile teams.</p>
          <p>I combine that experience with business and accounting context and ongoing Computer Science education to build useful software systems.</p>
        </div>
      </section>

      <section className="shell about-story">
        <div className="about-portrait">
          <div className="portrait-sun" />
          <div className="portrait-figure"><span /></div>
          <blockquote>“The goal is not just to write code. It is to understand the problem well enough to build the right thing.”</blockquote>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span /> My story</p>
          <h2>Enterprise experience.<br />A growing full-stack practice.</h2>
          <p>My background brings together business, accounting, and software development. At Express Scripts/Cigna and Edward Jones, I worked on enterprise front-end applications and learned how requirements, testing, communication, and maintainability shape software delivered by a team.</p>
          <p>That work included agile delivery, BDD/TDD practices, automated testing, and iterative development. It taught me to connect technical decisions to the workflows and business needs behind them.</p>
          <p>Today, I’m rebuilding momentum in my software career while finishing a Computer Science bachelor’s degree with an Accounting minor. I’m deepening my full-stack skills through projects that put practical engineering judgment to work.</p>
          <p>Life Copilot brings together Angular, C#/.NET, PostgreSQL, and custom JWT authentication with goal rotation, weekly planning, daily surfacing, and progress tracking. Tool Share is an earlier practice project: only planning and some environment setup are underway, with React, Java Spring Boot, PostgreSQL, and Docker as the planned stack.</p>
          <div className="story-signature">Zachary <span>Software development · Business context · Continuous learning</span></div>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow light"><span /> How I work</p>
              <h2>Understand the problem.<br />Build with care.</h2>
            </div>
            <p>Practical habits that guide how I approach software, collaborate with others, and keep improving.</p>
          </div>
          <div className="principle-list">
            {principles.map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell path-section">
        <div>
          <p className="eyebrow"><span /> A career in context</p>
          <h2>The path here.</h2>
        </div>
        <div className="timeline">
          <article>
            <span>2019—2020</span>
            <h3>Building enterprise front ends</h3>
            <p>Front End Developer at Express Scripts/Cigna, working with React, Java, and MongoDB as part of a software delivery team.</p>
          </article>
          <article>
            <span>2020—2025</span>
            <h3>Financial-services software</h3>
            <p>Front End Developer at Edward Jones, building and maintaining enterprise applications with Angular, Kotlin, and Android Studio, supported by agile practices, testing, and cross-functional collaboration.</p>
          </article>
          <article>
            <span>2025—Now</span>
            <h3>Rebuilding through full-stack work</h3>
            <p>Finishing my Computer Science degree and expanding my full-stack skills through projects like Life Copilot. My current learning spans Angular, TypeScript, React, C#/.NET, Java, Spring Boot, PostgreSQL, Docker, Azure, and Vercel.</p>
          </article>
        </div>
      </section>

      <section className="shell mini-cta">
        <Compass />
        <div>
          <h2>Want the shorter version?</h2>
          <p>Explore my projects and <Link href="/advancement" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>current learning path</Link> to see where I’ve been and where I’m going next.</p>
        </div>
        <div>
          <Link href="/projects" className="text-link">View projects <span>→</span></Link>
          <Link href="/contact" className="button button-dark">Get in touch <ArrowUpRight /></Link>
        </div>
      </section>
    </>
  );
}
