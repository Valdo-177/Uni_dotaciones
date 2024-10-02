import { Button } from "@/components/ui/button";
import CardDescription from "@/src/components/CardDescription";
import { categorias, CategoryCard, itemBeneficios } from "@/src/models";
import Image from "next/image";
import React from "react";
import fondoSection from "../../assets/fondoseccion1.png";

const HomePages = () => {
  return (
    <>
      <section className="bg-[#F8F8F8] text-black p-4">
        <div className="xl:w-[75rem] w-auto mx-auto h-[30rem] flex items-center justify-between">
          <div className="flex flex-col gap-2 sm:max-w-[24rem] w-full items-start">
            <span className="font-extralight text-sm">
              + 4 Años de Experiencia
            </span>
            <div className="w-full">
              <h1 className="text-primaryColor font-bold text-3xl sm:text-5xl uppercase ">
                <span className="text-[#191919]">Somos tu </span>proveedor  de confianza
              </h1>
            </div>
            <p className="sm:w-[24rem] font-medium text-lg py-2 text-gray-500 ">
              Más 4 años de experiencia en la comercialización de suministros y
              dotación empresarial tales como uniformes, calzado y epps.
            </p>
            <Button className="hover:before:bg-redborder-red-500 relative h-[45px] w-40 overflow-hidden border border-[#191919] bg-[#191919] px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primaryColor before:transition-all before:duration-500 hover:text-white hover:shadow-primaryColor hover:border-primaryColor hover:before:left-0 hover:before:w-full rounded-3xl text-lg"><span className="relative z-10"> Contáctanos</span></Button>
          </div>
        </div>
      </section>
      <section className="bg-[#191919] text-black">
        <div className="xl:w-[75rem] w-auto mx-auto gap-4 p-5 sm:p-0 sm:h-[10rem] grid grid-cols-1 sm:grid-cols-3 items-center justify-between">
          {itemBeneficios.map((item, index) => (
            <CardDescription item={item} key={index} />
          ))}
        </div>
      </section>
      <section className="bg-white text-black relative flex flex-col sm:flex-row items-center justify-center h-[22rem]">
        <Image
          src={fondoSection}
          className="w-full h-full object-cover"
          width={4000}
          height={4000}
          alt="Imagen de fondo de seccion"
        />
        <div className="xl:w-[75rem] w-full mx-auto p-4 py-6 h-[22rem] flex flex-col sm:flex-row items-center justify-between absolute top-0 text-white">
          <div>
            <h3>NUESTRA MISIÓN</h3>
            <p className="font-extralight sm:w-[30rem]">
              Ser la empresa líder en comercialización de dotaciones empresariales, brindando un servicio confiable y de calidad, logrando la satisfacción de clientes, proveedores y accionistas.
            </p>
          </div>
          <div>
            <h3>NUESTRA VISIÓN</h3>
            <p className="font-extralight sm:w-[30rem]">
              Ser reconocida a mediano plazo, como una empresa de alta calidad y
              cumplimiento en el sector de dotaciones empresariales en la Región
              Caribe.
            </p>
          </div>
        </div>
      </section>

      <section className=" text-black ">
        <div className="xl:w-[80rem] w-auto mx-auto gap-4 p-5 sm:p-0 my-8 flex flex-col items-center justify-center">
          <h3 className='text-primaryColor uppercase text-2xl font-bold'>Nuestros productos</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 bg-red-200 items-center justify-between  gap-9">
            {CategoryCard.map((item, index) => (
              <div
                key={index}
                className="px-8 h-64 w-[25rem] border border-primaryColor cursor-pointer flex gap-2 items-center justify-center flex-col"
              >
                <h3 className=" text-sm">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePages;
