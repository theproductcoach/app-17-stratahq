import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="h-20 flex justify-start items-center">
                <div className="h-16 sm:h-20">
                  <Image
                    src="/banner.png"
                    alt="StrataHQ"
                    className="h-full w-auto object-contain max-h-20"
                    priority
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </div>
              </div>
            </div>
          </header>

          <nav className="bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-3 sm:py-0">
                <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-6 sm:h-14">
                  <li>
                    <Link
                      href="/"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/lots"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Lot Directory
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/committee"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Committee
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meetings"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Meetings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documents"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Documents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/maintenance"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/noticeboard"
                      className="text-sm sm:text-base text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[40px] sm:min-h-[44px]"
                    >
                      Noticeboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main className="flex-1 py-6 sm:py-8 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
