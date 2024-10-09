import img1 from "../assets/g9.svg"
import img2 from "../assets/path25.svg"
import img3 from "../assets/path17.svg"
import { categoriasType, categoryCardType, ICategorytCard, ITempMetadata, TypesBeneficios } from "./models.types"
import empresariales from "../assets/empresarial.png"
import industrial from "../assets/Industrial.jpg"
import otros from "../assets/otros.jpg"
import baner from "../assets/banner1.jpg"
import baner2 from "../assets/banner2.png"
import baner3 from "../assets/banner3.jpg"
import baner4 from "../assets/banner4.jpg"
import baner5 from "../assets/banner5.png"
import baner6 from "../assets/banner6.jpg"

export const globalStyles = {
    container : "xl:w-[75rem] w-auto mx-auto"
}

export const homeMetadataEs: ITempMetadata = {
    title: "Unidotaciones del Caribe",
    description:
        "Encuentra todos nuestros productos",
    keywords: [
        "Dotaciones en el caribe",
        "Dotaciones"
    ],
    altImg: "Imagen descriptinva de la web",
    img: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewUnidotaciones.png?alt=media&token=1a266e56-38bf-483f-bd91-854af0d5c4ee"
};

export const categoryCards: ICategorytCard[] = [
    {
        name: "Calzado industrial",
        keywords: ["Calzado industrial", "Calzado industrial barranquilla"],
        description: "",
        urlImage: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FCalzado-Industrial.png?alt=media&token=28451af6-5ece-4290-bd10-5c0489e9a8ab"
    },
    {
        name: "Elementos de protección personal",
        keywords: ["Elementos de protección personal", "Elementos de protección personal barranquilla"],
        description: "",
        urlImage: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FProteccion-Personal.png?alt=media&token=5afbe831-807f-4e98-8630-0ce44a497d46"
    },
    {
        name: "Dotación empresarial",
        keywords: ["Dotación empresarial", "Dotación empresarial barranquilla"],
        description: "",
        urlImage: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FDotacion-Empresarial.png?alt=media&token=421cbf06-6fc5-4d75-98a2-72fff2f45d14"
    },
];


export const itemBeneficios: TypesBeneficios[] =[
    {
        label: "Atención Personalizada",
        description: "Asesores que te ayudarán a escoger el producto de acuerdo a la necesidad de tu empresa.",
        img: img1.src
    },
    {
        label: "Confiabilidad en la Entrega ",
        description: "Nos ajustamos a tu tiempo, según el tamaño de tu orden.",
        img: img2.src
    },
    {
        label: "Excelente Calidad ",
        description: "Nuestros productos estan elaborados con los mejores estandares de calidad.",
        img: img3.src
    },
]

export const categorias: categoriasType[] = [
    {
        value: "Dotación empresarial",
        label: "Dotación empresarial",
    },
    {
        value: "Elementos de protección personal",
        label: "Elementos de protección personal",
    },
    {
        value: "Calzado industrial",
        label: "Calzado industrial",
    },
]

export const categoriasProduct: string[] = [
    "Dotación empresarial",
    "Elementos de protección personal",
    "Calzado industrial",
]

export const Category: categoriasType[] = [
    {
        value: "Dotación empresarial",
        label: "Dotación empresarial",
    },
    {
        value: "Elementos de protección personal",
        label: "Elementos de protección personal",
    },
    {
        value: "Calzado industrial",
        label: "Calzado industrial",
    },
   
]

export const CategoryCard: categoryCardType[] = [
    {
        img: empresariales.src,
        title: "Dotación empresarial",
    },
    {
        img: industrial.src,
        title: "Elementos de protección personal",
    },
    {
        img: otros.src,
        title: "Calzado industrial",
    },
]

export const ProductsExample:string[] = [
    "Camisa Oxford Hombre",
    "Camisa Oxford Mujer",
    "Producto de prueba 3",
    "Producto de prueba 4",
    "Producto de prueba 5",
]

export const banners = [
    {
        category: 'Dotación empresarial',
        title: 'Tenemos los mejores precios',
        subTitle: 'Ver más de esta sección',
        img: baner.src
    },
    {
        category: 'Calzado industrial',
        title: 'Tenemos los mejores precios',
        subTitle: 'Ver más de esta sección',
        img: baner2.src
    },
    {
        category: 'Elementos de protección personal',
        title: 'Tenemos los mejores precios',
        subTitle: 'Ver más de esta sección',
        img: baner3.src
    },
    {
        category: 'Elementos de protección personal',
        title: 'Tenemos los mejores precios',
        subTitle: 'Ver más de esta sección',
        img: baner4.src
    },
    {
        category: 'Dotación empresarial',
        title: 'Tenemos los mejores precios',
        subTitle: 'Ver más de esta sección',
        img: baner5.src
    },
    {
        category: 'Calzado industrial',
        title: 'Tenemos los mejores precios',
        subTitle: 'Ver más de esta sección',
        img: baner6.src
    },
    
]