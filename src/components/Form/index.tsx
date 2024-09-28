"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Loading from '../Loading'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import useForm from '@/src/hooks/useForm'
import { Textarea } from '@/components/ui/textarea'

const Form = () => {
  const [show, setShow] = useState(false)
  const { form, onChange } = useForm({
    nombre: "",
    email: "",
    correo: "",
    asunto: "",
    empresa: "",
    detalles: "",
  })

  const ShowLoading = (state: boolean) => {
    setShow(state)
  }

  console.log(form)
  return (
    <section className="bg-white text-black px-4">
      <div className="xl:w-[75rem] w-auto mx-auto gap-2 h-[30rem] flex flex-col py-5 items-center justify-between">
        <Loading show={show} />
        <h3 className='text-primaryColor text-xl font-medium'>Cotiza con nosotros</h3>
        <form className='sm:w-[40rem] w-full flex flex-col gap-2'>
          <div>
            <Label htmlFor="name" className='text-sm'>Nombres y apellidos: <span className='text-primaryColor'>*</span></Label>
            <Input placeholder="shadcn" id="name" type='email' onChange={({ target: { value } }) => onChange(value, "nombre")} />
          </div>
          <div>
            <Label htmlFor="email" className='text-sm'>Correo Electrónico: <span className='text-primaryColor'>*</span></Label>
            <Input placeholder="shadcn" id="email" type='email' onChange={({ target: { value } }) => onChange(value, "correo")} />
          </div>
          <div>
            <Label htmlFor="asunto" className='text-sm'>Asunto: <span className='text-primaryColor'>*</span></Label>
            <Input placeholder="shadcn" id="asunto" type='text' onChange={({ target: { value } }) => onChange(value, "asunto")} />
          </div>
          <div>
            <Label htmlFor="empresa" className='text-sm'>Empresa: <span className='text-primaryColor'>*</span></Label>
            <Input placeholder="shadcn" id="empresa" type='text' onChange={({ target: { value } }) => onChange(value, "empresa")} />
          </div>
          <div>
            <Label htmlFor="detalles" className='text-sm'>Detalles: <span className='text-primaryColor'>*</span></Label>
            <Textarea className='h-20' placeholder="shadcn" id="detalles" onChange={({ target: { value } }) => onChange(value, "detalles")} />
          </div>
        </form>
        <Button onClick={() => ShowLoading(true)} className='bg-primaryColor hover:bg-primaryColorBlack'>Enviar Formulario</Button>
      </div>
    </section>
  )
}

export default Form
