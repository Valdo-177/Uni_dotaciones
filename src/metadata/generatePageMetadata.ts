"use server";
import { Metadata } from "next";
import { ITempMetadata } from "../models/models.types";

export const generatePageMetadata = (tempMetadata: ITempMetadata): Metadata => {
  const metadata: Metadata = {
    title: tempMetadata.title,
    description: tempMetadata.description,
    keywords: tempMetadata.keywords,
    openGraph: {
      title: tempMetadata.title,
      description: tempMetadata.description,
      url: `https://uni-dotaciones-mocha.vercel.app/`,
      type: "website",
      images: {
        url: tempMetadata.img ?? "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewUnidotaciones.png?alt=media&token=1a266e56-38bf-483f-bd91-854af0d5c4ee",
        width: "1200",
        height: "630",
        alt: tempMetadata.altImg,
      },
      siteName: "Unidotaciones del Caribe",
    },
    twitter: {
      title: tempMetadata.title,
      description: tempMetadata.description,
      images: {
        url: tempMetadata.img ?? "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewUnidotaciones.png?alt=media&token=1a266e56-38bf-483f-bd91-854af0d5c4ee",
        width: "1200",
        height: "630",
      },
      card: "summary_large_image",
    },
  };
  return metadata;
};