import img1 from "../assets/g9.svg"
import img2 from "../assets/path25.svg"
import img3 from "../assets/path17.svg"
import { categoriasType, TypesBeneficios } from "./models.types"

export const itemBeneficios: TypesBeneficios[] =[
    {
        label: "Atencion de calidad ",
        description: "Asesores que te ayudaran a resolver tus dudas",
        img: img1.src
    },
    {
        label: "Atencion de calidad ",
        description: "Asesores que te ayudaran a resolver tus dudas",
        img: img2.src
    },
    {
        label: "Atencion de calidad ",
        description: "Asesores que te ayudaran a resolver tus dudas",
        img: img3.src
    },
]

export const categorias: categoriasType[] = [
    {
        value: "Categoria 1",
        label: "Categoria 1",
    },
    {
        value: "Categoria 2",
        label: "Categoria 2",
    },
    {
        value: "Categoria 3",
        label: "Categoria 3",
    },
]

export const categoriasProduct: string[] = [
    "Categoria 1",
    "Categoria 2",
    "Categoria 3",
    "Categoria 4",
]