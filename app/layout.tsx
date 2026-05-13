import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    { path: "../public/fonts/ClashDisplay-Light.woff2", weight: "300" },
    { path: "../public/fonts/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "../public/fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "../public/fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "../public/fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Light.woff2", weight: "300" },
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crocus Hill — Mieszkania przy Jasnych Błoniach, Szczecin",
  description:
    "Premium osiedle mieszkaniowe w centrum Szczecina. 45–83 m², 3 etapy, Jasne Błonia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`h-full ${clashDisplay.variable} ${satoshi.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
