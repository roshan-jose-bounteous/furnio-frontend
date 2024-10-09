// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Furnio RJ",
  description:
    "High-quality furniture for modern homes. Explore our catalog now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
