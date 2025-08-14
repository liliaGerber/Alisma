import {BottomWave, TopWave} from "@/ui/components/generics/Waves";
import { useTranslation } from "react-i18next";
// If you don't have lucide-react, replace the icon with an inline SVG.
import { CheckCircle } from "lucide-react";
import * as React from "react";

export default function AboutCommunity() {
    const { t } = useTranslation();

    const benefits = [
        { key: "networking", label: t("community_about.benefits.networking") },
        { key: "support", label: t("community_about.benefits.support") },
        { key: "empowerment", label: t("community_about.benefits.empowerment") },
        { key: "learning", label: t("community_about.benefits.learning") },
    ];

    return (
        <section className="relative overflow-hidden bg-primary text-secondary">

            <div className="relative z-10 mx-auto  px-6 sm:px-8 pt-24 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold">
                            {t("community_about.title")}
                        </h2>
                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary-500">
                            {t("community_about.intro")}
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {benefits.map((b) => (
                            <li key={b.key} className="flex items-start gap-3">
                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                                <span className="text-sm sm:text-base leading-relaxed">
                  {b.label}
                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <BottomWave className={"text-secondary relative scale-x-[-1] "}/>

        </section>

    );
}
