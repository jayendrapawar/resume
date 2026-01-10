import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://jayendrapawar-resume.vercel.app"),

  title: "Jayendra Pawar — Backend Engineer",
  description: "Golang • Kubernetes • Distributed Systems • AWS",

  openGraph: {
    title: "Jayendra Pawar — Backend Engineer",
    description: "Golang • Kubernetes • Distributed Systems • AWS",
    siteName: "Jayendra Pawar",
    url: "https://jayendrapawar-resume.vercel.app",
    images: [
      {
        url: "/JayendraPawarCC.png",
        width: 1200,
        height: 630,
        alt: "Jayendra Pawar Resume & Portfolio",
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
