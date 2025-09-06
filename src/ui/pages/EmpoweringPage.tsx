import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import React from "react";
import {useTranslation} from "react-i18next";
import EmpoweringHeroBanner from "@/ui/sections/EmpoweringHeroBanner";
import ListBlock from "@/ui/components/generics/ListBlock";

export default function EmpoweringPage() {
    const {t} = useTranslation();
    const arr = (key: string) => t(key, {returnObjects: true}) as string[];

    const primary = "bg-primary text-empowering-600";
    const secondary = "bg-empowering text-primary";
    return (
        <>
            <EmpoweringHeroBanner/>
            <main className={"w-full"}>
                {/* WHAT */}
                <ChapterBlock
                    chapter={{
                        id: "what",
                        title: t("empowerING.chapters.what.title"),
                        body: t("empowerING.chapters.what.body"),
                    }}
                    index={0}
                    primary={primary}
                    secondary={secondary}
                />

                {/* WHY */}
                <ChapterBlock
                    chapter={{
                        id: "why",
                        title: t("empowerING.chapters.why.title"),
                        body: t("empowerING.chapters.why.body"),
                    }}
                    index={1}
                    primary={primary}
                    secondary={secondary}
                />

                {/* HOW (only list on this page) */}
                <ListBlock
                    index={2}
                    title={t("empowerING.chapters.how.title")}
                    subtitle={t("empowerING.chapters.how.intro")}
                    items={arr("empowerING.chapters.how.list")}
                    primary={primary}
                    secondary={secondary}
                />

                {/* WHO */}
                <ChapterBlock
                    chapter={{
                        id: "who",
                        title: t("empowerING.chapters.who.title"),
                        body: t("empowerING.chapters.who.body"),
                    }}
                    index={3}
                    primary={primary}
                    secondary={secondary}
                />

                {/* STORIES */}
                <ChapterBlock
                    chapter={{
                        id: "stories",
                        title: t("empowerING.chapters.stories.title"),
                        body: t("empowerING.chapters.stories.body"),
                    }}
                    index={4}
                    primary={primary}
                    secondary={secondary}
                />

                {/* CTA with buttons */}
                <ChapterBlock
                    chapter={{
                        id: "cta",
                        title: t("empowerING.chapters.cta.title"),
                        body: t("empowerING.chapters.cta.body"),
                        buttons: (
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("empowerING.chapters.cta.buttons.0")}
                                </a>
                                <a
                                    href="#updates"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("empowerING.chapters.cta.buttons.1")}
                                </a>
                            </div>
                        ),
                    }}
                    index={5}
                    primary={primary}
                    secondary={secondary}
                />

                {/* PARTNERS */}
                <ChapterBlock
                    chapter={{
                        id: "partners",
                        title: t("empowerING.chapters.partners.title"),
                        body: t("empowerING.chapters.partners.body"),
                    }}
                    index={6}
                    primary={primary}
                    secondary={secondary}
                />

                {/* CONTACT */}
                <ChapterBlock
                    chapter={{
                        id: "contact",
                        title: t("empowerING.chapters.contact.title"),
                        body: t("empowerING.chapters.contact.body"),
                        buttons: (
                            <a
                                href="#contact-form"
                                className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                            >
                                {t("empowerING.chapters.contact.button")}
                            </a>
                        ),
                    }}
                    index={7}
                    primary={primary}
                    secondary={secondary}
                />
            </main>
        </>
    )
}