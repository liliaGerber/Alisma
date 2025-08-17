'use client';
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

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

// Shared animation variants
const fadeUp: Variants = {
    hidden: { opacity: 0, x: 0, y: 24 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeFromLeft: Variants = {
    hidden: { opacity: 0, x: -28, y: 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeFromRight: Variants = {
    hidden: { opacity: 0, x: 28, y: 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Chapter type
interface Chapter {
    id: string;
    title: string;
    body: string;
    image?: string; // optional
}

// (content moved to i18n via useTranslation)

// Small helper to animate on view
function InViewSection({
                           children,
                           className = "",
                           from = "left",
                       }: {
    children: React.ReactNode;
    className?: string;
    from?: "left" | "right" | "up";
}) {
    const prefersReduced = useReducedMotion();

    let variants = fadeFromLeft;
    if (from === "right") variants = fadeFromRight;
    if (from === "up") variants = fadeUp;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10% 0px -10% 0px", amount: 0.5 }}
            variants={variants}
            className={className}
            transition={prefersReduced ? { duration: 1} : undefined}
        >
            {children}
        </motion.div>
    );
}

function ChapterBlock({ chapter, index }: { chapter: Chapter; index: number }) {
    const { t } = useTranslation();
    const isEven = index % 2 === 0;
    const from = isEven ? "left" as const : "right" as const;
    const nextIsEven = (index + 1) % 2 === 0;

    return (
        <section
            className={`relative isolate w-full ${ index === 0 ? "pt-28 md:pt-40" : "" } ${isEven ? "bg-primary text-secondary" : "bg-secondary text-primary"}`}
                aria-labelledby={`${chapter.id}-title`}
                >
                <div className="mx-auto max-w-6xl pt-15 px-5 md:px-8">
                <div className={`grid items-center gap-10 md:gap-14 ${chapter.image ? "md:grid-cols-12" : "md:grid-cols-1"}`}>
            {chapter.image && (
                <InViewSection
                from={from}
            className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}
        >
            <div className="mx-auto w-56 md:w-72 lg:w-80">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={chapter.image}
                        alt=""
                        className="h-auto min-h-[250px] w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </InViewSection>
    )}

    <InViewSection
        from="up"
        className={`${chapter.image ? "md:col-span-7" : "md:col-span-10"} ${ isEven ? "md:order-2 " : "md:order-1 " } w-fit mx-auto`}
            >
            <h2
            id={`${chapter.id}-title`
        }
            className={`${isEven? "text-secondary" : "text-primary"} text-3xl font-extrabold tracking-tight md:text-4xl`}
            >
        {chapter.title}
            </h2>
            <p className={`${isEven? "text-secondary" : "text-primary"} mt-4 text-lg leading-relaxed md:text-xl`}>
        {chapter.body}
</p>

    {chapter.id === "cta" && (
        <div className="mt-6 flex flex-wrap gap-3">
            <a
                href="#join"
                className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-secondary/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
            >
                {t("aboutScroll.chapters.cta.buttons.join")}
            </a>
            <a
                href="#contact"
                className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-secondary/20 transition hover:ring-secondary/40"
                style={{ color: "var(--secondary)" }}
            >
                {t("aboutScroll.chapters.cta.buttons.contact")}
            </a>
        </div>
    )}
</InViewSection>
</div>
</div>

    {/* Subtle wave separator between chapters */}
    <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        className="pointer-events-none mt-15 block h-12  w-full md:h-16" style={{ color: nextIsEven ? 'var(--primary)' : 'var(--secondary)' }}
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
    const { t } = useTranslation();

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
            <section className="relative isolate overflow-hidden bg-secondary px-6 py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:gap-10"
                >
                    <div className="order-2 max-w-3xl md:order-1">
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
                            {t("aboutScroll.banner.title")}
                        </h1>
                        <p className="mt-4 text-lg text-primary/90 md:text-xl">
                            {t("aboutScroll.banner.subtitle")}
                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="mx-auto w-40 md:w-52 lg:w-60">
                            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/15">
                                <img src="/news/HTLGirlsEvent.jpeg" alt="" className="h-auto w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* slanted bottom edge using an SVG */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 1440 120"
                    className="pointer-events-none absolute bottom-0 left-0 right-0 block h-12 w-full text-secondary md:h-16"
                    preserveAspectRatio="none"
                >
                    <path d="M0,80 C360,160 1080,0 1440,90 L1440,160 L0,160 Z" fill="var(--primary)" />
                </svg>
            </section>

            {/* Chapters */}
            {CHAPTERS.map((c, i) => (
                <ChapterBlock key={c.id} chapter={c} index={i} />
            ))}
        </div>
    );
}
