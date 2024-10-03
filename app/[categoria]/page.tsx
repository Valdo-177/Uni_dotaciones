"use client";

import { globalStyles, ProductsExample } from "@/src/models";
import Image from "next/image";
import { useParams } from "next/navigation";
import baner from "../../src/assets/empresarial-baner-removebg.png"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CardProducts from "@/src/components/CardProducts";


const CategoryPage = () => {

  // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
  const { categoria }: { categoria: string } = useParams()


  function desencriptarCadena(cadena: string) {
    return decodeURIComponent(cadena.replace(/%20/g, ' '));
  }

  return (
    <section className="bg-[#F8F8F8] text-black p-4 py-10">
      <h3 className=" uppercase sm:text-2xl text-xl font-bold text-center text-wrap py-10">
        
        {desencriptarCadena(categoria)}
      </h3>
      <div className={`flex flex-col sm:flex-row gap-4 sm:justify-between justify-center items-center ${globalStyles.container}`}>
        <div className="bg-[#E0E0E0] sm:h-[43rem] sm:w-[21.3rem] w-full p-6 text-[#191C1F] flex flex-row sm:flex-col items-center justify-end shadow-sm rounded-[7.38px]">
          <div className="flex flex-col gap-6 w-[15rem]">
            <div>
              <span className="hidden sm:block">Uniformes empresariales</span>
              <h4 className="sm:text-2xl font-bold">Tenemos los
                mejores precios</h4>
              <span className="text-gray-600 text-sm sm:text-[1rem]">Mira mas de esta sección</span>
            </div>
            <Link href="" className="flex items-center gap-2 sm:p-4 p-2 justify-center bg-[#FBCB00] text-sm sm:text-[1rem] text-[#191C1F]">
              ver más
              <ArrowRight />
            </Link>
          </div>
          <Image
            className="sm:w-[80%] w-[10rem]"
            src={baner}
            alt="hola"
            width={500}
            height={500}
          />
        </div>
        <div className={`p-10 grid grid-cols-1 justify-items-center sm:grid-cols-3 gap-5 bg-white shadow-md rounded-[7.38px]`}>
          {ProductsExample.map(item => (
            <CardProducts key={item} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
