import {useTranslation} from "react-i18next";
import type {Chapter} from "@/types/Chapter.ts"
import {memo} from "react";
import InViewSection from "@/ui/components/generics/InViewSection";


type ChapterBlockProps = {
    chapter: Chapter;
    index: number;
    /** e.g. "bg-modern text-accent" */
    primary?: string;
    /** e.g. "bg-accent text-modern" */
    secondary?: string;
    fromWhenImage?: "left" | "right";
    className?: string;
    wavehidden?: boolean;
};

function pickThemeParts(theme: string) {
    const tokens = theme.trim().split(/\s+/);
    const bg = tokens.find((c) => c.startsWith("bg-")) ?? "";
    const text = tokens.find((c) => c.startsWith("text-")) ?? "";
    const svgTextFromBg = bg ? bg.replace(/^bg-/, "text-") : "";
    return {bg, text, svgTextFromBg};
}

function ChapterBlock({
                          chapter,
                          index,
                          primary = "bg-primary text-secondary",
                          secondary = "bg-secondary text-primary",
                          fromWhenImage,
                          className = "",
                          wavehidden = false,
                      }: ChapterBlockProps) {
    const {t} = useTranslation();
    const isEven = index % 2 === 0;
    const nextIsEven = (index + 1) % 2 === 0;

    const currentTheme = isEven ? primary : secondary;
    const nextTheme = nextIsEven ? primary : secondary;

    const {bg: bgClass, text: textClass} = pickThemeParts(currentTheme);
    const {svgTextFromBg: nextWaveTextClass} = pickThemeParts(nextTheme);

    const from = fromWhenImage ?? (isEven ? "flyLeft" : "flyRight");

    return (
        <section
            className={`relative isolate w-full ${bgClass} ${className}`}
            aria-labelledby={`${chapter.id}-title`}
        >
            <div className="mx-auto max-w-6xl pt-20 pb-10 justify-center px-5 md:px-8">
                <div
                    className={`grid items-center gap-10 md:gap-14 ${chapter.image ? "md:grid-cols-12" : "md:grid-cols-1"}`}>
                    {chapter.image && (
                        // @ts-ignore
                        <InViewSection preset={from} className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                            <div className="mx-auto w-56 md:w-72 lg:w-80">
                                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={chapter.image}
                                        alt={chapter.title}
                                        className="h-auto min-h-[250px] w-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                        </InViewSection>
                    )}

                    <InViewSection
                        preset="flyUpTitle"
                        className={`${chapter.image ? "md:col-span-7" : "md:col-span-10"} ${
                            isEven ? "md:order-2" : "md:order-1"
                        } w-fit mx-auto`}
                    >
                        {/* a) ensure text color is explicitly applied */}
                        <h2
                            id={`${chapter.id}-title`}
                            className={`${textClass} text-3xl font-extrabold tracking-tight md:text-4xl`}
                        >
                            {chapter.title}
                        </h2>

                        <p className={`${textClass} mt-4 text-lg leading-relaxed md:text-xl`}>{chapter.body}</p>

                        {/* Provided buttons */}
                        {chapter.buttons &&
                            <div className={`mt-6 flex flex-wrap gap-3 ${textClass} w-fit`}>{chapter.buttons}</div>}

                        {/* Back-compat default CTA */}
                        {!chapter.buttons && chapter.id === "cta" && (
                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="#join"
                                    className={`${textClass} inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                                >
                                    {t("aboutScroll.chapters.cta.buttons.join")}
                                </a>
                                <a
                                    href="#contact"
                                    className={`${textClass} inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/20 transition hover:ring-black/40`}
                                >
                                    {t("aboutScroll.chapters.cta.buttons.contact")}
                                </a>
                            </div>
                        )}
                    </InViewSection>
                </div>
            </div>

            <svg
                aria-hidden="true"
                viewBox="0 0 1440 160"
                className={`pointer-events-none mt-15 h-20 w-full md:h-24 ${wavehidden ? 'hidden' : 'block'} ${nextWaveTextClass}`}
                preserveAspectRatio="none"
            >
                <path
                    d="M0,96 C180,190 360,0 540,100 C720,200 900,20 1080,120 C1260,220 1350,60 1440,140 L1440,200 L0,200 Z"
                    fill="currentColor"
                />
            </svg>
        </section>
    );
}

export default memo(ChapterBlock);

