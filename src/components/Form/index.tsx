"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useForm from '@/src/hooks/useForm'
import { Textarea } from '@/components/ui/textarea'

const Form = () => {
  // const [show, setShow] = useState(false)
  const { onChange } = useForm({
    contacto: "",
    email: "",
    telefono: "",
    empresa: "",
    detalles: "",
  })

  // const ShowLoading = (state: boolean) => {
  //   setShow(state)
  // }

  return (
    <section className="bg-[#191919] w-full text-black">
      <div className="xl:w-[75rem] w-auto mx-auto gap-2 h-[35rem] flex flex-col py-5 items-center justify-between">
        {/* <Loading show={show} /> */}
        <h3 className='text-[#F8F8F8] p-4 uppercase text-2xl font-bold'>Cotiza con nosotros</h3>
        <form className='sm:w-[40rem] w-full px-6 flex flex-col gap-4'>
          <div>
            <Input className='bg-[#F8F8F8] rounded-[8px] p-5 placeholder:text-[#191919]' placeholder="Empresa:" id="empresa" type='text' onChange={({ target: { value } }) => onChange(value, "empresa")} />
          </div>
          <div>
            <Input className='bg-[#F8F8F8] rounded-[8px] p-5 placeholder:text-[#191919] ' placeholder="Contacto:" id="name" type='text' onChange={({ target: { value } }) => onChange(value, "contacto")} />
          </div>
          <div>
            <Input className='bg-[#F8F8F8] rounded-[8px] p-5 placeholder:text-[#191919] ' placeholder="correo:" id="email" type='email' onChange={({ target: { value } }) => onChange(value, "email")} />
          </div>
          <div>
            <Input className='bg-[#F8F8F8] rounded-[8px] p-5 placeholder:text-[#191919] ' placeholder="Teléfono:" id="telefono" type='text' onChange={({ target: { value } }) => onChange(value, "telefono")} />
          </div>
          <div>
            <Textarea className='bg-[#F8F8F8] rounded-[8px] p-5 placeholder:text-[#191919]  h-32'  placeholder="Referencia que deseas cotizar y cuantas unidades desea..." id="detalles" onChange={({ target: { value } }) => onChange(value, "detalles")} />
          </div>
        </form>
        <Button className="hover:before:bg-redborder-red-500 relative hover:scale-105 h-[45px] p-4 w-36  overflow-hidden bg-[#b61c1c]  shadow-2xl transition-all delay-200 ease-in-out before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primaryColor before:transition-all before:duration-500 hover:text-white hover:shadow-primaryColor hover:border-primaryColor hover:before:left-0 hover:before:w-full rounded-[8px] text-md font-bold "><span className="relative z-10"> Enviar</span></Button>
      </div>
    </section>
  )
}

export default Form
