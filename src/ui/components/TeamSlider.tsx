import {CarouselWrapper} from "./generics/CarouselWrapper"

import team from "../../assets/data/team.json" with {type: "json"}
import {BlobOutlinePersonCard} from "@/ui/components/BlobFramePersonCard";

export default function TeamSlider() {
    return (
        <section id="teamslider" className="w-screen mt-5 grid grid-cols-1 lg:grid-cols-4 relative h-fit overflow-hidden">
            <div className="relative col-span-1 left-0 h-full z-10 flex pointer-events-none overflow-hidden">
                <svg
                    className="absolute top-0 left-0 h-full w-full text-primary hidden lg:block"
                    viewBox="0 0 300 1000"
                    preserveAspectRatio="none"
                    aria-hidden
                >
                    <path
                        d="M0,0
             C 70,100 210,120 270,240
             S 250,470 200,600
             S 240,820 0,1000
             L0,0Z"
                        fill="currentColor"
                    />
                </svg>
                <h2 className="lg:text-secondary  text-primary text-start heading-1 whitespace-pre-line mt-30 lg:mt-[70%] ml-5 lg:ml-[20%] relative z-10">The Team</h2>
            </div>
            <CarouselWrapper
                items={team.map((member) => (
                    <BlobOutlinePersonCard
                        key={member.name}
                        imageUrl={member.imageUrl}
                        name={member.name}
                        description={member.bio}
                    />
                ))}
                intervalMs={4000}
                className="w-full  col-span-3 basis-[100%] xl:basis-[48%] z-0 pl-10"
            />
        </section>
    )
}
