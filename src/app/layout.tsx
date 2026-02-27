import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Kevin Gu's Portfolio",
  description: "Welcome to Kevin's portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
