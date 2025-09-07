import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import EmpoweringHeroBanner from "@/ui/sections/EmpoweringHeroBanner";
import ListBlock from "@/ui/components/generics/ListBlock";
import ContactCtaSection from "@/ui/sections/ContactRedirectSection";
import mainInformation from "@/assets/data/mainInformation.json"
import { Link } from "react-router-dom";


export default function empoweringPage() {
    const {t} = useTranslation();
    const arr = (key: string) => t(key, {returnObjects: true}) as string[];
    useEffect(() => {
        window.scroll(0,0)
    }, []);
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
                        title: t("empowering.chapters.what.title"),
                        body: t("empowering.chapters.what.body"),
                    }}
                    index={0}
                    primary={primary}
                    secondary={secondary}
                />

                {/* WHY */}
                <ChapterBlock
                    chapter={{
                        id: "why",
                        title: t("empowering.chapters.why.title"),
                        body: t("empowering.chapters.why.body"),
                    }}
                    index={1}
                    primary={primary}
                    secondary={secondary}
                />

                {/* HOW (only list on this page) */}
                <ListBlock
                    index={2}
                    title={t("empowering.chapters.how.title")}
                    subtitle={t("empowering.chapters.how.intro")}
                    items={arr("empowering.chapters.how.list")}
                    primary={primary}
                    secondary={secondary}
                />

                {/* WHO */}
                <ChapterBlock
                    chapter={{
                        id: "who",
                        title: t("empowering.chapters.who.title"),
                        body: t("empowering.chapters.who.body"),
                    }}
                    index={3}
                    primary={primary}
                    secondary={secondary}
                />

                {/* STORIES */}
                <ChapterBlock
                    chapter={{
                        id: "stories",
                        title: t("empowering.chapters.stories.title"),
                        body: t("empowering.chapters.stories.body"),
                    }}
                    index={4}
                    primary={primary}
                    secondary={secondary}
                />

                {/* CTA with buttons */}
                <ChapterBlock
                    chapter={{
                        id: "cta",
                        title: t("empowering.chapters.cta.title"),
                        body: t("empowering.chapters.cta.body"),
                        buttons: (
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="mailto:absolventinnen@alisma.at"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("empowering.chapters.cta.buttons.0")}
                                </Link>
                                <Link
                                    to="/newsletter"
                                    className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("empowering.chapters.cta.buttons.1")}
                                </Link>
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
                        title: t("empowering.chapters.partners.title"),
                        body: t("empowering.chapters.partners.body"),
                    }}
                    index={6}
                    primary={primary}
                    secondary={secondary}
                />

                <ContactCtaSection newsletterHref={"/newsletter"}
                                   whatsappHref={mainInformation.whatsapp_empowering_link}
                                   containerTheme={"bg-empowering text-primary"}
                                   primaryBtnClass={"bg-primary text-empowering"}/>
            </main>
        </>
    )
}