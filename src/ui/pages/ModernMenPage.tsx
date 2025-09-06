import HtlGirlsBanner from "@/ui/sections/HtlGirls/HtlGirlsBanner";
import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import React from "react";
import {useTranslation} from "react-i18next";
import type {Chapter} from "@/types/Chapter";
import ModernMenHero from "@/ui/sections/ModernMenHero";
import ListBlock from "../components/generics/ListBlock";
import ContactCtaSection from "@/ui/sections/ContactRedirectSection";
import mainInformation from "@/assets/data/mainInformation.json"

export default function ModernMenPage() {
    const {t} = useTranslation();
    const arr = (key: string) => t(key, { returnObjects: true }) as string[];

    const primary = "bg-primary text-modernmen-600";
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
                <ListBlock
                    index={1}
                    title={t("modernMan.chapters.goals.title")}
                    subtitle={t("modernMan.chapters.goals.body")}
                    items={arr("modernMan.chapters.goals.list")}
                    primary={primary}
                    secondary={secondary}
                />

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

                <ContactCtaSection newsletterHref={"/newsletter"} whatsappHref={mainInformation.whatsapp_modernmen_link} containerTheme={"bg-modernmen text-primary"} primaryBtnClass={"bg-primary text-modernmen"}/>




            </main>
        </>
    )
}