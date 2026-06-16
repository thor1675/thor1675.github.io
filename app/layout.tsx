import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryosei Takagi",
  description:
    "Ryosei Takagi (髙城 嶺青 / Thor) の個人サイト。法政大学 理工学部 応用情報工学科 3年。AI とエージェントメモリに関心。",
};

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/talks", label: "Talks" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <nav className="border-b border-zinc-200">
          <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-bold tracking-tight text-base hover:text-blue-600 transition"
            >
              Ryosei Takagi
            </Link>
            <ul className="flex gap-5 text-sm text-zinc-600">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200 mt-16">
          <div className="max-w-3xl mx-auto px-6 py-6 text-xs text-zinc-500 text-center">
            © 2026 Ryosei Takagi · Built with Next.js · 🚧 Under construction
          </div>
        </footer>
      </body>
    </html>
  );
}
