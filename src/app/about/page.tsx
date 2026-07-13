import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Spark } from "../ui/icons";

export const metadata: Metadata = { title: "About", description: "Meet Zachary Wotawa and the principles behind the work." };

const principles = [
  ["01", "Make the complex useful", "Good strategy creates movement. I translate tangled questions into decisions people can act on."],
  ["02", "Stay close to people", "The best work starts with listening—to customers, teams, and the quiet signals inside the system."],
  ["03", "Build for after launch", "A moment of success matters. The capability, confidence, and momentum left behind matter more."],
];

export default function AboutPage() {
  return <>
    <section className="page-hero shell split-hero">
      <div><p className="eyebrow"><span /> About</p><h1>I help good people do <em>ambitious</em> work.</h1></div>
      <div className="intro-copy"><p>My career has lived at the intersection of strategy, product, and people—where the biggest opportunities rarely fit neatly inside one function.</p><p>I’m most useful when the path isn’t obvious yet.</p></div>
    </section>
    <section className="shell about-story">
      <div className="about-portrait"><div className="portrait-sun"/><div className="portrait-figure"><span/></div><blockquote>“The work is not to have every answer. It’s to create the conditions for better ones.”</blockquote></div>
      <div className="story-copy"><p className="eyebrow"><span /> My story</p><h2>From making products to shaping the systems around them.</h2><p>I began my career close to the craft: researching customer needs, prototyping experiences, and shipping digital products. Over time, I noticed the hardest problems were rarely design problems alone. They were questions of alignment, choice, trust, and how work moves through an organization.</p><p>That led me into leadership roles spanning growth strategy, portfolio direction, organizational design, and transformation. Today, I bring those perspectives together to help leaders see the whole system—and find the most human way forward.</p><div className="story-signature">Zachary <span>Chicago · Working globally</span></div></div>
    </section>
    <section className="principles-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow light"><span/> How I work</p><h2>Principles over<br/>playbooks.</h2></div><p>Every context is different. These are the beliefs I carry into all of them.</p></div><div className="principle-list">{principles.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="shell path-section"><div><p className="eyebrow"><span/> A career in context</p><h2>The path here.</h2></div><div className="timeline"><article><span>2013—2017</span><h3>Designing the experience</h3><p>Product strategy and experience design for early-stage and global organizations.</p></article><article><span>2017—2022</span><h3>Leading the portfolio</h3><p>Built multidisciplinary teams and led a suite of products through rapid growth.</p></article><article><span>2022—Now</span><h3>Advancing the organization</h3><p>Partnering with leaders on strategy, transformation, and next-stage capability.</p></article></div></section>
    <section className="shell mini-cta"><Compass/><div><h2>Want the shorter version?</h2><p>See the selected work—or start with a conversation.</p></div><div><Link href="/projects" className="text-link">View projects <span>→</span></Link><Link href="/contact" className="button button-dark">Get in touch <ArrowUpRight/></Link></div></section>
  </>;
}
