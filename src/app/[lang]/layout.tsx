import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-title",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Template",
  description: "A beautiful wedding website template",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dir = params.lang === "he" ? "rtl" : "ltr";
  
  return (
    <html lang={params.lang} dir={dir}>
      <body className={`${playfair.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
} 