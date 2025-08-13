import {CarouselWrapper} from "./generics/CarouselWrapper"

import team from "../../assets/data/team.json" with {type: "json"}
import {BlobOutlinePersonCard} from "@/ui/components/BlobFramePersonCard";

export default function TeamSlider() {
    return (
        <section id="teamslider" className="w-screen mt-5 relative h-fit overflow-hidden">
            <div className="absolute left-0 h-full w-[22vw] z-10 flex pointer-events-none overflow-hidden">
                <svg
                    className="absolute top-0 left-0 h-full w-full text-primary"
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
                <h2 className="text-secondary text-start heading-1 whitespace-pre-line mt-[60%] ml-[20%] relative z-10">The{"\n"}Team</h2>
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
                className="w-[75vw] ml-[25vw]   z-0 pl-10"
            />
        </section>
    )
}
