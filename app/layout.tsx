import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto-Page | Weekly Micro-SaaS & AI Ideas",
  description:
    "Auto-Page is a weekly mailing-list community sharing micro-SaaS and AI business ideas for entrepreneurs and developers.",
  metadataBase: new URL("https://auto-page.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
