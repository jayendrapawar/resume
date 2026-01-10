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
  description:
    "Specialized Backend Engineer in Golang, Kubernetes, Distributed Systems, and AWS. Experienced in building scalable, reliable backend platforms.",

  openGraph: {
    title: "Jayendra Pawar — Backend Engineer",
    description:
      "Specialized Backend Engineer in Golang, Kubernetes, Distributed Systems, and AWS. Experienced in building scalable, reliable backend platforms.",
    url: "https://jayendrapawar-resume.vercel.app/",
    siteName: "Jayendra Pawar",
    images: [
      {
        url: "https://jayendrapawar-resume.vercel.app/JayendraPawarCC.png",
        width: 1200,
        height: 630,
        alt: "Jayendra Pawar — Backend Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jayendra Pawar — Backend Engineer",
    description:
          "Specialized Backend Engineer in Golang, Kubernetes, Distributed Systems, and AWS. Experienced in building scalable, reliable backend platforms.",
    images: ["https://jayendrapawar-resume.vercel.app/JayendraPawarCC.png"],
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
