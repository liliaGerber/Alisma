'use client';
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import type {Chapter} from "@/types/Chapter.ts"
import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import AboutUsHeroBanner from "@/ui/sections/AboutUsHeroBanner";
import JoinSectionALISMA from "@/ui/sections/LandingPage/joinmember";


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
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const CHAPTERS: Chapter[] = [
        {
            id: "intro",
            title: t("aboutScroll.chapters.intro.title"),
            body: t("aboutScroll.chapters.intro.body"),
        },
        {
            id: "mission",
            title: t("aboutScroll.chapters.mission.title"),
            body: t("aboutScroll.chapters.mission.body"),
        },
        {
            id: "programs",
            title: t("aboutScroll.chapters.programs.title"),
            body: t("aboutScroll.chapters.programs.body"),
        },
        {
            id: "impact",
            title: t("aboutScroll.chapters.impact.title"),
            body: t("aboutScroll.chapters.impact.body"),
        },
        {
            id: "together",
            title: t("aboutScroll.chapters.together.title"),
            body: t("aboutScroll.chapters.together.body"),
        },
    ];
    return (
        <div className="bg-primary text-secondary">
            <AboutUsHeroBanner/>

            {/* Chapters */}
            {CHAPTERS.map((c, i) => (
                <ChapterBlock key={c.id} chapter={c} index={i}/>
            ))}
            <JoinSectionALISMA/>

        </div>
    );
}
