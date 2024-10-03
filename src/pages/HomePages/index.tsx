import { Button } from "@/components/ui/button";
import CardDescription from "@/src/components/CardDescription";
import { CategoryCard, itemBeneficios } from "@/src/models";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HomePages = () => {
  return (
    <>
      <section className="bg-[#F8F8F8] text-black p-8 sm:p-4">
        <div className="xl:w-[75rem] w-auto mx-auto h-[30rem] flex items-center justify-between">
          <div className="flex flex-col items-center gap-2 w-full sm:items-start">
            <span className="font-extralight text-start w-full text-sm text-[#b61c1c">
              + 4 Años de Experiencia
            </span>
            <div className="w-full sm:space-y-1 text-3xl text-center sm:text-start">
              <h1 className="font-bold text-primaryColor sm:text-5xl  ">
                Somos tu

                proveedor de <br /> <span className="text-[#b61c1c]">confianza</span>
              </h1>
            </div>
            <p className="sm:w-[24rem]  text-center sm:text-start text-md py-2 text-gray-500 ">
              Bienvenido a{" "}
              <strong className="text-primaryColor">
                Unidotaciones Del CARIBE S.A.S
              </strong>{" "}
              tu aliado con más 4 años de experiencia en la comercialización de
              suministros y dotación empresarial tales como uniformes, calzado y
              epps.
            </p>
            <Button className="hover:before:bg-redborder-red-500 relative hover:scale-105 h-[45px] p-4 w-36  overflow-hidden border  bg-[#b61c1c]  shadow-2xl transition-all delay-200 ease-in-out before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primaryColor before:transition-all before:duration-500 hover:text-white hover:shadow-primaryColor hover:border-primaryColor hover:before:left-0 hover:before:w-full rounded-3xl text-md font-bold ">
              <span className="relative z-10"> Contáctanos</span>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#191919] text-black flex-col flex items-center">
        <div>
          <h2 className="text-center text-white text-2xl sm:text-3xl p-6 mb-[-20px]">
            ¿Por qué debes trabajar con nosostros?
          </h2>
        </div>
        <div className="xl:w-[75rem] w-auto mx-auto gap-4 p-5 sm:p-0 sm:h-[10rem] grid grid-cols-1 sm:grid-cols-3 items-center justify-between">
          {itemBeneficios.map((item, index) => (
            <CardDescription item={item} key={index} />
          ))}
        </div>
      </section>
      <section className="bg-white text-black relative flex flex-col sm:flex-row items-center justify-center h-[15rem]">
        <div className="xl:w-[75rem] text-black w-full mx-auto p-4 py-6 h-full flex flex-col sm:flex-row items-center justify-between absolute top-0 font-semibold ">
          <div className="text-center">
            <h3>NUESTRA MISIÓN</h3>
            <p className="font-extralight sm:w-[30rem]">
              Ser la empresa líder en comercialización de dotaciones
              empresariales, brindando un servicio confiable y de calidad,
              logrando la satisfacción de clientes, proveedores y accionistas.
            </p>
          </div>
          <div className="text-center">
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
        <div className="xl:w-[80rem] w-auto mx-auto gap-7 p-5 sm:p-0 my-8 flex flex-col items-center justify-center">
          <h3 className='text-[#b61c1c] uppercase text-2xl font-bold'>Nuestros productos</h3>

          <div className="grid grid-cols-1 w-full sm:grid-cols-3 items-center justify-between  gap-9">
            {CategoryCard.map((item, index) => (
              <div
                key={index}
                className="relative sm:h-60 w-full h-[10rem] sm:w-[25rem] cursor-pointer bordercursor-pointer flex gap-2 items-center justify-center flex-col"
              >
                <Image
                  className="w-[100%] h-[100%] object-cover"
                  src={item.img}
                  alt="hola"
                  width={500}
                  height={500}
                />
                <div className="h-full w-full bg-[#00000066] absolute z-10"/>
                <div className="absolute z-20 flex flex-col gap-2 backdrop-blur-sm left-5 bottom-5 p-4 rounded-md bg-[#00000085] text-white">
                <h3 className="text-[16px] sm:text-lg">{item.title}</h3>
                <Link href={`/${item.title}`} className="bg-[#b61c1c] py-2 text-center text-sm sm:text-[1rem] rounded-[8px] px-4">Ver productos</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePages;
