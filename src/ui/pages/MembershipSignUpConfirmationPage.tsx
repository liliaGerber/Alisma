// src/ui/pages/MembershipSignupSent.tsx
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MembershipSignUpConfirmationPage() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    return (
        <section
            className="bg-primary text-secondary min-h-screen w-full flex items-center justify-center px-6"
            aria-labelledby="membership-confirm-title"
        >
            <div className="w-[90vw] max-w-xl rounded-2xl border border-secondary/20 bg-primary/5 p-8 text-center shadow-lg">
                <CheckCircle2 aria-hidden className="mx-auto mb-4 h-16 w-16" />
                <h1
                    id="membership-confirm-title"
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                >
                    {t("membership.confirmation.title")}
                </h1>

                <p className="mt-3 text-lg md:text-xl">
                    {t("membership.confirmation.subtitle")}
                </p>
                <p className="mt-2 text-base md:text-lg opacity-90">
                    {t("membership.confirmation.body_1")}
                </p>
                <p className="mt-2 text-base md:text-lg opacity-90">
                    {t("membership.confirmation.body_2")}
                </p>

                <ul className="mt-6 space-y-2 text-left mx-auto max-w-md text-base md:text-lg">
                    <li>• {t("membership.confirmation.tip_check_inbox")}</li>
                    <li>• {t("membership.confirmation.tip_confirm")}</li>
                    <li>
                        •{" "}
                        <Link
                            to="/contact"
                            className="underline decoration-secondary/60 hover:decoration-secondary"
                        >
                            {t("membership.confirmation.tip_contact")}
                        </Link>
                    </li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/onboarding"
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-secondary text-primary ring-1 ring-black/10 hover:opacity-90 transition"
                    >
                        {t("membership.confirmation.cta_onboarding")}
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold ring-1 ring-secondary/40 hover:ring-secondary transition"
                    >
                        {t("membership.confirmation.cta_home")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
