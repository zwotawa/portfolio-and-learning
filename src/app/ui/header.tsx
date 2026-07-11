"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "./icons";

const links = [
  ["/", "Home"], ["/about", "About"], ["/projects", "Projects"],
  ["/advancement", "Advancement"], ["/contact", "Contact"],
];

export function Header() {
  const pathname = usePathname();
  return <header className="site-header">
    <div className="shell nav-wrap">
      <Link className="brand" href="/" aria-label="Avery Morgan home"><span>AM</span><strong>Avery<br/>Morgan</strong></Link>
      <nav aria-label="Primary navigation">
        {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/contact">Let’s talk <ArrowUpRight /></Link>
    </div>
  </header>;
}
