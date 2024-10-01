import img1 from "../assets/g9.svg"
import img2 from "../assets/path25.svg"
import img3 from "../assets/path17.svg"
import { categoriasType, categoryCardType, TypesBeneficios } from "./models.types"

export const itemBeneficios: TypesBeneficios[] =[
    {
        label: "Atencion de calidad",
        description: "Asesores que te ayudaran a resolver tus dudas",
        img: img1.src
    },
    {
        label: "Tiempo de Entrega ",
        description: "Nos ajustamos a tu tiempo, según el tamaño de tu orden",
        img: img2.src
    },
    {
        label: "Excelente Calidad ",
        description: "Nuestros productos estan elaborados con los mejores estandares de calidad",
        img: img3.src
    },
]

export const categorias: categoriasType[] = [
    {
        value: "uniformes empresariales",
        label: "uniformes empresariales",
    },
    {
        value: "uniformes industriales",
        label: "uniformes industriales",
    },
    {
        value: "otros",
        label: "otros",
    },
]

export const categoriasProduct: string[] = [
    "uniformes empresariales",
    "uniformes industriales",
    "otros",
]

export const Category: categoriasType[] = [
    {
        value: "uniformes empresariales",
        label: "uniformes empresariales",
    },
    {
        value: "uniformes industriales",
        label: "uniformes industriales",
    },
    {
        value: "otros",
        label: "otros",
    },
   
]

export const CategoryCard: categoryCardType[] = [
    {
        img: "Uniformes Empresariales",
        title: "Uniformes Empresariales",
    },
    {
        img: "Uniformes Industriales",
        title: "Uniformes Industriales",
    },
    {
        img: "Otros",
        title: "Otros",
    },
]