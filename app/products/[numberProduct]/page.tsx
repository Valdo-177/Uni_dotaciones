"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const {numberProduct} = useParams()
  return (
    <div>
      id: {numberProduct}
    </div>
  )
}

export default page
