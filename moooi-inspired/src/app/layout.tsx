import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxora | Extraordinary Living",
  description: "Discover our exquisite collection of lighting, furniture, and home accessories. Experience creative luxury for an extraordinary life.",
  keywords: ["luxury furniture", "designer lighting", "home accessories", "interior design", "modern furniture"],
  authors: [{ name: "Luxora Design Studio" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Luxora | Extraordinary Living",
    description: "Discover our exquisite collection of lighting, furniture, and home accessories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxora | Extraordinary Living",
    description: "Discover our exquisite collection of lighting, furniture, and home accessories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
