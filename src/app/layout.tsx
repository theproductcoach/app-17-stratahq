import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
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
  title: "StrataHQ",
  description: "Strata Management Portal",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-slate-800`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col bg-white">
          <header className="bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4">
              <div className="h-16 sm:h-20 flex items-center">
                <div className="h-8 sm:h-10">
                  <Image
                    src="/banner.png"
                    alt="StrataHQ"
                    className="h-full w-auto object-contain"
                    priority
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </div>
              </div>
            </div>
          </header>

          <Navigation />

          <main className="flex-1 py-6 sm:py-8 bg-white">
            <div className="max-w-6xl mx-auto px-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
