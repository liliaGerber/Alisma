// src/ui/sections/ContactCtaSection.tsx
import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

type Props = {
    newsletterHref: string;
    whatsappHref: string;
    containerTheme?: string;
    primaryBtnClass?: string;
    secondaryBtnClass?: string;
    className?: string;
};

export default function ContactCtaSection({
                                              newsletterHref,
                                              whatsappHref,
                                              containerTheme = "bg-secondary text-primary",
                                              primaryBtnClass = "bg-primary text-secondary",
                                              secondaryBtnClass = "border-2",
                                              className = "",
                                          }: Props) {
    const {t} = useTranslation();


    return (
        <section className={`w-full ${containerTheme} py-14 md:py-18 ${className}`}>
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className={` ${containerTheme} text-3xl md:text-4xl font-extrabold tracking-tight`}>{t(`contactCta.title`)}</h2>
                    <p className={`${containerTheme} mt-3 text-lg md:text-xl opacity-90`}>{t(`contactCta.text`)}</p>
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Link
                        to={"/contact"}
                        className={`inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm ring-1 ring-black/10 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${primaryBtnClass}`}
                        aria-label={t(`contactCta.buttons.contact`)}
                    >
                        {t(`contactCta.buttons.contact`)}
                    </Link>

                    {/* Newsletter (external or internal URL) */}
                    <a
                        href={newsletterHref}
                        className={`inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-1 ring-black/10 hover:shadow-md ${secondaryBtnClass}`}
                        aria-label={t(`contactCta.buttons.newsletter`)}
                    >
                        {t(`contactCta.buttons.newsletter`)}
                    </a>

                    {/* WhatsApp community */}
                    <a
                        href={whatsappHref}
                        className={`inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-1 ring-black/10 hover:shadow-md ${secondaryBtnClass}`}
                        aria-label={t(`contactCta.buttons.whatsapp`)}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t(`contactCta.buttons.whatsapp`)}
                    </a>
                </div>
            </div>
        </section>
    );
}
