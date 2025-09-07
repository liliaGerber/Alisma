import React from "react";
import {Link, useLocation} from "react-router-dom";
import { Button } from "@/ui/components/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/shadcn/card";
import { MessageCircle, UserPlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import {resolveColor, resolveColorText, resolveTheme} from "@/config/ThemeProvider";

function normalize(c?: string) {
    return (c ?? "").replace(/[}]/g, "").trim();
}

/**
 * JoinSectionALISMA (themed)
 * - Background/text: theme.primary
 * - Buttons: theme.secondary
 * - Fallback: bg-secondary text-primary
 */
export default function JoinSectionALISMA({
                                              joinHref = "/onboarding",
                                              whatsappHref = "https://chat.whatsapp.com/HJjrQXremWk0jNT7PoQ7N2",
                                              onJoinClick,
                                              onWhatsappClick,
    invert = false
                                          }: {
    joinHref?: string;
    whatsappHref?: string;
    onJoinClick?: () => void;
    invert?: boolean;
    onWhatsappClick?: () => void;
}) {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const theme = resolveTheme(pathname);
    const primary = (invert ?normalize(theme?.secondary) :  normalize(theme?.primary)) || "text-primary bg-secondary";
    const secondary = (invert ? normalize(theme?.primary) :  normalize(theme?.secondary)) || "text-secondary bg-primary";
    const primaryText = invert ? resolveColorText(pathname) : "text-primary"

    return (
        <section
            id="mitmachen"
            className={`relative w-full mt-[-2px] ${primary}`}
            aria-labelledby="mitmachen-heading"
        >
            <div className={`relative mx-auto max-w-6xl px-4 py-16 lg:py-20 ${primaryText}`}>
                <div className="grid items-stretch gap-8 grid-cols-1 lg:grid-cols-2">
                    {/* Copy */}
                    <div className={`space-y-6 ${primaryText}`}>
                        <h2
                            id="mitmachen-heading"
                            className={`text-3xl md:text-4xl font-extrabold tracking-tight ${primaryText}`}
                        >
                            {t("alismaJoin.title")}
                        </h2>

                        <p className={`text-lg leading-relaxed ${primaryText}`}>
                            <strong>{t("alismaJoin.leadStrong")}</strong> {t("alismaJoin.lead")}
                        </p>

                        <p className={`text-base leading-relaxed opacity-90 ${primaryText}`}>
                            {t("alismaJoin.body")}
                        </p>
                    </div>

                    {/* CTA Card */}
                    <Card className={`border-${primaryText} rounded-2xl shadow-sm`}>
                        <CardHeader>
                            <CardTitle className="text-xl">{t("alismaJoin.cardTitle")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Primary: Onboarding */}
                                <Button
                                    asChild
                                    variant={"basic"}
                                    onClick={onJoinClick}
                                    className={`w-full h-12 text-base rounded-2xl font-semibold border  ${primary} hover:scale-102 `}
                                >
                                    <Link to={joinHref} aria-label={t("alismaJoin.aria.join")}>
                                        <UserPlus className="mr-2 h-5 w-5" /> {t("alismaJoin.cta.join")}
                                    </Link>
                                </Button>

                                {/* Secondary: WhatsApp */}
                                <Button
                                    asChild
                                    onClick={onWhatsappClick}
                                    variant={"basic"}
                                    className={`w-full h-12 text-base rounded-2xl border ${primary} hover:scale-102`}
                                >
                                    <Link
                                        to={whatsappHref}
                                        aria-label={t("alismaJoin.aria.whatsapp")}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5" /> {t("alismaJoin.cta.whatsapp")}
                                    </Link>
                                </Button>

                                <div className="pt-2 text-sm">
                                    <span className="block">{t("alismaJoin.more.label")}</span>
                                    <ul className="list-disc ml-5">
                                        <li>
                                            <Link
                                                className="underline underline-offset-4"
                                                to="/newsletter"
                                            >
                                                {t("alismaJoin.more.newsletter")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="underline underline-offset-4"
                                                to="/onboarding"
                                            >
                                                {t("alismaJoin.more.volunteer")}
                                            </Link>
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
