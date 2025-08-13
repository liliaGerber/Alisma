import React from "react";
import { Button } from "./shadcn/button";
import {Instagram, Linkedin } from "lucide-react";
import {Link} from "react-router-dom";

interface ProfileCardProps {
    imageUrl: string;
    name: string;
    description: string;
}


export function BlobOutlinePersonCard({ imageUrl, name, description }: ProfileCardProps) {
    // Make the frame BIG and keep content always visible (no clipping)
    const viewW = 720;
    const viewH = 860;
    const outlinePath =
        "M160,120 C280,40 460,70 560,160 C635,230 670,320 645,425 C620,530 530,635 405,690 C280,745 175,740 120,690 C80,655 80,575 98,515 C116,455 150,400 140,330 C125,255 105,185 160,120 Z";

    return (
        <div className="relative w-full mx-auto">
            {/* Force a large frame height so the outline actually grows */}
            <div className="relative h-[900px] min-w-[700px]">
                {/* White irregular outline (pure overlay, no clipping) */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox={`0 0 ${viewW} ${viewH}`}
                    preserveAspectRatio="none"
                    aria-hidden
                >
                    <path
                        d={outlinePath}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* Content: centered, with generous padding so it never touches the frame */}
                <div className="absolute inset-0 grid justify-center mt-[20%]">
                    <div className="w-[99%] max-w-[500px] px-8 mt-0 text-center flex flex-col items-center gap-5 bg-transparent">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-[56%] aspect-square object-cover rounded-full shadow-lg"
                        />

                        <h3 className="text-2xl text-primary font-semibold leading-tight">{name}</h3>

                        <div className="flex gap-4 justify-center items-center">
                            <Button className="hover:scale-[1.1] bg-transparent text-primary shadow-none" size="icon" asChild>
                                <Link to="#" target="_blank" aria-label="LinkedIn">
                                    <Linkedin className="stroke-muted-foreground" />
                                </Link>
                            </Button>
                            <Button className="hover:scale-[1.1] bg-transparent text-primary hover:bg-muted shadow-none" size="icon" asChild>
                                <Link to="#" target="_blank" aria-label="Instagram">
                                    <Instagram className="stroke-muted-foreground" />
                                </Link>
                            </Button>
                        </div>

                        <p className="text-base text-primary text-start leading-relaxed max-w-prose">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}




