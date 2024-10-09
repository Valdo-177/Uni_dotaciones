import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { banners } from "@/src/models"

const CarouselComponent = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full max-h-full"
            onMouseEnter={() => {
                plugin.current.stop
            }}
            onMouseLeave={() => {
                plugin.current.play
            }}
        >
            <CarouselContent className="h-full max-h-full">
                {banners.map((item, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="bg-[#E0E0E0] sm:h-[17rem] sm:w-full w-full text-[#191C1F] flex   items-center justify-between sm:flex-row flex-col gap-8 p-6 sm:p-0 overflow-hidden sm:pl-[4rem] shadow-sm rounded-[7.38px]">
                            <div className="flex flex-col gap-6 w-[15rem]">
                                <div>
                                    <span className="hidden sm:block">{item.category}</span>
                                    <h4 className="sm:text-2xl font-bold">{item.title}</h4>
                                    <span className="text-gray-600 text-sm sm:text-[1rem]">{item.subTitle}</span>
                                </div>
                                <Link href={`/${item.category}`} className="flex items-center gap-2 sm:p-4 p-2 justify-center bg-[#FBCB00] text-sm sm:text-[1rem] text-[#191C1F]">
                                    ver más
                                    <ArrowRight />
                                </Link>
                            </div>
                            <Image
                                className="sm:w-[35rem] h-full w-full object-cover object-top"
                                src={item.img}
                                alt="hola"
                                width={500}
                                height={500}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselComponent