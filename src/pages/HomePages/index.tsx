import { Button } from "@/components/ui/button";
import CardDescription from "@/src/components/CardDescription";
import { categorias, CategoryCard, itemBeneficios } from "@/src/models";
import Image from "next/image";
import React from "react";
import fondoSection from "../../assets/fondoseccion1.png";
import Link from "next/link";

const HomePages = () => {
  return (
    <>
      <section className="bg-[#F8F8F8] text-black p-8 sm:p-4">
        <div className="xl:w-[75rem] w-auto mx-auto h-[30rem] flex items-center justify-between">
          <div className="flex flex-col items-center gap-2 w-full sm:items-start">
            <span className="font-extralight text-start w-full text-sm text-[#b61c1c">
              +4 Años de Experiencia
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
      <section className="bg-[#191919] text-black flex-col flex items-center rounded-[40px]">
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
      <section className="bg-white text-black relative flex flex-col sm:flex-row items-center justify-center h-[22rem]">
        {/* <Image
          src={fondoSection}
          className="w-full h-full object-cover"
          width={4000}
          height={4000}
          alt="Imagen de fondo de seccion"
        /> */}
        <div className="xl:w-[75rem] text-black w-full mx-auto p-4 py-6 h-[22rem] flex flex-col sm:flex-row items-center justify-between absolute top-0 font-semibold ">
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

      <section className=" text-black bg-[#F8F8F8] py-8 ">
        <div className=" mx-auto gap-4 p-5 sm:p-0 my-8 flex flex-col justify-center items-center">
          <h3 className=" uppercase text-2xl font-bold pb-8">
            Nuestros productos
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-between  gap-12">
            {CategoryCard.map((item, index) => (
              <Link
                href={`/${item.title}`}
                key={index}
                className="px-8 border-4 h-64 rounded-[40px] w-64 border-primaryColor cursor-pointer flex gap-2 items-center justify-between flex-col p-4"
              >
                {/* <Image
                  src={fondoSection}
                  alt={item.title}
                  width={600}
                  height={600}
                /> */}

                <h3 className=" text-sm font-bold">{item.title}</h3>

                <Button className="hover:before:bg-redborder-red-500 relative hover:scale-105 p-4   overflow-hidden border  bg-[#b61c1c]  shadow-2xl transition-all delay-200 ease-in-out before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primaryColor before:transition-all before:duration-500 hover:text-white hover:shadow-primaryColor hover:border-primaryColor hover:before:left-0 hover:before:w-full rounded-3xl text-sm font-bold ">
              <span className="relative z-10"> Ver catálogo</span>
            </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePages;
