import {Button} from "@/ui/components/shadcn/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useState} from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi
} from "@/ui/components/shadcn/carousel";
import CourseCard from "../components/CourseCard";
import Classes from '../../assets/data/masterclasses.json';

export default function CardsCarousel() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    return (
        <section id={"course-carousel"} className={"w-full mt-30  lg:mt-10 mb-20"}>
            <div className="flex flex-col items-center justify-between mb-5 md:flex-row md:items-end lg:mb-4">
                <h2>Our masterclasses</h2>
                <div className="flex flex-row shrink-0 items-center justify-start gap-2">
                    <Button
                        size="icon"
                        variant="outline"
                        className="disabled:pointer-events-auto"
                        onClick={() => {
                            carouselApi?.scrollPrev();
                        }}
                    >
                        <ArrowLeft className="size-5"/>
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        className="disabled:pointer-events-auto"
                        onClick={() => {
                            carouselApi?.scrollNext();
                        }}
                    >
                        <ArrowRight className="size-5"/>
                    </Button>
                </div>
            </div>
            <div id={"carousel"}>
                <Carousel opts={{loop: true, align: "start"}} setApi={setCarouselApi} className="w-full">
                    <CarouselContent className={"flex md:px-0"}>
                        {Classes.map((item) => (
                            <CarouselItem className={"shrink-0 basis-full md:basis-full lg:basis-1/3 "}>
                                <CourseCard title={item.title} description={item.description} id={item.id} url={item.url}
                                            imageUrl={item.imageUrl} avaiable={item.avaiable}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}