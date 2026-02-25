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
  title: "AppCrawler - Android Studio App Context Plugin",
  description: "Analyze your entire Android codebase and get complete app context in minutes. View your app structure in tabular and graph formats right inside Android Studio.",
  openGraph: {
    title: "AppCrawler - Understand Your Entire App in Minutes",
    description: "Analyze your Android codebase and get complete app context instantly. View your app structure in tabular and graph formats right inside Android Studio.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppCrawler - Android Studio App Context Plugin",
    description: "Analyze your entire Android codebase and get complete app context in minutes. View your app structure in tabular and graph formats right inside Android Studio.",
    images: ["/og-image.svg"],
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
