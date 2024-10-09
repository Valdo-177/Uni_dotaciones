import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import { generatePageMetadata } from "@/src/metadata/generatePageMetadata";
import { homeMetadataEs } from "@/src/models";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export interface Props {
  params: { locale: string };
  children: React.ReactNode;
}

export const generateMetadata = async (
): Promise<Metadata> =>
  generatePageMetadata(homeMetadataEs);

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`bg-[#F8F8F8] ${inter.className}`}
      >
        <Nav/>
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
