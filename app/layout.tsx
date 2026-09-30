import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const display = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";
const title = "Mohamed AIT LAKHDAR | Cybersecurity Engineering Student, PFE 2027";
const description =
  "Portfolio of Mohamed AIT LAKHDAR, IT Security & Digital Trust engineering student at ENSIASD. SOC/SIEM, Wazuh, Splunk, Snort, ISO 27001. Seeking a PFE from February 2027 in France or Morocco.";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title,
  description,
  keywords: ["cybersecurity", "SOC", "SIEM", "Wazuh", "Splunk", "Snort", "ISO 27001", "PFE 2027", "internship"],
  authors: [{ name: "Mohamed AIT LAKHDAR" }],
  openGraph: { title, description, type: "website", images: ["/photo.jpg"] },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#0b1230" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
