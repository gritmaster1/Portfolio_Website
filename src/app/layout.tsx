import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalBackground } from "@/components/global-background";
import { MainNav } from "@/components/main-nav";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Nakul Reddy Manne - Portfolio",
  description: "Portfolio of Sai Nakul Reddy Manne - Computer Science Graduate, Software Engineer, and AI/ML Researcher.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The global background sits behind all content */}
        <GlobalBackground />
        
        {/* The content, including the navbar, is on top */}
        <div className="relative z-10">
          <ScrollToTop />
          <MainNav />
          {children}
        </div>
      </body>
    </html>
  );
}