export interface TypesBeneficios {
    img: string;
    label: string;
    description: string;
}

export interface categoriasType {
    value: string;
    label: string;
}

export interface categoryCardType {
    img: string;
    title: string;
}

export interface ITempMetadata {
    title: string;
    description: string;
    keywords: string[];
    altImg: string;
    img?: string;
}

export interface ICategorytCard {
    name: string;
    description: string;
    keywords: string[];
    urlImage: string;
}

export interface IForm {
    contacto: string;
    email: string;
    telefono: string;
    empresa: string;
    detalles: string;
  }