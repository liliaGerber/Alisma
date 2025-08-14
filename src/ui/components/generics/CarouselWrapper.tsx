import React, {useEffect, useRef, useState} from "react"
import {Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext} from "../shadcn/carousel"

interface CarouselWrapperProps {
    items: React.ReactNode[]
    className?: string
    intervalMs?: number
    transitionMs?: number
    align?: "start" | "center" | "end"
    itemsCss?: string
}

export function CarouselWrapper({
                                    items,
                                    className = "",
                                    intervalMs = 4000,
                                    transitionMs = 10,
                                    align = "start",
                                    itemsCss = "shrink-0 grow-0 basis-[100%] w-full lg:basis-[48%] justify-between mx-4.5 lg:w-fit h-full snap-start"
                                }: CarouselWrapperProps) {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (!api) return
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            api.scrollNext()
        }, intervalMs)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [api, intervalMs])

    return (
        <Carousel
            opts={{loop: true, align, duration: transitionMs}}
            setApi={setApi}
            className={className}
        >
            <CarouselContent className="w-full py-10 flex hide-scrollbar px-4">
                {items.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className={itemsCss}
                    >
                        {item}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext/>
        </Carousel>
    )
}
