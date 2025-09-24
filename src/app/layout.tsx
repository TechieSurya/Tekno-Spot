import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TawkToWidget from "@/components/TawkToWidget";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tekno Spot - Best Digital Marketing Company in Trichy",
  description: "#1 Digital Marketing Agency in Trichy. Tekno Spot provides the Best Web Design, Web Development, SEO, SMM, PPC, and Content Marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         {/* Google Analytics Script */}
        <Script
          async
          src={'https://www.googletagmanager.com/gtag/js?id=G-Q76Q7J5P0B8'}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q76Q7J5P0B');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TawkToWidget/>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
