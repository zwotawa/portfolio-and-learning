"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "./icons";

const links = [
  ["/projects", "Projects"], ["/about", "About"],
  ["/advancement", "Advancement"], ["/contact", "Contact"],
];

export function Header() {
  const pathname = usePathname();
  return <header className="site-header">
    <div className="shell nav-wrap">
      <Link className="brand" href="/" aria-label="Zachary Wotawa home"><span>ZW</span><strong>Zachary<br/>Wotawa</strong></Link>
      <nav aria-label="Primary navigation">
        {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/contact">Let’s talk <ArrowUpRight /></Link>
    </div>
  </header>;
}
