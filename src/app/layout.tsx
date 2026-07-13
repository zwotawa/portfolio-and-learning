import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Zachary Wotawa — Software Developer", template: "%s — Zachary Wotawa" },
  description: "Software developer building practical, user-centered systems with a background in business, accounting, and agile delivery.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><Header /><main>{children}</main><Footer /></body></html>;
}
