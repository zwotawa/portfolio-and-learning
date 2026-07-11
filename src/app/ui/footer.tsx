import Link from "next/link";
import { ArrowUpRight, LinkedIn } from "./icons";

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-top">
      <p className="eyebrow light"><span /> Start a conversation</p>
      <div><h2>Have a meaningful challenge?</h2><Link href="/contact">Let’s work through it. <ArrowUpRight /></Link></div>
    </div>
    <div className="shell footer-bottom">
      <Link className="brand footer-brand" href="/"><span>AM</span><strong>Avery<br/>Morgan</strong></Link>
      <p>Strategy, product, and leadership<br/>for teams going somewhere.</p>
      <div className="footer-links"><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/advancement">Advancement</Link><a href="https://www.linkedin.com" aria-label="LinkedIn"><LinkedIn /></a></div>
      <small>© {new Date().getFullYear()} Avery Morgan</small>
    </div>
  </footer>;
}
