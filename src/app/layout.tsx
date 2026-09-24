import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Taha Tuncay — İş Analisti",
  description:
    "Taha Tuncay'ın profesyonel portfolyosu. İş deneyimleri, projeleri, sertifikaları, gönüllülük deneyimleri ve yetenekleri.",
  keywords: [
    "portfolyo",
    "yazılım geliştirici",
    "web geliştirme",
    "frontend",
    "backend",
    "full stack",
  ],
  authors: [{ name: "Taha Tuncay" }],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Taha Tuncay — İş Analisti",
    description:
      "Taha Tuncay'ın profesyonel portfolyosu. İş deneyimleri, projeleri, sertifikaları, gönüllülük deneyimleri ve yetenekleri.",
    siteName: "Taha Tuncay — Portfolyo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Tuncay — İş Analisti",
    description:
      "Taha Tuncay'ın profesyonel portfolyosu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
