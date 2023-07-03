"use client";

import { Analytics } from "@vercel/analytics/react";
import StyledComponentsRegistry from "./registry";
import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "@/styles/global.css";

const plusJakartaSans = PlusJakartaSans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="pt-BR">
        <StyledComponentsRegistry>
          <body className={plusJakartaSans.className}>
            <Header />

            {children}

            <Footer />
            <Analytics />
          </body>
        </StyledComponentsRegistry>
      </html>
    </ReactQueryProvider>
  );
}
