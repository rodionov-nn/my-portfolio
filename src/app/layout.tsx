import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/shared/Header";
import { ThemeProvider } from "@/lib/ThemeProvider";
import Footer from "@/shared/Footer";
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
  title: {
    default: "Nikita Rodionov",
    template: "%s | Nikita Rodionov",
  },
  description: "Web developer and designer portfolio.",
  keywords: ["web developer", "portfolio", "react", "next.js", "tailwind"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased selection:text-lime-400 selection:bg-neutral-100/80 dark:selection:text-indigo-600 dark:selection:bg-neutral-900/80`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="text-[#0a0a0a] dark:text-[#ededed] flex flex-col min-h-screen ease-in-out duration-300">
            <Header />
            <main className="flex-grow flex flex-col items-center w-full mx-auto max-w-full gap-4">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
