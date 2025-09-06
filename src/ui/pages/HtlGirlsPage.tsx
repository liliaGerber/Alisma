import HtlGirlsBanner from "@/ui/sections/HtlGirls/HtlGirlsBanner";
import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import React from "react";
import {useTranslation} from "react-i18next";
import type {Chapter} from "@/types/Chapter";
import ImpactNumbers from "@/ui/components/ImpactNumbers";
import QuotesSection, {QuoteRef} from "@/ui/sections/QuoteSection";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";
import ContactRedirectSection from "@/ui/sections/ContactRedirectSection";
import ContactCtaSection from "@/ui/sections/ContactRedirectSection";
import JoinSectionALISMA from "@/ui/sections/LandingPage/joinmember";

export default function HtlGirlsPage() {
    const {t} = useTranslation();
    const quotes: QuoteRef[] = [
        {
            textKey: "htlGirlsQuotes.items.0.text",
            authorKey: "htlGirlsQuotes.items.0.author",
            metaKey: "htlGirlsQuotes.items.0.meta",
        },
        {
            textKey: "htlGirlsQuotes.items.1.text",
            authorKey: "htlGirlsQuotes.items.1.author",
            metaKey: "htlGirlsQuotes.items.1.meta",
        },
        {
            textKey: "htlGirlsQuotes.items.2.text",
            authorKey: "htlGirlsQuotes.items.2.author",
            metaKey: "htlGirlsQuotes.items.2.meta",
        },
    ];
    const CHAPTERS: Chapter[] = [
        {
            id: "why",
            title: t("htlgirls.chapters.why.title"),
            body: t("htlgirls.chapters.why.body"),
        },
        {
            id: "offers",
            title: t("htlgirls.chapters.offers.title"),
            body: t("htlgirls.chapters.offers.body"),
            buttons: (
                <a href="/our-projects" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                    {t("htlgirls.chapters.offers.button")}
                </a>
            ),
        },
        {
            id: "impact",
            title: t("htlgirls.chapters.impact.title"),
            body: t("htlgirls.chapters.impact.body"),
        },
        {
            id: "vision",
            title: t("htlgirls.chapters.vision.title"),
            body: t("htlgirls.chapters.vision.body"),
            buttons: (
                <a href="/about" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                    {t("htlgirls.chapters.vision.button")}
                </a>
            ),
        },

    ];    return (
        <>
        <HtlGirlsBanner/>
            {CHAPTERS.map((c, i) => (
                <React.Fragment key={c.id}>
                    {c.id !== "vision" && (
                        <ChapterBlock
                            chapter={c}
                            index={i}
                            primary="bg-primary text-htlgirls"
                            secondary="bg-htlgirls text-primary"
                        />
                    )}
                    {c.id === "impact" && (
                        <>
                            <ImpactNumbers
                                title="Wirkung in Zahlen"
                                subtitle="Kurz und knackig."
                                stats={[
                                    { label: "Teilnehmerinnen", value: 50, suffix: "+" },
                                    { label: "Umfrageteilnahmen", value: 1000, suffix: "+" },
                                    { label: "Schulen erreicht", value: 25, suffix: "+" },
                                    { label: "Diplomarbeiten", value: 18, suffix: "+" },
                                ]}
                                className="bg-htlgirls text-primary"
                            />
                            <SectionSeparatorWave className={`mt-[-2px] text-htlgirls rotate-180`}/>

                        </>


                    )}
                    {c.id === "vision" && (
                        <>
                        <ChapterBlock
                            chapter={c}
                            index={i+1}
                            primary="bg-primary text-htlgirls"
                            secondary="bg-htlgirls text-primary"
                        />
                        <QuotesSection
                            titleKey="htlGirlsQuotes.title"
                            subtitleKey="htlGirlsQuotes.subtitle"
                            quotes={quotes}
                            containerTheme="bg-htlgirls text-primary"
                            cardTheme="bg-primary ring-1 ring-primary text-htlgirls"
                        />
                        </>

                    )}

                </React.Fragment>
            ))}
            <JoinSectionALISMA invert={true}/>
            <SectionSeparatorWave className={"text-htlgirls"}/>
            <ContactCtaSection
                newsletterHref="/newsletter"
                whatsappHref="https://chat.whatsapp.com/yourInvite"
                containerTheme="bg-htlgirls text-primary"
                primaryBtnClass="bg-primary text-htlgirls"
                secondaryBtnClass="border-2 text-primary"
                className={"mt-[-3px]"}
            />
        </>
    )
}
