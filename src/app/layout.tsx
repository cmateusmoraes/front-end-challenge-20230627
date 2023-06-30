"use client";

import "@/styles/global.css";

import StyledComponentsRegistry from "./registry";
import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { metadataInfo } from "./metadata";

const plusJakartaSans = PlusJakartaSans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata = metadataInfo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <body className={plusJakartaSans.className}>
          <Header />

          {children}

          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
