import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import InViewSection from "@/ui/components/generics/InViewSection";

type ListBlockProps = {
    index: number;
    title: string;
    subtitle?: string;
    items: Array<string | React.ReactNode>;
    primary?: string;
    secondary?: string;
    className?: string;
};

function pickThemeParts(theme: string) {
    const tokens = theme.trim().split(/\s+/);
    const bg = tokens.find((c) => c.startsWith("bg-")) ?? "";
    const text = tokens.find((c) => c.startsWith("text-")) ?? "";
    const svgTextFromBg = bg ? bg.replace(/^bg-/, "text-") : "";
    return { bg, text, svgTextFromBg };
}

function ListBlock({
                       index,
                       title,
                       subtitle,
                       items,
                       primary = "bg-primary text-secondary",
                       secondary = "bg-secondary text-primary",
                       className = "",
                   }: ListBlockProps) {
    const { t } = useTranslation();
    const isEven = index % 2 === 0;
    const nextIsEven = (index + 1) % 2 === 0;

    const currentTheme = isEven ? primary : secondary;
    const nextTheme = nextIsEven ? primary : secondary;

    const { bg: bgClass, text: textClass } = pickThemeParts(currentTheme);
    const { svgTextFromBg: nextWaveTextClass } = pickThemeParts(nextTheme);

    return (
        <section
            className={`relative isolate w-full ${bgClass} ${className}`}
            aria-labelledby={`listblock-${index}-title`}
        >
            <div className="mx-auto w-[90vw] pt-20 pb-10 px-5 md:px-8">
                <div className="grid gap-10 md:gap-14 lg:grid-cols-12 items-start">
                    {/* Left column: Title + Subtitle */}
                    <InViewSection
                        from="up"
                        className="lg:col-span-5 w-full mx-auto my-auto justify-center items-center"
                    >
                        <h2
                            id={`listblock-${index}-title`}
                            className={`${textClass} text-3xl font-extrabold tracking-tight md:text-4xl`}
                        >
                            {title}
                        </h2>
                        {subtitle && (
                            <p className={`${textClass} mt-4 text-lg leading-relaxed md:text-xl`}>
                                {subtitle}
                            </p>
                        )}
                    </InViewSection>

                    {/* Right column: List */}
                    <InViewSection
                        from={isEven ? "right" : "left"}
                        className="lg:col-span-7 w-full mx-auto"
                    >
                        <ul className="space-y-4">
                            {items.map((it, i) => (
                                <li
                                    key={i}
                                    className={`${textClass} flex items-center gap-3 text-base md:text-lg leading-relaxed `}
                                >
                                    {/* Simple bullet */}
                                    <span aria-hidden className={`${textClass} mt-2 inline-block h-2 w-2 rounded-full ring-2 ring-modernmen items-center`} />
                                    <div className={`${textClass} flex-1`} >{it}</div>
                                </li>
                            ))}
                        </ul>
                    </InViewSection>
                </div>
            </div>

            {/* Wave to match the *next section* background */}
            <svg
                aria-hidden="true"
                viewBox="0 0 1440 160"
                className={`pointer-events-none mt-15 block h-20 w-full md:h-24 ${nextWaveTextClass}`}
                preserveAspectRatio="none"
            >
                <path
                    d="M0,96 C180,190 360,0 540,100 C720,200 900,20 1080,120 C1260,220 1350,60 1440,140 L1440,200 L0,200 Z"
                    fill="currentColor"
                />
            </svg>
        </section>
    );
}

export default memo(ListBlock);
