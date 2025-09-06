// src/ui/pages/NewsletterSignupSent.tsx
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NewsletterSignUpConfirmation() {
    const { t } = useTranslation();

    return (
        <section
            className="bg-primary text-secondary min-h-screen w-full flex items-center justify-center px-6"
            aria-labelledby="signup-confirm-title"
        >
            <div className="w-[90vw] max-w-xl rounded-2xl border border-secondary/20 bg-primary/5 p-8 text-center shadow-lg">
                <CheckCircle2 aria-hidden className="mx-auto mb-4 h-16 w-16" />
                <h1
                    id="signup-confirm-title"
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                >
                    {t("newsletter.confirmation.title")}
                </h1>

                <p className="mt-3 text-lg md:text-xl">
                    {t("newsletter.confirmation.subtitle")}
                </p>
                <p className="mt-2 text-base md:text-lg opacity-90">
                    {t("newsletter.confirmation.body")}
                </p>

                <ul className="mt-6 space-y-2 text-left mx-auto max-w-md text-base md:text-lg">
                    <li>• {t("newsletter.confirmation.tip_spam")}</li>
                    <li>• {t("newsletter.confirmation.tip_wait")}</li>
                    <li>• {t("newsletter.confirmation.tip_contact")}</li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-secondary text-primary ring-1 ring-black/10 hover:opacity-90 transition"
                    >
                        {t("newsletter.confirmation.cta_home")}
                    </a>
                    <a
                        href="/newsletter"
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold ring-1 ring-secondary/40 hover:ring-secondary transition"
                    >
                        {t("newsletter.confirmation.cta_retry")}
                    </a>
                </div>
            </div>
        </section>
    );
}
