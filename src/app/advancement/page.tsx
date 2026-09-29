import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code, Compass, GraduationCap, Spark } from "../ui/icons";

export const metadata: Metadata = {
  title: "Advancement",
  description: "Steady technical growth through professional experience, computer science coursework, full-stack projects, practical AI learning, and progress toward AWS certifications.",
};

export default function AdvancementPage() {
  return <>
    <section className="adv-hero">
      <div className="shell">
        <p className="eyebrow light"><span/> Advancement</p>
        <h1>Advancing<br/><em>with intention.</em></h1>
        <p>I’m using this stage of my career to strengthen my technical foundation, broaden into full-stack development, and explore practical AI and cloud skills—turning professional experience, coursework, and project work into visible proof of growth.</p>
        <Link href="/projects" className="button button-coral">See what I’m building <ArrowUpRight/></Link>
      </div>
      <div className="adv-rings" aria-hidden="true"><span/><span/><span/></div>
    </section>

    <section className="shell advancement-intro">
      <div><p className="eyebrow"><span/> Where I’m growing</p><h2>Growth is already<br/>underway.</h2></div>
      <p>Steady technical growth, built through professional experience, coursework, and practical projects. From full-stack systems to AI-assisted workflows and cloud foundations, I’m connecting what I learn to software people can use.</p>
    </section>
    <section className="shell offer-grid advancement-growth" aria-label="Current advancement areas">
      <article>
        <span className="offer-icon"><Code/></span>
        <p className="eyebrow"><span/> Build</p><h3>Full-stack capability</h3>
        <p>I’m expanding beyond front-end development into C#/.NET, Java/Spring Boot, PostgreSQL, authentication, REST API design, and deployment.</p>
        <ul><li>Building and refining Life Copilot</li><li>Practicing API and database design</li><li>Connecting interfaces to durable backend systems</li></ul>
        <Link href="/projects/life-copilot" className="text-link">Explore Life Copilot <ArrowUpRight/></Link>
      </article>
      <article>
        <span className="offer-icon coral"><GraduationCap/></span>
        <p className="eyebrow"><span/> Learn</p><h3>Computer science foundation</h3>
        <p>I’m finishing my Computer Science bachelor’s degree with an Accounting minor, strengthening fundamentals in algorithms, data structures, linear algebra, systems thinking, and software design.</p>
        <ul><li>Current CS coursework</li><li>Structured problem solving</li><li>A stronger theoretical foundation for practical engineering</li></ul>
      </article>
      <article>
        <span className="offer-icon"><Spark/></span>
        <p className="eyebrow"><span/> Apply</p><h3>AI-assisted software development</h3>
        <p>I’m learning to use AI as a serious professional tool: to accelerate development, clarify requirements, support debugging, generate alternatives, and turn rough ideas into working systems.</p>
        <ul><li>Using AI to support coding, learning, and project planning</li><li>Exploring practical AI features for productivity and decision support</li><li>Building toward AI-assisted applications grounded in real workflows</li></ul>
      </article>
      <article>
        <span className="offer-icon coral"><Compass/></span>
        <p className="eyebrow"><span/> Deploy</p><h3>Cloud and AWS foundations</h3>
        <p>I’m strengthening my cloud knowledge through progress toward AWS certifications and hands-on deployment work, building confidence in application hosting, infrastructure, and reliability.</p>
        <ul><li>AWS certification progress</li><li>Azure and Vercel deployment experience</li><li>Growing cloud architecture fundamentals</li><li>Environment configuration and deployment troubleshooting</li></ul>
      </article>
      <article>
        <span className="offer-icon"><Code/></span>
        <p className="eyebrow"><span/> Demonstrate</p><h3>Professional proof</h3>
        <p>I’m turning experience and learning into portfolio evidence through project case studies, visible work, and clear explanations of technical decisions.</p>
        <ul><li>Project case studies and technical tradeoffs</li><li>Resume and portfolio alignment</li><li>Demonstrating growth through shipped work</li></ul>
        <Link href="/projects" className="text-link">View projects <ArrowUpRight/></Link>
      </article>
    </section>

    <section className="process-section"><div className="shell">
      <div className="section-heading">
        <div><p className="eyebrow light"><span/> The approach</p><h2>How I’m building<br/><em>momentum.</em></h2></div>
        <p>I’m approaching advancement as a repeatable loop: learn, build, explain, improve.</p>
      </div>
      <div className="process-grid">
        <article><span>01</span><h3>Learn deliberately</h3><p>I focus on skills that connect directly to the software work I want to do: full-stack applications, cloud fundamentals, AI-assisted workflows, data-backed systems, and practical user experiences.</p></article>
        <article><span>02</span><h3>Build useful projects</h3><p>I use projects like Life Copilot to practice authentication, persistence, business logic, deployment, testing, and maintainable UI, with AI-assisted prioritization or recommendations as a future direction.</p></article>
        <article><span>03</span><h3>Explain the decisions</h3><p>I document what I built, the tradeoffs I made, how AI helped or changed the workflow, what I learned, and what I would improve next.</p></article>
        <article><span>04</span><h3>Improve through iteration</h3><p>Each project, course, certification step, and AI-assisted workflow provides feedback that helps me refine my skills and prepare for stronger software engineering roles.</p></article>
      </div>
    </div></section>

    <section className="shell path-section">
      <div><p className="eyebrow"><span/> The journey</p><h2>Past, present,<br/><em>future.</em></h2></div>
      <div className="timeline">
        <article>
          <span>PAST</span><h3>Enterprise front-end foundation</h3>
          <p>As a Front End Developer at Express Scripts/Cigna, I worked with React, Java, and MongoDB. At Edward Jones, my work included Angular, Kotlin, and Android Studio in enterprise financial-services software, with agile delivery, BDD/TDD practices, automated testing, and cross-functional collaboration.</p>
          <p>My accounting and business experience also shapes how I understand workflows, constraints, and decision-making.</p>
        </article>
        <article>
          <span>PRESENT</span><h3>Full-stack rebuilding</h3>
          <p>After a 2025 layoff, I’m intentionally rebuilding momentum: finishing my Computer Science degree, strengthening full-stack development skills, building portfolio projects, learning to use AI as a practical development and learning partner, and making progress toward AWS certifications.</p>
          <p>I use AI to support software development, career planning, learning, project planning, and problem solving. I’m also exploring how AI-enabled applications could organize information, improve decision-making, and help people work through complex goals and workflows.</p>
          <p>Life Copilot is my strongest current project: a full-stack personal productivity app using Angular, C#/.NET, PostgreSQL, and custom JWT authentication. Weekly planning, daily rotation, goal surfacing logic, and progress tracking turn complex routines into useful workflows.</p>
          <p>Its focus on surfacing priorities and helping users decide what to work on next points toward the AI-assisted software I want to build. AI-assisted prioritization and recommendation features remain a future learning direction.</p>
          <p>Tool Share is a developing practice project using React, Java Spring Boot, PostgreSQL, and Docker. Across this work, I’m strengthening Angular, TypeScript, React, REST APIs, authentication, and testing, while building deployment skills with Docker, Azure, and Vercel.</p>
        </article>
        <article>
          <span>FUTURE</span><h3>Practical software engineer</h3>
          <p>I’m moving toward software engineering roles where I can combine front-end strength, full-stack capability, business and accounting context, AI-assisted development, practical AI product thinking, cloud fundamentals, and steady delivery to build useful systems for real users.</p>
          <p>My next steps include learning AI application development, strengthening cloud architecture fundamentals, and becoming more capable at deploying and maintaining full-stack applications.</p>
        </article>
      </div>
    </section>

    <section className="shell path-section advancement-learning" aria-labelledby="future-learning-title">
      <div><p className="eyebrow"><span/> What comes next</p><h2 id="future-learning-title">Future learning<br/><em>direction.</em></h2></div>
      <div>
        <p>These are areas I’m working toward through study and practical projects, building on my experience as a software developer.</p>
        <ul>
          <li>AI-assisted development workflows</li>
          <li>Prompt engineering for software planning and debugging</li>
          <li>Retrieval-augmented generation (RAG) for organizing personal or business knowledge</li>
          <li>AI application UX: helping users review, trust, and correct AI output</li>
          <li>Responsible AI basics: privacy, accuracy, and human oversight</li>
          <li>Cloud deployment for AI-enabled applications</li>
          <li>AWS fundamentals and certification progression</li>
        </ul>
      </div>
    </section>

    <section className="shell quote-block advancement-principle">
      <blockquote>Advancement, for me, means turning experience into stronger judgment: better questions, better systems, better delivery.</blockquote>
      <p><strong>My working principle</strong><br/>Learn, build, explain, improve.</p>
    </section>
  </>;
}
