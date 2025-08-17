import React from "react";
import { useTranslation } from "react-i18next";
import { BottomWave } from "@/ui/components/generics/Waves";

// Use the new image (same “bg-cover” behavior as the old banner)
const HERO_IMAGE = "/news/HTLGirlsEvent.jpeg";

// Local top-wave just for this banner (different curve than your old TopWave)
function AboutTopWave({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-[300px] text-secondary z-10"
        >
            <path
                d="M0,100 C360,0 1080,200 1440,60 L1440,0 L0,0 Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function AboutUsHeroBanner() {
    const { t } = useTranslation();

    return (
        <header className="relative bg-secondary h-fit overflow-hidden">
            {/* Text block (same positioning/width spirit as old) */}
            <div className="relative z-10 p-5 bg-secondary text-start max-w-[90vw] mx-auto">
                <h1 className="mt-20 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-primary">
                    {t("aboutScroll.banner.title")}
                </h1>
                <p className="mt-4 text-base text-primary sm:text-lg text-primary/90">
                    {t("aboutScroll.banner.subtitle")}
                </p>
            </div>

            {/* Image band with cover background + NEW top wave over it */}
            <div
                className="relative grid place-items-center px-6 py-70 bg-center bg-cover"
                style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            >
                {/* Different top wave, rendered OVER the image like the old one */}
                <AboutTopWave className="text-secondary absolute z-20 scale-x-[-1]" />
            </div>

            {/* Bottom wave stays as your shared component */}
            <BottomWave />
        </header>
    );
}
