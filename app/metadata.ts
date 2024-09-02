import type { Metadata } from "next";

import config from "./config";

export const metaData : Metadata = {
    title: {
      default: config.originalTitle,
      template: `%s | ${config.originalTitle}`,
    },
    description: config.originalDescription,
    openGraph: {
      type: 'website',
      title: config.originalTitle,
      description: config.originalDescription,
      url: config.currentURL,
      siteName: config.siteName,
      images: [
        {
          url: config.originalImage,
          alt: config.originalTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: config.social.twitter,
      title: config.originalTitle,
      description: config.originalDescription,
      images: [
        {
          url: config.originalImage,
          alt: config.originalTitle,
        },
      ],
    },
  };