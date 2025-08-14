// HeroCarousel.tsx
import * as React from "react"
import { Button } from "@/ui/components/shadcn/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/ui/components/shadcn/carousel"

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
    delayMs?: number
    className?: string
}

export default function CommunityHeroBanner({
                                         slides,
                                         delayMs = 5000,
                                         className = "",
                                     }: HeroCarouselProps) {
    const autoplay = React.useRef(
        Autoplay({ delay: delayMs, stopOnInteraction: false })
    )
    const [api, setApi] = React.useState<CarouselApi | null>(null)

    // Optional: announce slide changes for SR users
    const [ariaLive, setAriaLive] = React.useState("off")
    React.useEffect(() => {
        if (!api) return
        const announce = () => setAriaLive(`slide ${api.selectedScrollSnap() + 1} of ${slides.length}`)
        api.on("select", announce)
        announce()
        return () => api.off("select", announce)
    }, [api, slides.length])

    return (
        <div className={`relative ${className}`}>
            <Carousel
                setApi={setApi}
                plugins={[autoplay.current]}
                className="w-full"
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <CarouselContent>
                    {slides.map((s, idx) => (
                        <CarouselItem key={idx} className="relative">
                            <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                                {/* Image */}
                                <img
                                    src={s.src}
                                    alt={s.alt}
                                    className="h-full w-full object-cover"
                                    loading={idx === 0 ? "eager" : "lazy"}
                                />
                                {/* Gradient overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                {/* Text overlay */}
                                <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                    <div className="max-w-3xl text-white drop-shadow">
                                        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                                            {s.title}
                                        </h1>
                                        {s.subtitle && (
                                            <p className="mt-2 text-base md:text-lg opacity-95">
                                                {s.subtitle}
                                            </p>
                                        )}
                                        {(s.ctaHref && s.ctaLabel) && (
                                            <div className="mt-4">
                                                <Button asChild size="lg" className="shadow-lg">
                                                    <a href={s.ctaHref}>{s.ctaLabel}</a>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </figcaption>
                            </figure>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Controls (hidden on very small screens to keep it clean) */}
                <div className="hidden sm:block">
                    <CarouselPrevious className="left-4 bg-black/50 text-white hover:bg-black/70" />
                    <CarouselNext className="right-4 bg-black/50 text-white hover:bg-black/70" />
                </div>
            </Carousel>

            {/* SR-only live region for slide changes */}
            <span aria-live="polite" className="sr-only">{ariaLive}</span>
        </div>
    )
}

/* Example usage:

<HeroCarousel
  delayMs={4500}
  slides={[
    {
      src: "/images/community-1.jpg",
      alt: "Mentorinnen und Schülerinnen im Workshop",
      title: "Community, die dich nach vorne bringt",
      subtitle: "Tritt unserer WhatsApp-Community bei und vernetze dich mit anderen.",
      ctaLabel: "Jetzt beitreten",
      ctaHref: "#whatsapp",
    },
    {
      src: "/images/community-2.jpg",
      alt: "Coding-Session in der Schule",
      title: "Lerne, teile, wachse",
      subtitle: "Wissen austauschen und gemeinsam Chancen eröffnen.",
      ctaLabel: "Mehr erfahren",
      ctaHref: "#about",
    },
    {
      src: "/images/community-3.jpg",
      alt: "Event mit Speakerin",
      title: "Events & Role Models",
      subtitle: "Lass dich inspirieren und werde selbst Role Model.",
      ctaLabel: "Termine ansehen",
      ctaHref: "#events",
    },
  ]}
/>

Dependencies expected:
- shadcn/ui carousel installed (generates `@/components/ui/carousel`)
- `embla-carousel-autoplay` installed for autoplay behavior:
    pnpm add embla-carousel-autoplay
*/
