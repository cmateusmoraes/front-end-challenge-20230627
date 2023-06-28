import "../styles/reset.css";

import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakartaSans = PlusJakartaSans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
});

const titleShare = "Leadster - Menos Conversinha, Mais Conversão";
const descriptionShare =
  "Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio.";
const urlShare = "#";

export const metadata = {
  title: titleShare,
  description: descriptionShare,
  openGraph: {
    title: titleShare,
    description: descriptionShare,
    url: urlShare,
    siteName: titleShare,
    images: [
      {
        url: `${urlShare}/image/img-share.jpg"`,
        width: 800,
        height: 546,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleShare,
    description: descriptionShare,
    creator: "@cmateusmoraes",
    creatorId: "1467726470533754880",
    images: [`${urlShare}/image/img-share.jpg"`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={plusJakartaSans.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
