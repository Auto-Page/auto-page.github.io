import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Auto-Page | One-Person Company Platform",
    template: "%s | Auto-Page"
  },
  description:
    "Auto-Page is a public multi-user platform where an AI CEO coordinates AI employees to build and run one-person companies.",
  metadataBase: new URL("https://auto-page.com"),
  alternates: {
    canonical: "/"
  },
  keywords: [
    "one-person company",
    "AI CEO",
    "AI employees",
    "startup idea platform",
    "AI business planning",
    "solo founder tools"
  ],
  openGraph: {
    title: "Auto-Page | One-Person Company Platform",
    description:
      "Launch and run a one-person company with an AI CEO and AI departments. Bring an idea, get plans, execution, and reports.",
    url: "https://auto-page.com/",
    siteName: "Auto-Page",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto-Page | One-Person Company Platform",
    description:
      "Run company missions with an AI CEO, transparent workflows, and structured reports built for solo founders."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
