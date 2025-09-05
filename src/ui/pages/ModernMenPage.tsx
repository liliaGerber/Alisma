import HtlGirlsBanner from "@/ui/sections/HtlGirls/HtlGirlsBanner";
import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import React from "react";
import {useTranslation} from "react-i18next";
import type {Chapter} from "@/types/Chapter";
import ModernMenHero from "@/ui/sections/ModernMenHero";
import ListBlock from "../components/generics/ListBlock";

export default function ModernMenPage() {
    const {t} = useTranslation();
    const arr = (key: string) => t(key, { returnObjects: true }) as string[];

    const primary = "bg-primary text-modernmen";
    const secondary = "bg-modernmen text-primary";

   return (
        <>
            <ModernMenHero/>
            <main className="w-full">

                {/* WHY (Fließtext → Chapter) */}
                <ChapterBlock
                    chapter={{
                        id: "why",
                        title: t("modernMan.chapters.why.title"),
                        body: t("modernMan.chapters.why.body"),
                    }}
                    index={0}
                    primary={primary}
                    secondary={secondary}
                />

                {/* GOALS (jetzt Fließtext → Chapter) */}
                <ChapterBlock
                    chapter={{
                        id: "goals",
                        title: t("modernMan.chapters.goals.title"),
                        body: t("modernMan.chapters.goals.body"),
                    }}
                    index={1}
                    primary={primary}
                    secondary={secondary}
                />

{/*                 MODULES (Liste weiterhin sinnvoll → ListBlock)
                <ListBlock
                    index={2}
                    title={t("modernMan.chapters.modules.title")}
                    subtitle={t("modernMan.chapters.modules.intro")}
                    items={arr("modernMan.chapters.modules.list")}
                    primary={primary}
                    secondary={secondary}
                />*/}

                {/* FORMATS (Fließtext + Hinweis → Chapter) */}
                <ChapterBlock
                    chapter={{
                        id: "formats",
                        title: t("modernMan.chapters.formats.title"),
                        body: t("modernMan.chapters.formats.body"),
                    }}
                    index={2}
                    primary={primary}
                    secondary={secondary}
                />

{/*                 DIDACTICS (Fließtext → Chapter)
                <ChapterBlock
                    chapter={{
                        id: "didactics",
                        title: t("modernMan.chapters.didactics.title"),
                        body: t("modernMan.chapters.didactics.body"),
                    }}
                    index={4}
                    primary={primary}
                    secondary={secondary}
                />

                 SAFEGUARDING (Fließtext → Chapter)
                <ChapterBlock
                    chapter={{
                        id: "safeguarding",
                        title: t("modernMan.chapters.safeguarding.title"),
                        body: t("modernMan.chapters.safeguarding.body"),
                    }}
                    index={5}
                    primary={primary}
                    secondary={secondary}
                />*/}

{/*                 IMPACT (Liste der KPIs bleibt → ListBlock, Body als Subtitle)
                <ListBlock
                    index={3}
                    title={t("modernMan.chapters.impact.title")}
                    subtitle={t("modernMan.chapters.impact.body")}
                    items={arr("modernMan.chapters.impact.list")}
                    primary={primary}
                    secondary={secondary}
                />*/}

                {/* TARGET GROUPS (Fließtext → Chapter) */}
                <ChapterBlock
                    chapter={{
                        id: "targetGroups",
                        title: t("modernMan.chapters.targetGroups.title"),
                        body: t("modernMan.chapters.targetGroups.body"),
                    }}
                    index={5}
                    primary={primary}
                    secondary={secondary}
                />

                {/* COLLABORATION (Fließtext → Chapter) */}
                <ChapterBlock
                    chapter={{
                        id: "collaboration",
                        title: t("modernMan.chapters.collaboration.title"),
                        body: t("modernMan.chapters.collaboration.body"),
                    }}
                    index={6}
                    primary={primary}
                    secondary={secondary}
                />

                {/* CTA (Fließtext + Buttons → Chapter) */}
                <ChapterBlock
                    chapter={{
                        id: "cta",
                        title: t("modernMan.chapters.cta.title"),
                        body: t("modernMan.chapters.cta.body"),
                        buttons: (
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("modernMan.chapters.cta.buttons.0")}
                                </a>
                                <a
                                    href="#schools"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("modernMan.chapters.cta.buttons.1")}
                                </a>
                                <a
                                    href="#partners"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("modernMan.chapters.cta.buttons.2")}
                                </a>
                            </div>
                        ),
                    }}
                    index={7}
                    primary={primary}
                    secondary={secondary}
                />

{/*                 FAQ (Liste bleibt sinnvoll → ListBlock)
                <ListBlock
                    index={10}
                    title={t("modernMan.chapters.faq.title")}
                    items={arr("modernMan.chapters.faq.list")}
                    primary={primary}
                    secondary={secondary}
                />*/}
            </main>
        </>
    )
}