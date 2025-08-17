// CommunityHeroBanner.tsx  (uses the CarouselWrapper above)
"use client"

import * as React from "react"
import { Button } from "@/ui/components/shadcn/button"
import { CarouselWrapper } from "@/ui/components/generics/CarouselWrapper"
import { BottomWave } from "@/ui/components/generics/Waves"

type Slide = {
    src: string
    alt: string
    title: string
    subtitle?: string
    ctaLabel?: string
    ctaHref?: string
}

type HeroCarouselProps = {
    slides: Slide[]
    intervalMs?: number
    transitionMs?: number
    className?: string
}

export default function CommunityHeroBanner({
                                                slides,
                                                intervalMs = 7000,
                                                transitionMs = 50,
                                                className = "",
                                            }: HeroCarouselProps) {
    const items = React.useMemo(
        () =>
            slides.map((s, idx) => (
                <figure key={idx} className="relative w-screen">
                    <img
                        src={s.src}
                        alt={s.alt}
                        className="h-full w-screen object-cover p-0"
                        loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <figcaption className="absolute bottom-30 lg:bottom-70 left-0 right-0 p-6 md:p-10">
                        <div className="max-w-3xl drop-shadow">
                            <h1 className="text-2xl md:text-4xl text-primary font-extrabold tracking-tight">
                                {s.title}
                            </h1>
                            {s.subtitle && (
                                <p className="mt-2 text-base md:text-lg text-primary-500">{s.subtitle}</p>
                            )}
                            {s.ctaHref && s.ctaLabel && (
                                <div className="mt-4">
                                    <Button asChild size="lg" className="shadow-lg text-secondary">
                                        <a href={s.ctaHref}>{s.ctaLabel}</a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </figcaption>
                </figure>
            )),
        [slides]
    )

    return (
        <div className={`relative ${className}`}>
            <CarouselWrapper
                items={items}
                intervalMs={intervalMs}
                transitionMs={transitionMs}
                align="center"
                className="w-screen max-h-[115vh] overflow-hidden"
                itemsCss="min-w-screen"
            />
            <BottomWave className={"text-primary max-h-17 lg:max-h-30 absolute bottom-[59px] lg:bottom-0 "} />
        </div>
    )
}
