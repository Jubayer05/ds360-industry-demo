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
  title: "DS-360 Industry Course - Master Data Science for Industry Excellence",
  description:
    "Transform your career with our comprehensive data science curriculum designed for industry professionals. Learn cutting-edge techniques and real-world applications.",
  keywords:
    "data science, machine learning, analytics, industry course, professional development",
  authors: [{ name: "DS-360 Team" }],
  openGraph: {
    title: "DS-360 Industry Course",
    description: "Master Data Science for Industry Excellence",
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
