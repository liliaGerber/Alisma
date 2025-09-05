import HtlGirlsBanner from "@/ui/sections/HtlGirls/HtlGirlsBanner";
import ChapterBlock from "@/ui/components/generics/ChapterBlock";
import React from "react";
import {useTranslation} from "react-i18next";
import type {Chapter} from "@/types/Chapter";
import EmpoweringHeroBanner from "@/ui/sections/EmpoweringHeroBanner";

export default function EmpoweringPage() {
    const {t} = useTranslation();

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
                <a href="#projects" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
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
            id: "voices",
            title: t("htlgirls.chapters.voices.title"),
            body: t("htlgirls.chapters.voices.body"),
        },
        {
            id: "vision",
            title: t("htlgirls.chapters.vision.title"),
            body: t("htlgirls.chapters.vision.body"),
            buttons: (
                <a href="#about" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                    {t("htlgirls.chapters.vision.button")}
                </a>
            ),
        },
        {
            id: "join",
            title: t("htlgirls.chapters.join.title"),
            body: t("htlgirls.chapters.join.body"),
            buttons: (
                <div className="flex flex-wrap gap-3">
                    <a href="#join" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                        {t("htlgirls.chapters.join.buttonPrimary")}
                    </a>
                    <a href="#newsletter" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                        {t("htlgirls.chapters.join.buttonSecondary")}
                    </a>
                </div>
            ),
        },
        {
            id: "partners",
            title: t("htlgirls.chapters.partners.title"),
            body: t("htlgirls.chapters.partners.body"),
        },
        {
            id: "contact",
            title: t("htlgirls.chapters.contact.title"),
            body: t("htlgirls.chapters.contact.body"),
            buttons: (
                <a href="#contact" className="border-2 rounded-xl inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                    {t("htlgirls.chapters.contact.button")}
                </a>
            ),
        },
    ];    return (
        <>
            <EmpoweringHeroBanner/>
            {CHAPTERS.map((c, i) => (
                <ChapterBlock key={c.id} chapter={c} index={i} primary={"bg-primary text-htlgirls"} secondary={"bg-htlgirls text-primary"}/>
            ))}
        </>
    )
}