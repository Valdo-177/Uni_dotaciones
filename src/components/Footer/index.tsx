import { Category } from '@/src/models'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="bg-white text-black px-2 py-3 sm:px-10">
      <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto border-t border-gray-100 p-5 flex items-center gap-2 justify-between">
        <div>
          <h4 className='font-[600] w-full text-start text-black cursor-pointer'>Categorias</h4>
          <div className='py-1 grid sm:grid-cols-2 grid-cols-1 w-full sm:w-[30rem]'>
            {Category.map((item, index) => (
              <Link className='text-sm' href={`/Category/${item.label}`} key={index}>{item.label}</Link>
            ))}
          </div>
        </div>
      
      </div>
      <div className="2xl:w-[90rem] xl:w-full w-auto mx-auto border-t border-gray-100 py-3 flex items-center justify-center">
        <h4 className='text-xs sm:text-sm font-[600] w-full text-gray-700 cursor-pointer text-center'>© 2024 UNIDOTACIONES DELCARIBE S.A.S. | Todos los derechos reservados</h4>

      </div>
    </section>
  )
}

export default Footer