"use client";

import { globalStyles  } from "@/src/models";
import { useParams } from "next/navigation";
import CardProducts from "@/src/components/CardProducts";
import GetData from "@/src/hooks/GetData";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CarouselComponent from "@/src/components/Carousel";


const CategoryPage = () => {

  // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
  const { categoria }: { categoria: string } = useParams()
  const [infoData, setInfoData] = useState(true)

  setTimeout(() => {
    setInfoData(false)
  }, 2000);

  function desencriptarCadena(cadena: string): string {
    try {
      return decodeURIComponent(cadena);
    } catch (error) {
      console.error('Error al desencriptar la cadena:', error);
      return '';
    }
  }

  const { documents } = GetData(desencriptarCadena(categoria))

  return (
    <section className="bg-[#F8F8F8] text-black p-4 py-10">
      <h3 className=" uppercase sm:text-2xl text-xl font-bold text-center text-wrap py-10">

        {desencriptarCadena(categoria)}
      </h3>
      <div className={`flex flex-col gap-4 sm:justify-between justify-center items-center ${globalStyles.container}`}>
      <CarouselComponent/>
      
        <div className={`p-10 grid grid-cols-1 justify-items-center sm:grid-cols-3 min-h-[30rem] w-full gap-5 bg-white shadow-md rounded-[7.38px]`}>
          {documents.map((item, index) => (
            <CardProducts key={index} item={item} />
          ))}
          {documents.length == 0 && infoData ? <div className="grid mx-auto sm:grid-cols-3 col-span-3 grid-cols-1 gap-3 w-full">
            <Skeleton className="h-[30rem] rounded-none w-full" />
            <Skeleton className="h-[30rem] rounded-none w-full" />
            <Skeleton className="h-[30rem] rounded-none w-full" />
          </div> :
            documents.length == 0 && <div className='text-black h-[30rem] col-span-3 w-full mx-auto flex items-center justify-center'>
              No se Encontraron Los productos..
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
