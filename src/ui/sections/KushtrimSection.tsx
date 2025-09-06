import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {resolveColor, resolveColorBG, resolveColorText} from "@/config/ThemeProvider";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";

export default function KushtrimCompactSection() {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    // e.g. "bg-modernmen"
    const accentBG = resolveColorBG(pathname);
    const accentTX = resolveColor(pathname).colour ;
    console.log(accentTX)

    const quotes =
        (t("modernMan.kushtrim.quotes", { returnObjects: true }) as string[]) || [];
    const quote = quotes[0] || "";

    return (
        <>
        <section id="kushtrim" aria-labelledby="kushtrim-title" className={`w-full py-10 sm:py-12 ${accentBG}`}>
            <div className="mx-auto  px-6">
                {/* Accent background + primary text */}
                <div className={`rounded-xl ${accentBG} text-primary  p-4 sm:p-6 `}>
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                        {/* Image */}
                        <div className="w-full lg:w-60 xl:w-72 overflow-hidden rounded-xl bg-black/10 shrink-0">
                            <img
                                src={"/team/Portrait_Kushtrim.jpeg"}
                                alt={t("modernMan.kushtrim.imageAlt")}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Text block */}
                        <div className="flex-1 min-w-0">
                            {/* Title + subtitle */}
                            <header className="mb-3">
                                <h2 id="kushtrim-title" className="text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
                                    {t("modernMan.kushtrim.sectionTitle")}
                                </h2>
                                <p className="mt-1 text-sm sm:text-base text-primary/90">
                                    {t("modernMan.kushtrim.subtitle")}
                                </p>
                            </header>

                            {/* Bio rows */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary/90">
                                <span className="font-medium">{t("modernMan.kushtrim.bio.name")}</span>
                                <span>· {t("modernMan.kushtrim.bio.ageCity")}</span>
                            </div>
                            <div className="mt-1 text-sm text-primary/85">
                                <div className="flex items-start gap-2">
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{t("modernMan.kushtrim.bio.origin")}</span>
                                </div>
                                <div className="mt-1 flex items-start gap-2">
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{t("modernMan.kushtrim.bio.context")}</span>
                                </div>
                            </div>

                            {/* One quote only */}
                            {quote && (
                                <blockquote className="mt-4 text-sm sm:text-[0.95rem] leading-relaxed pl-3">
                                    “{quote}”
                                </blockquote>
                            )}

                            {/* About (compact) */}
                            <p className="mt-3 text-[0.95rem] text-primary/90">
                                {t("modernMan.kushtrim.about")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <SectionSeparatorWave className={`text-${accentTX} rotate-180 mt-[-2px]`}/>
    </>
    );
}
