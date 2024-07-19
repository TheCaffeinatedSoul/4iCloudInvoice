import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EBS Archive Solution",
  description: "4i Apps Solutions Pvt. Ltd",
  icons: {
    icon: "/4i Logo.svg",
  },
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <QueryClientProvider client={queryClient}> */}
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
      {/* </QueryClientProvider> */}
    </html>
  );
}
