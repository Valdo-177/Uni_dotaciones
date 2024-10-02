"use client";

import { globalStyles } from "@/src/models";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import imagen from "../../src/assets/camisa-oxford-hombre.jpeg";

const page = () => {
  const { categoria } = useParams();

  function desencriptarCadena(cadena: string) {
    return decodeURIComponent(cadena.replace(/%20/g, ' '));
}
  return (
    <section className="bg-[#F8F8F8] text-black p-4 py-10">
      <h3 className=" uppercase text-2xl font-bold text-center py-10">
        {desencriptarCadena(categoria)}
      </h3>
      <div className={`${globalStyles.container} p-2 grid grid-cols-1 justify-items-center sm:grid-cols-3 gap-y-4`}>
        <div className="w-[17rem] bg-white border flex flex-col items-center">
          <div className="relative w-[17rem] h-[15rem]">
            <Image
              className="w-[100%] h-[100%] object-contain"
              src={imagen}
              alt="hola"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4 bg-primaryColor w-full">
          <h4 className="font-medium text-center text-white">Camisa Oxford Hombre</h4>

          </div>
        </div>
        <div className="w-[17rem] bg-white border flex flex-col items-center">
          <div className="relative w-[17rem] h-[15rem]">
            <Image
              className="w-[100%] h-[100%] object-contain"
              src={imagen}
              alt="hola"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4 bg-primaryColor w-full">
          <h4 className="font-medium text-center text-white">Camisa Oxford Hombre</h4>

          </div>
        </div>
        <div className="w-[17rem] bg-white border flex flex-col items-center">
          <div className="relative w-[17rem] h-[15rem]">
            <Image
              className="w-[100%] h-[100%] object-contain"
              src={imagen}
              alt="hola"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4 bg-primaryColor w-full">
          <h4 className="font-medium text-center text-white">Camisa Oxford Hombre</h4>

          </div>
        </div>
        <div className="w-[17rem] bg-white border flex flex-col items-center">
          <div className="relative w-[17rem] h-[15rem]">
            <Image
              className="w-[100%] h-[100%] object-contain"
              src={imagen}
              alt="hola"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4 bg-primaryColor w-full">
          <h4 className="font-medium text-center text-white">Camisa Oxford Hombre</h4>

          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
