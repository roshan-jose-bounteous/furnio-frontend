"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Client({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {children}
      <Footer />
    </QueryClientProvider>
  );
}
