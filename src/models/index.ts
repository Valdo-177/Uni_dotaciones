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
        value: "Uniformes empresariales",
        label: "Uniformes empresariales",
    },
    {
        value: "Uniformes industriales",
        label: "Uniformes industriales",
    },
    {
        value: "Otros",
        label: "Otros",
    },
]

export const categoriasProduct: string[] = [
    "Uniformes empresariales",
    "Uniformes industriales",
    "Otros",
]

export const Category: categoriasType[] = [
    {
        value: "Uniformes empresariales",
        label: "Uniformes empresariales",
    },
    {
        value: "Uniformes industriales",
        label: "Uniformes industriales",
    },
    {
        value: "Otros",
        label: "Otros",
    },
   
]

export const CategoryCard: categoryCardType[] = [
    {
        img: empresariales.src,
        title: "Uniformes Empresariales",
    },
    {
        img: industrial.src,
        title: "Uniformes Industriales",
    },
    {
        img: otros.src,
        title: "Otros",
    },
]

export const ProductsExample:string[] = [
    "Camisa Oxford Hombre",
    "Camisa Oxford Mujer",
    "Producto de prueba 3",
    "Producto de prueba 4",
    "Producto de prueba 5",
]