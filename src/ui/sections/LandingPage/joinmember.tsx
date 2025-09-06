import React from "react";
import {Button} from "@/ui/components/shadcn/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/ui/components/shadcn/card";
import {MessageCircle, UserPlus} from "lucide-react";
import {useTranslation} from "react-i18next";
import {SectionSeparatorWave, TopWave} from "@/ui/components/generics/Waves"; // react-i18next v13

/**
 * JoinSectionALISMA
 * React 18 + TailwindCSS + shadcn/ui + react-i18next v13 (no <Trans>, flat keys)
 * Primary CTA = Mitglied werden (onboarding), Secondary = WhatsApp-Community
 */
export default function JoinSectionALISMA({
                                              joinHref = "#mitglied-werden",
                                              whatsappHref = "#whatsapp-community",
                                              onJoinClick,
                                              onWhatsappClick,
                                          }: {
    joinHref?: string;
    whatsappHref?: string;
    ns?: string;
    onJoinClick?: () => void;
    onWhatsappClick?: () => void;
}) {
    const {t} = useTranslation();

    return (
        <section id="mitmachen" className="relative w-full bg-background text-foreground mt-[-2px] bg-secondary"
                 aria-labelledby="mitmachen-heading">
            <div className=" relative mx-auto max-w-6xl px-4 py-16 lg:py-20">
                <div className="grid items-stretch gap-8 grid-cols-1 lg:grid-cols-2">
                    {/* Copy */}
                    <div className="space-y-6">
                        <h2 id="mitmachen-heading" className="text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
                            {t("alismaJoin.title")}
                        </h2>

                        {/* Lead paragraph without <Trans> */}
                        <p className="text-lg leading-relaxed text-primary">
                            <strong>{t("alismaJoin.leadStrong")}</strong> {t("alismaJoin.lead")}
                        </p>

                        <p className="text-base leading-relaxed text-primary text-muted-foreground">
                            {t("alismaJoin.body")}
                        </p>
                    </div>

                    {/* CTA Card */}
                    <Card className="border-primary border rounded-2xl shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">{t("alismaJoin.cardTitle")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Primary: Onboarding */}
                                <Button asChild className="w-full h-12 text-base border-primary border rounded-2xl bg-secondary text-primary font-semibold" onClick={onJoinClick}>
                                    <a href={"/onboarding"} aria-label={t("alismaJoin.aria.join")}>
                                        <UserPlus className="mr-2 h-5 w-5"/> {t("alismaJoin.cta.join")}
                                    </a>
                                </Button>

                                {/* Secondary: WhatsApp */}
                                <Button asChild className="w-full border-primary bg-secondary border rounded-2xl  text-primary h-12 text-base">
                                    <a href={"https://chat.whatsapp.com/HJjrQXremWk0jNT7PoQ7N2"} aria-label={t("alismaJoin.aria.whatsapp")} target="_blank"
                                       rel="noreferrer noopener">
                                        <MessageCircle className="mr-2 h-5 w-5"/> {t("alismaJoin.cta.whatsapp")}
                                    </a>
                                </Button>

                                {/* Optional micro‑links */}
                                <div className="pt-2 text-sm text-primary">
                                    <span className="block">{t("alismaJoin.more.label")}</span>
                                    <ul className="list-disc ml-5">
                                        <li>
                                            <a className="underline underline-offset-4 text-primary"
                                               href="/newsletter">{t("alismaJoin.more.newsletter")}</a>
                                        </li>
                                        <li>
                                            <a className="underline underline-offset-4 text-primary"
                                               href="/onboarding">{t("alismaJoin.more.volunteer")}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </section>
    );
}
