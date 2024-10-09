import { generatePageMetadata } from "@/src/metadata/generatePageMetadata";
import { categoryCards } from "@/src/models";
import type { Metadata } from "next";

export interface Props {
    params: { categoria: string };
    children: React.ReactNode;
}
function desencriptarCadena(cadena: string): string {
    try {
      return decodeURIComponent(cadena);
    } catch (error) {
      console.error('Error al desencriptar la cadena:', error);
      return '';
    }
  }

export const generateMetadata = async (
    { params: { categoria } }: Props,
): Promise<Metadata> => {
    const product = categoryCards.find((card) => card.name === desencriptarCadena(categoria));
    return generatePageMetadata({
        title: `${desencriptarCadena(categoria)} | Unidotaciones del Caribe`,
        description: product?.description ?? "404 Not found",
        keywords: product?.keywords ?? [],
        img: product?.urlImage,
        altImg: `Imagen de ${product?.name}`,
    });
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
