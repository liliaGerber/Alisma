import React from "react";
import { useTranslation } from "react-i18next";
import ModernMenHero from "@/ui/sections/ModernMenHero";
import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import ListBlock from "@/ui/components/generics/ListBlock";
import ContactCtaSection from "@/ui/sections/ContactRedirectSection";
import KushtrimSection from "@/ui/sections/KushtrimSection";
import mainInformation from "@/assets/data/mainInformation.json";

export default function ModernMenPage() {
    const { t } = useTranslation();
    const arr = (key: string) => t(key, { returnObjects: true }) as string[];

    const primary = "bg-primary text-modernmen-600";
    const secondary = "bg-modernmen text-primary";

    return (
        <>
            <ModernMenHero />
            <main className="w-full">
                {/* WHY */}
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

                {/* PROBLEM */}
                <ChapterBlock
                    chapter={{
                        id: "problem",
                        title: t("modernMan.chapters.problem.title"),
                        body: t("modernMan.chapters.problem.body"),
                    }}
                    index={1}
                    primary={primary}
                    secondary={secondary}
                />

                {/* GOALS */}
                <ListBlock
                    index={2}
                    title={t("modernMan.chapters.goals.title")}
                    subtitle={t("modernMan.chapters.goals.body")}
                    items={arr("modernMan.chapters.goals.list")}
                    primary={primary}
                    secondary={secondary}
                />

                {/* ACTION (konkreter Ansatz) */}
                <ChapterBlock
                    chapter={{
                        id: "action",
                        title: t("modernMan.chapters.action.title"),
                        body: t("modernMan.chapters.action.body"),
                    }}
                    index={3}
                    primary={primary}
                    secondary={secondary}
                />

                {/* FORMATS */}
                <ChapterBlock
                    chapter={{
                        id: "formats",
                        title: t("modernMan.chapters.formats.title"),
                        body: t("modernMan.chapters.formats.body"),
                    }}
                    index={4}
                    primary={primary}
                    secondary={secondary}
                />

                {/* MODULES */}
                <ListBlock
                    index={5}
                    title={t("modernMan.chapters.modules.title")}
                    subtitle={t("modernMan.chapters.modules.body")}
                    items={arr("modernMan.chapters.modules.list")}
                    primary={primary}
                    secondary={secondary}
                />

                {/* DIDACTICS */}
                <ListBlock
                    index={6}
                    title={t("modernMan.chapters.didactics.title")}
                    subtitle={t("modernMan.chapters.didactics.body")}
                    items={arr("modernMan.chapters.didactics.list")}
                    primary={primary}
                    secondary={secondary}
                />

                {/* FIXED: KUSHTRIM */}
                <KushtrimSection />


                {/* TARGET GROUPS */}
                <ChapterBlock
                    chapter={{
                        id: "targetGroups",
                        title: t("modernMan.chapters.targetGroups.title"),
                        body: t("modernMan.chapters.targetGroups.body"),
                    }}
                    index={6}
                    primary={primary}
                    secondary={secondary}
                />

                {/* CTA */}
                <ContactCtaSection
                    newsletterHref={"/newsletter"}
                    whatsappHref={mainInformation.whatsapp_modernmen_link}
                    containerTheme={"bg-modernmen text-primary"}
                    primaryBtnClass={"bg-primary text-modernmen"}
                />
            </main>
        </>
    );
}
