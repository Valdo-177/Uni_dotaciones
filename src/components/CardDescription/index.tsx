import Image from 'next/image'
import React from 'react'

import { TypesBeneficios } from '@/src/models/models.types'

const CardDescription = ({item}: {item: TypesBeneficios}) => {
    return (
        <div className='text-white flex items-center gap-5 flex-col sm:flex-row'>
            <Image className='w-16 h-16 sm:w-24 sm:h-24' src={item.img} width={100} height={100} alt={`imagen sobre ${item.label}`}/>
            <div className='text-center '>
                <h3>{item.label}</h3>
                <p className='font-extralight text-sm'>{item.description}</p>
            </div>
        </div>
    )
}

export default CardDescription
