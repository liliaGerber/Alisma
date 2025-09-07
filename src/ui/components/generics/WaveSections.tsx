import {useTranslation} from "react-i18next";
import InViewSection from "@/ui/components/generics/InViewSection";
import React from "react";
import {Link} from "react-router-dom";

export interface Chapter {
    id: string;
    title: string;
    body: string;
    image?: string;
}


export default function WaveSections({chapter, index}: { chapter: Chapter; index: number }) {
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
                            <Link
                                to="/onboarding"
                                className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-secondary/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                style={{background: "var(--secondary)", color: "var(--primary)"}}
                            >
                                {t("aboutScroll.chapters.cta.buttons.join")}
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-secondary/20 transition hover:ring-secondary/40"
                                style={{color: "var(--secondary)"}}
                            >
                                {t("aboutScroll.chapters.cta.buttons.contact")}
                            </Link>
                        </div>
                    )}
                </InViewSection>
            </div>

            <svg
                aria-hidden="true"
                viewBox="0 0 1440 180"
                preserveAspectRatio="none"
                className="pointer-events-none block w-full h-24 md:h-32 mt-15"
                style={{ color: nextIsEven ? "var(--primary)" : "var(--secondary)" }}
            >
                <path
                    d="
      M0,78
      C160,18 320,142 480,98
      C640,54 800,-8 960,46
      C1120,112 1280,156 1440,88
      L1440,220 L0,220 Z
    "
                    fill="currentColor"
                />
            </svg>



        </section>
    );
}