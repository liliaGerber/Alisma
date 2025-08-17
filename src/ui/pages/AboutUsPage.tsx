import React from "react";
import {motion, useReducedMotion} from "framer-motion";
import type {Variants} from "framer-motion";
import {useTranslation} from "react-i18next";
import InViewSection from "@/ui/components/generics/InViewSection";
import AboutUsHeroBanner from "@/ui/sections/AboutUsPage/AboutUsHeroBanner";

/**
 * AboutScrollStory
 * ----------------------------------------------------
 * A scroll-driven, chapter-based hero for ALISMA.
 * - Framer Motion animations on scroll
 * - Alternating layouts (image optional)
 * - Smaller imagery to keep focus on copy
 * - Clean, minimal Tailwind styling
 * ----------------------------------------------------
 * Usage:
 * <AboutScrollStory />
 * ----------------------------------------------------
 */


interface Chapter {
    id: string;
    title: string;
    body: string;
    image?: string;
}


function ChapterBlock({chapter, index}: { chapter: Chapter; index: number }) {
    const {t} = useTranslation();
    const isEven = index % 2 === 0;
    const from = isEven ? "flyUpImage" as const : "flyUpImage" as const;
    const nextIsEven = (index + 1) % 2 === 0;

    return (
        <section
            className={`relative isolate w-full overflow-hidden ${isEven ? "bg-primary text-secondary" : "bg-secondary text-primary"}`}
            aria-labelledby={`${chapter.id}-title`}
        >
            <div
                className={`grid gap-10 lg:gap-15 lg:w-[90%] lg:max-w-6xl pt-15 px-5 md:px-8 ${chapter.image ? "lg:grid-cols-12" : "lg:grid-cols-1"}`}>
                {chapter.image && (
                    <InViewSection
                        preset={from}
                        className={`lg:col-span-5 col-span-full w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                        <div className="mx-auto w-70 md:w-80 lg:w-72">
                            <img
                                src={chapter.image}
                                alt=""
                                className="h-auto min-h-[250px] w-full  overflow-hidden rounded-2xl object-cover"
                                loading="lazy"
                            />
                        </div>
                    </InViewSection>
                )}

                <InViewSection
                    preset="flyUpTitle"
                    className={`${chapter.image ? "lg:col-span-7" : "lg:col-span-10"} ${isEven ? "lg:order-2 " : "lg:order-1 "} w-full h-fit mx-auto`}
                >
                    <h2
                        id={`${chapter.id}-title`
                        }
                        className={`${isEven ? "text-secondary" : "text-primary"} text-3xl font-extrabold tracking-tight md:text-4xl`}
                    >
                        {chapter.title}
                    </h2>
                    <p className={`${isEven ? "text-secondary" : "text-primary"} mt-4 text-lg leading-relaxed md:text-xl`}>
                        {chapter.body}
                    </p>

                    {chapter.id === "cta" && (
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="/onboarding"
                                className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-secondary/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                style={{background: "var(--secondary)", color: "var(--primary)"}}
                            >
                                {t("aboutScroll.chapters.cta.buttons.join")}
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-secondary/20 transition hover:ring-secondary/40"
                                style={{color: "var(--secondary)"}}
                            >
                                {t("aboutScroll.chapters.cta.buttons.contact")}
                            </a>
                        </div>
                    )}
                </InViewSection>
            </div>

            {/* Subtle wave separator between chapters */}
            <svg
                aria-hidden="true"
                viewBox="0 0 1440 120"
                className="pointer-events-none mt-15 block h-12  w-full md:h-16"
                style={{color: nextIsEven ? 'var(--primary)' : 'var(--secondary)'}}
                preserveAspectRatio="none"
            >
                <path
                    d="M0,64 C240,120 480,0 720,64 C960,128 1200,48 1440,88 L1440,160 L0,160 Z"
                    fill="currentColor"
                />
            </svg>
        </section>
    );
}

export default function AboutScrollStory() {
    const {t} = useTranslation();

    const CHAPTERS: Chapter[] = [
        {
            id: "intro",
            title: t("aboutScroll.chapters.intro.title"),
            body: t("aboutScroll.chapters.intro.body"),
            image: "/courses/leadership.png",
        },
        {
            id: "mission",
            title: t("aboutScroll.chapters.mission.title"),
            body: t("aboutScroll.chapters.mission.body"),
            image: "/courses/leadership.png",
        },
        {
            id: "programs",
            title: t("aboutScroll.chapters.programs.title"),
            body: t("aboutScroll.chapters.programs.body"),
            image: "/courses/leadership.png",
        },
        {
            id: "impact",
            title: t("aboutScroll.chapters.impact.title"),
            body: t("aboutScroll.chapters.impact.body"),
            image: "/courses/leadership.png",
        },
        {
            id: "together",
            title: t("aboutScroll.chapters.together.title"),
            body: t("aboutScroll.chapters.together.body"),
            image: "/courses/leadership.png",
        },
        {
            id: "cta",
            title: t("aboutScroll.chapters.cta.title"),
            body: t("aboutScroll.chapters.cta.body"),
        },
    ];
    return (
        <div className="bg-primary text-secondary">
            {/* Preamble banner with small photo + headline to set the tone */}
            <AboutUsHeroBanner/>

            {/* Chapters */}
            {CHAPTERS.map((c, i) => (
                <ChapterBlock key={c.id} chapter={c} index={i}/>
            ))}
        </div>
    );
}
