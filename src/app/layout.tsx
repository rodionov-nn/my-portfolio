import type { Metadata } from "next";
import { Geist, Geist_Mono, Sedgwick_Ave_Display } from "next/font/google";
import Header from "@/shared/Header";
import { ThemeProvider } from "@/lib/ThemeProvider";
import ShaderBackground from "@/components/ui/ShaderBackground";
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

const sedgwickAveDisplay = Sedgwick_Ave_Display({
  variable: "--font-sedgwick-ave-display",
  weight: "400",
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
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sedgwickAveDisplay.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen text-neutral-800 dark:text-neutral-200">
            <Header />
            <main className="flex-grow flex flex-col">
              <ShaderBackground />
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
