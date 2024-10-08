// // layout.tsx
// "use client";
// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Furnio RJ",
//   description:
//     "High-quality furniture for modern homes. Explore our catalog now.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // Create a QueryClient instance
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <html lang="en">
//       <body className={`antialiased`}>
//         {/* Wrap with QueryClientProvider */}
//         <QueryClientProvider client={queryClient}>
//           <Navbar />
//           {children}
//           <Footer />
//         </QueryClientProvider>
//       </body>
//     </html>
//   );
// }

// layout.tsx
"use client"; // Keeping this for client-side features
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { metadata } from "./metadata"; // Import metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create a QueryClient instance
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* Wrap with QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
