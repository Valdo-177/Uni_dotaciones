import { Category } from "@/src/models";
import Link from "next/link";
import React from "react";
import Form from "../Form";

const Footer = () => {
  return (
    <section className="bg-primaryColor rounded-t-[40px] text-white  flex flex-col items-center justify-center">

      <Form/>

      <div className="w-auto mt-8 mx-auto p-5 flex flex-col items-center gap-2 justify-center sm:px-10">
        {/* <div className="flex flex-col items-center">
          <h4 className="font-[600] cursor-pointer">
            Categorias
          </h4>
          <div className="py-1 flex flex-col items-center justify-center w-full sm:w-[30rem]">
            {Category.map((item, index) => (
              <Link
                className="text-sm"
                href={`/Category/${item.label}`}
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div> */}
        <div className=" flex flex-col items-center">
          <h3 className="text-white font-bold">Contáctanos</h3>

          <div className="text-gray-400 flex flex-col items-center ">
            <Link
            href={'tel:3225875128'}
            >
            <p>3225875128</p>
            </Link>

            <Link
            href={'mailto:unidotacionesdelcaribe@gmail.com'}
            >
            
            <p>unidotacionesdelcaribe@gmail.com</p>
            </Link>

            <p>Barranquilla -  Colombia</p>
          </div>
        </div>
      </div>
      <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto  py-3 flex items-center justify-center">
        <h4 className="text-xs sm:text-sm font-[600] w-full  cursor-pointer text-center">
          © 2024 UNIDOTACIONES DELCARIBE S.A.S. | Todos los derechos reservados
        </h4>
      </div>
    </section>
  );
};

export default Footer;
