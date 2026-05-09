import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pl" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
