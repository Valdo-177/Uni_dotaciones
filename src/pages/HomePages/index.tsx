import { Button } from '@/components/ui/button'
import CardDescription from '@/src/components/CardDescription'
import { itemBeneficios } from '@/src/models'
import React from 'react'

const HomePages = () => {
    return (
        <>
            <section className="bg-white text-black">
                <div className="xl:w-[75rem] w-auto mx-auto h-[30rem] flex items-center justify-between">
                    <div className='flex flex-col gap-2 max-w-[24rem] items-start'>
                        <span className='font-extralight text-sm'>+ 4 Años de Experiencia</span>
                        <div>
                            <h1 className='text-primaryColor text-3xl uppercase font-medium'>Unidotaciones <br /> del caribe</h1>
                            <h2 className='text-2xl'>Somos tu proveedor de confianza</h2>
                        </div>
                        <p className='w-[24rem] font-extralight text-sm'>Somos tu proveedor de confianza Somos tu proveedor de confianzaSomos tu proveedor de </p>
                        <Button className='bg-primaryColor'>Contáctanos</Button>
                    </div>
                </div>
            </section>
            <section className="bg-primaryColor text-black">
                <div className="xl:w-[75rem] w-auto mx-auto h-[6rem] flex items-center justify-between">
                    {itemBeneficios.map((item, index) =>(
                        <CardDescription item={item} key={index}/>
                    ))}
                </div>
            </section>
            <section className="bg-white text-black">
                <div className="xl:w-[75rem] w-auto mx-auto h-[30rem] flex items-center justify-between">
                   
                </div>
            </section>
        </>
    )
}

export default HomePages
