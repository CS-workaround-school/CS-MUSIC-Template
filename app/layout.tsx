import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const swiss911 = localFont({
  src: "fonts/Swiss911CompressedRegular.woff2",
  variable: "--font-swiss911",
  display: "swap",
});

const optiSpire = localFont({
  src: "./fonts/OPTISpire.woff2",
  variable: "--font-optispire",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I AM MUSIC GENERATOR",
  description: 'Generate a "I AM MUSIC" album cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${swiss911.variable} ${optiSpire.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
