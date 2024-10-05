import img1 from "../assets/g9.svg"
import img2 from "../assets/path25.svg"
import img3 from "../assets/path17.svg"
import { categoriasType, categoryCardType, TypesBeneficios } from "./models.types"
import empresariales from "../assets/empresarial.png"
import industrial from "../assets/Industrial.jpg"
import otros from "../assets/otros.jpg"

export const globalStyles = {
    container : "xl:w-[75rem] w-auto mx-auto"
}

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