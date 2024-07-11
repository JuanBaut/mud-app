"use client";

import Navbar from "@/components/navbar/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className="flex h-screen min-h-[700px] flex-col">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}
