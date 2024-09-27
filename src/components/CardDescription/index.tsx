import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/g9.svg'
import { TypesBeneficios } from '@/src/models/models.types'

const CardDescription = ({item}: {item: TypesBeneficios}) => {
    return (
        <div className='text-white flex items-center gap-5'>
            <Image src={item.img} width={60} height={60} alt='Img de descripcion'/>
            <div>
                <h3>{item.label}</h3>
                <p className='font-extralight text-sm'>{item.description}</p>
            </div>
        </div>
    )
}

export default CardDescription
