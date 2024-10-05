import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


interface CardProductsTypes {
    item: {
        Nombre: string;
        categoria: string;
        colores: string[];
        descripcion: string;
        imagen: string;
        tallas: string[];
    };
}

const CardProducts = ({ item }: CardProductsTypes) => {
    const searchParams = useSearchParams()
    const pathNAme = usePathname()
    const { replace, push } = useRouter()
    const nameProduct = searchParams?.get("product")
// @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
    const params = new URLSearchParams(searchParams)

    const handleParams = (item: string) => {
        params.set("product", item)
        replace(`${pathNAme}?${params.toString()}`)
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="cursor-pointer hover:shadow-md pt-5 w-[15rem] bg-white flex flex-col items-center gap-3" onClick={() => handleParams(item.Nombre)}>
                    <div className="relative w-[15rem] h-[13rem]">
                        <Image
                            className="w-[100%] h-[100%] object-contain"
                            src={item.imagen}
                            alt="hola"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="p-4 bg-primaryColor w-full">
                        <h4 className="font-medium text-center text-white">{item.Nombre}</h4>

                    </div>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent className='max-w-[75rem] h-[40rem] overflow-y-scroll'>
                <AlertDialogHeader>
                    <div className='flex gap-9 items-center flex-col sm:flex-row'>
                        <Image
                            className="sm:w-[30rem] sm:h-[30rem] w-[16rem] h-[16rem] object-contain"
                            src={item.imagen}
                            alt="hola"
                            width={500}
                            height={500}
                        />
                        <div className='w-full sm:w-[40rem] flex flex-col items-start'>
                            <AlertDialogTitle className='text-2xl mb-5'>{nameProduct}</AlertDialogTitle>
                            <span className='text-lg font-semibold'>Description:</span>
                            <AlertDialogDescription className='w-full sm:w-[80%] text-start'>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </AlertDialogDescription>
                            <span className='text-lg font-semibold'>Colores:</span>
                            <div className='flex items-center gap-2'>
                                {["#da0505", "#232323", "#262"].map(item => (
                                    <div
                                        key={item}
                                        className="h-7 w-7 cursor-pointer"
                                        style={{ borderRadius: '50%', background: item }}
                                    />
                                ))}
                            </div>
                            <span className='text-lg font-semibold'>Tallas disponibles:</span>
                            <div className='flex items-center gap-2'>
                                {["S", "M", "L", "XL", "XXL"].map(item => (
                                    <div
                                        key={item}
                                        className="cursor-pointer bg-slate-300 rounded-sm px-4 py-2"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter className='mt-6'>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-primaryColor' onClick={() => push("https://api.whatsapp.com/send/?phone=3128158494&text=Nombre+del+producto")}>
                        Cotizar producto
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CardProducts