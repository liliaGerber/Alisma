import React from "react";
import type {Variants} from "framer-motion";
import {useTranslation} from "react-i18next";
import InViewSection from "@/ui/components/generics/InViewSection";
import AboutUsHeroBanner from "@/ui/sections/AboutUsPage/AboutUsHeroBanner";
import WaveSections, {Chapter} from "@/ui/components/generics/WaveSections";

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
                <WaveSections key={c.id} chapter={c} index={i}/>
            ))}
        </div>
    );
}
