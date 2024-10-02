"use client";
import React from "react";
import {
  Check,
  ChevronDown,
  Dot,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/Unidotaciones_Logo2.svg";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { categorias, categoriasProduct } from "@/src/models";

const Nav = () => {
  const roter = useRouter();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  function desencriptarCadena(cadena: string) {
    return decodeURIComponent(cadena?.replace(/%20/g, " "));
  }

  const SidebaRoute = () => {
    return (
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="p-4 mt-6">
           <div className="py-5">
            <Link
            onClick={() => handleOpenChange(false)}
            className="text-primaryColor w-full hover:text-yellow-600 font-bold uppercase"
            href={'/'}>
            Inicio
            </Link>
           </div>

            <p className="text-primaryColor mb-2 font-bold border-b-2 border-primaryColor">
              NUESTROS PRODUCTOS
            </p>
            {categoriasProduct.map((item) => (
              <div onClick={() => handleOpenChange(false)} key={item}>
                <Link
                  href={`/${item}`}
                  className={cn(
                    `flex gap-x-2 mt-2 uppercase border-b-2 border-gray-400 text-black text-sm items-center p-2 py-4 cursor-pointer hover:bg-[#1b629253] hover:scale-105 transition-all delay-200 ${
                      desencriptarCadena(id) == item && "bg-slate-300/20"
                    }`
                  )}
                >
                  {/* <Dot className="h-5 w-5" strokeWidth={1} /> */}
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <footer className="mt-3 p-4 w-full text-white bg-primaryColor text-center text-[0.8rem]">
            <Link href={"tel:3225875128"}>
              <p>3225875128</p>
            </Link>
            <Link href={"mailto:unidotaciobesdelcaribe@gmail.com"}>
              <p>unidotaciobesdelcaribe@gmail.com</p>
            </Link>
            <p>Barranquilla - Colombia</p>
            <p className="pt-8">2024. Todos los derechos reservados</p>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="bg-primaryColor text-white">
        <section className="hidden sm:block px-5 sm:px-10 py-2">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
            <div className="flex flex-col sm:flex-row items-center sm:gap-7 gap-3">
              <div className="flex items-center gap-2">
                <Phone size={20} color="#b61c1c" />
                <Link href="tel:3225875128">
                  <p>3225875128</p>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail color="#b61c1c" size={20} />
                <Link href={"mailto:unidotacionesdelcaribe@gmail.com"}>
                  <p>unidotacionesdelcaribe@gmail.com</p>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* <p>Síguenos:</p> */}
              <Link
                href="https://www.instagram.com/unidotacionesdelcaribe/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Instagram color="#b61c1c" size={20} />
                <p>unidotacionesdelcaribe</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#FFFF] text-black px-5 py-3 sm:px-10 sm:py-2">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-between">
            <Image
              src={Logo}
              width={200}
              height={200}
              alt="Logo de Unidotaciones del caribe"
              onClick={() => roter.push("/")}
              className="cursor-pointer sm:w-80"
            />
            <div className="hidden sm:flex items-center font-bold gap-10 text-md">
              <Link href="/" className="text-primaryColor hover:text-[#b61c1c] transition-all delay-100">
                Inicio
              </Link>
              <Link href="#" className="text-primaryColor hover:text-[#b61c1c] transition-all delay 100">
                Cotizaciones
              </Link>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-1 cursor-pointer text-primaryColor hover:text-[#b61c1c] transition-all delay-100">
                    <p>Nuestros Productos</p>
                    <ChevronDown size={16} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar categoría..." />
                    <CommandList>
                      <CommandEmpty>No existe esa categoría.</CommandEmpty>
                      <CommandGroup className="w-80 bg-[#1b629253]">
                        {categorias.map((categorias) => (
                          <CommandItem
                          className="hover:bg-[#1b629253] font-bold text-gray-700"
                            key={categorias.value}
                            value={categorias.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                              roter.push(`/${currentValue}`);
                            }}
                          >
                            <Check
                              className={cn(
                                " h-10 w-0 ",
                                value === categorias.value
                                  ? "opacity-100 "
                                  : "opacity-0 "
                              )}
                            />
                            <p className="uppercase w-full cursor-pointer">

                            {categorias.label}
                            </p>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="sm:hidden">
              <Sheet open={isOpen} onOpenChange={handleOpenChange}>
                <SheetTrigger className="flex items-center">
                  <Menu onClick={() => setIsOpen(true)} />
                </SheetTrigger>
                <SheetContent side="left" className="bg-white p-0">
                  <SidebaRoute />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Nav;
