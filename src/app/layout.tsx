import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIRIUS | A LEADER, A GUIDER & A DIGITALIZER",
  description: "A landing page for a marketing startup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-[rgb(29,53,101)] text-white antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
