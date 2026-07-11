import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../ui/icons";

export const metadata: Metadata = { title: "Projects", description: "Selected strategy, product, and transformation work." };

const projects = [
  { n:"01", type:"Growth strategy", title:"A new growth engine for an evolving market", result:"+64% activation", className:"project-coral", tags:["Strategy", "Customer journey", "Operating model"] },
  { n:"02", type:"Product portfolio", title:"One product story from a fragmented portfolio", result:"8 teams aligned", className:"project-blue", tags:["Portfolio", "Positioning", "Roadmap"] },
  { n:"03", type:"Organizational design", title:"Rebuilding the conditions for creative work", result:"2× faster decisions", className:"project-gold", tags:["Team design", "Ways of working", "Leadership"] },
  { n:"04", type:"New venture", title:"From emerging need to a validated proposition", result:"14 weeks to pilot", className:"project-mint", tags:["Research", "Venture design", "Go-to-market"] },
];

export default function ProjectsPage() {
  return <>
    <section className="page-hero shell split-hero projects-hero"><div><p className="eyebrow"><span/> Selected work</p><h1>Ideas made <em>real.</em></h1></div><p className="intro-copy">A selection of engagements where a sharper question, a shared direction, and practical momentum changed what was possible.</p></section>
    <section className="shell project-list">{projects.map((p)=><article className="project-row" key={p.n}><div className={`project-image ${p.className}`}><span className="project-index">{p.n}</span><div className="visual-shape one"/><div className="visual-shape two"/><strong>{p.result}</strong></div><div className="project-copy"><p className="eyebrow"><span/> {p.type}</p><h2>{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><p>Bringing customer evidence and commercial ambition into one clear system for action—from the executive room to the teams doing the work.</p><Link href="/contact" className="text-link">Discuss a similar challenge <ArrowUpRight/></Link></div></article>)}</section>
    <section className="project-note"><div className="shell"><span>Beyond the case studies</span><p>Much of my work is confidential. I’m happy to share more about relevant sectors, challenges, and outcomes in conversation.</p><Link href="/contact" className="button button-light">Start a conversation <ArrowUpRight/></Link></div></section>
  </>;
}
