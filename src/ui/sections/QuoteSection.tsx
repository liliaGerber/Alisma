// components/QuotesSection.tsx (React 18, TS 5, react-i18next 14+)
import React from "react";
import { useTranslation } from "react-i18next";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";

export type QuoteRef = {
    textKey: string;           // e.g. "htlGirlsQuotes.items.0.text"
    authorKey?: string;        // e.g. "htlGirlsQuotes.items.0.author"
    metaKey?: string;          // e.g. "htlGirlsQuotes.items.0.meta"
};

type QuotesSectionProps = {
    titleKey?: string;         // e.g. "htlGirlsQuotes.title"
    subtitleKey?: string;      // e.g. "htlGirlsQuotes.subtitle"
    quotes: QuoteRef[];
    containerTheme?: string;   // styling hooks
    cardTheme?: string;
    className?: string;
};

function initials(name?: string) {
    if (!name) return "•";
    const p = name.trim().split(/\s+/);
    return ((p[0]?.[0] ?? "") + (p[1]?.[0] ?? "")).toUpperCase() || "•";
}

export default function QuotesSection({
                                          titleKey,
                                          subtitleKey,
                                          quotes,
                                          containerTheme = "bg-secondary text-primary",
                                          cardTheme = "bg-primary ring-1 ring-black",
                                          className = "",
                                      }: QuotesSectionProps) {
    const { t } = useTranslation();

    return (
        <>
        <section className={`w-full py-12 md:py-16 ${containerTheme} ${className}`}>
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                {(titleKey || subtitleKey) && (
                    <div className="text-center">
                        {titleKey && (
                            <h2 className={` ${containerTheme} text-3xl md:text-4xl font-extrabold tracking-tight`}>
                                {t(titleKey) as string}
                            </h2>
                        )}
                        {subtitleKey && (
                            <p className={` ${containerTheme} mt-2 text-lg md:text-xl opacity-80`}>
                                {t(subtitleKey) as string}
                            </p>
                        )}
                    </div>
                )}

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {quotes.map((q, i) => {
                        const text = t(q.textKey) as string;
                        const author = q.authorKey ? (t(q.authorKey) as string) : undefined;
                        const meta = q.metaKey ? (t(q.metaKey) as string) : undefined;

                        return (
                            <figure
                                key={i}
                                className={`rounded-2xl ${cardTheme} p-6 md:p-7 flex flex-col justify-between`}
                            >
                                <blockquote className="text-base md:text-lg leading-relaxed">
                                    <span aria-hidden>“</span>
                                    {text}
                                    <span aria-hidden>”</span>
                                </blockquote>

                                {(author || meta) && (
                                    <figcaption className="mt-5 flex items-center gap-3">

                                        <div className="min-w-0">
                                            {author && (
                                                <div className="text-sm font-semibold leading-tight">
                                                    {author}
                                                </div>
                                            )}
                                            {meta && (
                                                <div className="text-sm opacity-70 leading-tight">
                                                    {meta}
                                                </div>
                                            )}
                                        </div>
                                    </figcaption>
                                )}
                            </figure>
                        );
                    })}
                </div>
            </div>

        </section>
    <SectionSeparatorWave className={`text-htlgirls rotate-180`}/>
        </>
);
}
