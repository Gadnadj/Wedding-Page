import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lior & Liel Wedding",
  description: "Wedding website",
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
      <body className={`${playfair.variable} ${raleway.variable} overflow-x-hidden overflow-y-hidden`}>
        {children}
      </body>
    </html>
  );
} 