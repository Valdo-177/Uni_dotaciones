import { Category } from "@/src/models";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-primaryColor text-white px-2 py-3 sm:px-10 flex flex-col items-center justify-center">
      <div className="w-auto mx-auto p-5 flex flex-col items-center gap-2 justify-center">
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
          <h3 className="text-[#C5A963] font-bold">Contáctanos</h3>

          <div className="text-gray-400 flex flex-col items-center ">
            <p>3225875128</p>
            <p>unidotaciobesdelcaribe@gmail.com</p>

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
