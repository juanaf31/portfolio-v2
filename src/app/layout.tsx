import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import { SOCIAL_LINKS } from "@/lib/constants";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Juan — Frontend Engineer",
    template: "%s | Juan",
  },
  description:
    "Frontend Engineer specializing in React & Next.js with 5+ years of experience. I build complex SaaS platforms that thousands of people actually use.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Muhammad Juan Al Firdaus",
  ],
  authors: [{ name: "Muhammad Juan Al Firdaus" }],
  creator: "Muhammad Juan Al Firdaus",
  metadataBase: new URL("https://juandev.me"),
  openGraph: {
    title: "Juan — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React & Next.js. I build complex SaaS platforms that thousands of people actually use.",
    type: "website",
    locale: "en_US",
    siteName: "Juan — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React & Next.js. I build complex SaaS platforms that thousands of people actually use.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Juan Al Firdaus",
    jobTitle: "Frontend Engineer",
    url: "https://juandev.me",
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Frontend Development",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-bg-primary`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
          >
            Skip to content
          </a>
          <SmoothScroll />
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
