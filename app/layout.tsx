import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAdsense from "./components/GoogleAdsense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motor Info",
  description: "Motor info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="sm:w-11/12 md:w-10/12 lg:w-[1440px] m-auto px-12">
          <Navbar />
          {children}
        </main>
      </body>
      <GoogleAdsense pId="1938585149505269" />
      <GoogleAnalytics gaId="G-HZNKDT6VJJ" />
    </html>
  );
}
