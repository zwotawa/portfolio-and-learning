import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Avery Morgan — Strategy, Product & Leadership", template: "%s — Avery Morgan" },
  description: "Strategic operator helping ambitious teams turn complex ideas into clear direction, durable products, and measurable growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><Header /><main>{children}</main><Footer /></body></html>;
}
