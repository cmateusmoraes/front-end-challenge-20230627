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
        url: `${urlShare}/image/img-share.jpg`,
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
    images: [`${urlShare}/image/img-share.jpg`],
  },
};

export const jsonLdInfo = {
  "@context": "http://schema.org",
  "@type": "WebApplication",
  "@id": "product_name",
  applicationCategory: "BusinessApplication",
  name: titleShare,
  operatingSystem: "all",
  browserRequirements: "Requires Javascript and HTML5 support.",
  url: urlShare,
  screenshot: `${urlShare}/image/img-share.jpg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "Value",
    reviewCount: "Numbers",
  },
  offers: {
    "@type": "AggregateOffer",
    offeredBy: {
      "@type": "Organization",
      name: titleShare,
    },
    highPrice: "Plano Traction",
    lowPrice: "Plano Free",
    offerCount: "",
    priceCurrency: "BRL",
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        price: "0.00",
        priceCurrency: "BRL",
        name: "Plano Free",
      },
      {
        "@type": "UnitPriceSpecification",
        price: "189.00",
        priceCurrency: "BRL",
        name: "Plano Plano Starter",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      {
        "@type": "UnitPriceSpecification",
        price: "329.00",
        priceCurrency: "BRL",
        name: "Plano Traction",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
    ],
  },

  creator: {
    "@type": "Organization",
    "@id": "#organization",
    url: "https://leadster.com.br/",
    name: "Leadster",
    logo: {
      "@type": "ImageObject",
      url: `${urlShare}/image/logo-leadster.gif`,
      width: "270",
      height: "62",
    },
  },
};
