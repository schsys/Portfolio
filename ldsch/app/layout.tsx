import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LS - Web Developer",
  description: "Luciano Schmarsow - Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <main className="text-normal-text min-w-96 overflow-hidden">
          <div className="container flex flex-col md:flex-row md:min-h-screen min-w-full ">
            <div className="md:min-w-[10em] z-10 bg-fondo-1 text-gray">
              <Navbar />
            </div>
            <div className="">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
