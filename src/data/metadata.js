const titleShare = "Leadster - Menos Conversinha, Mais Conversão";
const descriptionShare =
  "Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio.";
const urlShare = "https://front-end-challenge-20230627.vercel.app";

export const metadataInfo = {
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
