import Link from "next/link";
import { ArrowUpRight, Briefcase, Compass, Spark } from "./ui/icons";

const highlights = [
  { value: "12+", label: "Years building" },
  { value: "48", label: "Teams supported" },
  { value: "3×", label: "Average growth" },
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Strategy · Product · Leadership</p>
          <h1>Building the systems<br />behind <em>meaningful</em> progress.</h1>
          <p className="hero-lede">
            I’m Avery Morgan, a strategic operator helping ambitious teams turn
            complex ideas into clear direction, durable products, and measurable growth.
          </p>
          <div className="button-row">
            <Link className="button button-dark" href="/projects">Explore my work <ArrowUpRight /></Link>
            <Link className="text-link" href="/about">More about me <span>→</span></Link>
          </div>
        </div>
        <div className="hero-art reveal delay-1" aria-label="Abstract portrait composition">
          <div className="portrait-frame">
            <div className="portrait-sun" />
            <div className="portrait-figure"><span /></div>
            <p>Curiosity<br />with intent.</p>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-note"><Spark /> Available for select<br />advisory engagements</div>
        </div>
      </section>

      <section className="stats-band">
        <div className="shell stats-grid">
          <p className="stats-intro">Experience that moves from<br /><strong>thinking to doing.</strong></p>
          {highlights.map((item) => (
            <div className="stat" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> What I do</p><h2>Clarity for the<br />work that matters.</h2></div>
          <p>I partner across disciplines to shape the strategy, structure, and momentum teams need to do their best work.</p>
        </div>
        <div className="service-grid">
          <article><span className="service-number">01</span><Compass /><h3>Strategic direction</h3><p>Turning ambiguity into a focused point of view, an aligned roadmap, and confident decisions.</p></article>
          <article><span className="service-number">02</span><Briefcase /><h3>Product leadership</h3><p>Connecting customer insight, business goals, and thoughtful execution from concept to scale.</p></article>
          <article><span className="service-number">03</span><Spark /><h3>Team advancement</h3><p>Building the rituals, capabilities, and conditions that help people grow together.</p></article>
        </div>
      </section>

      <section className="shell feature-card">
        <div><p className="eyebrow light"><span /> Featured work</p><h2>Reframing growth for a changing market.</h2><p>A company-wide strategy that aligned eight teams around one customer journey—and unlocked the strongest launch in the organization’s history.</p><Link href="/projects" className="button button-light">View project <ArrowUpRight /></Link></div>
        <div className="feature-visual"><div className="chart-line"/><span className="chart-dot dot-a"/><span className="chart-dot dot-b"/><span className="chart-dot dot-c"/><p>+64%<small>customer activation</small></p></div>
      </section>
    </>
  );
}
