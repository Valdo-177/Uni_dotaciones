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
          <div className="p-2 md:p-6">
            <p className="text-slate-500 mb-2 font-medium">CATEGORÍAS</p>
            {categoriasProduct.map((item) => (
              <div onClick={() => handleOpenChange(false)} key={item}>
                <Link
                  href={`/Category/${item}`}
                  
                  className={cn(
                    `flex gap-x-2 mt-2 text-black text-sm items-center rounded-lg p-2 cursor-pointer ${
                      desencriptarCadena(id) == item && "bg-slate-300/20"
                    }`
                  )}
                >
                  <Dot className="h-5 w-5" strokeWidth={1} />
                  {item}
                </Link>
              </div>
            ))}
          </div>
          <Separator />
        </div>
        <div>
          <footer className="mt-3 p-3 text-center text-black text-[0.8rem]">
            2024. Todos los derechos reservados
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
                <Phone size={20} />
                <p>3225875128</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <p>unidotaciobesdelcaribe@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <p>Síguenos:</p>
              <a
                href="https://www.instagram.com/unidotacionesdelcaribe/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                <p>unidotacionesdelcaribe</p>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-[#FFFF] text-black px-5 py-3 sm:px-10 sm:py-2">
          <div className="2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto flex items-center justify-between">
            <Image
              src={Logo}
              width={250}
              height={250}
              alt="Logo de naturchem"
              onClick={() => roter.push("/")}
            />
            <div className="hidden sm:flex items-center font-bold gap-10 text-lg">
              <Link href="#" className="text-primaryColor hover:underline">
                Inicio
              </Link>
              <Link href="#" className="text-primaryColor hover:underline">
                Cotizaciones
              </Link>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-1 cursor-pointer text-primaryColor hover:underline">
                    <p>Categorías</p>
                    <ChevronDown size={16} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar categoría..." />
                    <CommandList>
                      <CommandEmpty>No existe esa categoría.</CommandEmpty>
                      <CommandGroup>
                        {categorias.map((categorias) => (
                          <CommandItem
                            key={categorias.value}
                            value={categorias.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                              roter.push(`/Category/${currentValue}`);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === categorias.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {categorias.label}
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
                <SheetContent side="left" className="bg-white">
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
