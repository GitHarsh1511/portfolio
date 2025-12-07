// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harsh Chauhan | Portfolio",
  description:
    "Computer Engineering student building modern web & mobile experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.className} bg-slate-950 text-slate-100 antialiased`}
      >
        {/* Subtle background gradient */}
        <div className="fixed inset-0 -z-10 bg-slate-950">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent" />
          <div className="absolute -right-40 top-40 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Page content */}
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 pb-16 pt-24">
          {children}
        </main>

        <footer className="max-w-5xl mx-auto px-4 pb-8 text-[11px] text-slate-500 flex justify-between gap-4">
          <span>© {new Date().getFullYear()} Harsh Chauhan</span>
          <span className="hidden sm:inline">
            
          </span>
        </footer>
      </body>
    </html>
  );
}
