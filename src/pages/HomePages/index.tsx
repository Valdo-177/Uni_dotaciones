import { Button } from '@/components/ui/button'
import CardDescription from '@/src/components/CardDescription'
import { itemBeneficios } from '@/src/models'
import Image from 'next/image'
import React from 'react'
import fondoSection from "../../assets/fondoseccion1.png"

const HomePages = () => {
    return (
        <>
            <section className="bg-white text-black p-4">
                <div className="xl:w-[75rem] w-auto mx-auto h-[30rem] flex items-center justify-between">
                    <div className='flex flex-col gap-2 sm:max-w-[24rem] w-full items-start'>
                        <span className='font-extralight text-sm'>+ 4 Años de Experiencia</span>
                        <div className='w-full'>
                            <h1 className='text-primaryColor text-3xl uppercase font-medium'>Unidotaciones <br /> del caribe</h1>
                            <h2 className='text-2xl'>Somos tu proveedor de confianza</h2>
                        </div>
                        <p className='sm:w-[24rem] font-extralight text-sm'>Somos tu proveedor de confianza Somos tu proveedor de confianzaSomos tu proveedor de </p>
                        <Button className='bg-primaryColor hover:bg-primaryColorBlack'>Contáctanos</Button>
                    </div>
                </div>
            </section>
            <section className="bg-primaryColor text-black">
                <div className="xl:w-[75rem] w-auto mx-auto gap-4 p-5 sm:p-0 sm:h-[6rem] flex flex-col sm:flex-row items-center justify-between">
                    {itemBeneficios.map((item, index) =>(
                        <CardDescription item={item} key={index}/>
                    ))}
                </div>
            </section>
            <section className="bg-white text-black relative flex flex-col sm:flex-row items-center justify-center h-[22rem]">
                <Image src={fondoSection} className="w-full h-full object-cover" width={4000} height={4000} alt="Imagen de fondo de seccion"/>
                <div className="xl:w-[75rem] w-full mx-auto p-4 py-6 h-[22rem] flex flex-col sm:flex-row items-center justify-between absolute top-0 text-white">
                   <div>
                    <h3>NUESTRA VISIÓN</h3>
                    <p className='font-extralight sm:w-[30rem]'>Ser reconocida a mediano plazo, como una empresa de alta calidad y cumplimiento en el sector de dotaciones empresariales en la Región Caribe.</p>
                   </div>
                   <div>
                    <h3>NUESTRA VISIÓN</h3>Conéctate con nosotros:
                    <p className='font-extralight sm:w-[30rem]'>Ser reconocida a mediano plazo, como una empresa de alta calidad y cumplimiento en el sector de dotaciones empresariales en la Región Caribe.</p>
                   </div>
                </div>
            </section>
        </>
    )
}

export default HomePages
