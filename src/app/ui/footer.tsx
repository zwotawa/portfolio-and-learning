"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, LinkedIn } from "./icons";

export function Footer() {
  const isAdvancement = usePathname() === "/advancement";
  return <footer className="site-footer">
    {isAdvancement ? <div className="shell footer-top advancement-footer">
      <p className="eyebrow light"><span /> Growth in practice</p>
      <div>
        <div><h2>Want to see the work behind the growth?</h2><p>My projects show how I’m applying this growth in practical software: full-stack applications, workflow tools, and systems designed around real use.</p></div>
        <nav aria-label="Explore my work"><Link href="/projects" className="button button-coral">View projects <ArrowUpRight /></Link><Link href="/contact">Get in touch <ArrowUpRight /></Link></nav>
      </div>
    </div> : <div className="shell footer-top">
      <p className="eyebrow light"><span /> Start a conversation</p>
      <div><h2>Have a meaningful challenge?</h2><Link href="/contact">Let’s work through it. <ArrowUpRight /></Link></div>
    </div>}
    <div className="shell footer-bottom">
      <Link className="brand footer-brand" href="/"><span>ZW</span><strong>Zachary<br/>Wotawa</strong></Link>
      <p>Practical software, real workflows,<br/>and steady technical growth.</p>
      <div className="footer-links"><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/advancement">Advancement</Link><a href="https://www.linkedin.com" aria-label="LinkedIn"><LinkedIn /></a></div>
      <small>© {new Date().getFullYear()} Zachary Wotawa</small>
    </div>
  </footer>;
}
