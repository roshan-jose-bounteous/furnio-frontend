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
  // Create a QueryClient instance

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Client>
          {/* Wrap with QueryClientProvider
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
            <Footer />
          </QueryClientProvider> */}
          {children}
        </Client>
      </body>
    </html>
  );
}
