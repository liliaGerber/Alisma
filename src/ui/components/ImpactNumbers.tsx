// components/ImpactNumbers.tsx
import React, {useEffect, useState} from "react";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";

type Stat = { label: string; value: number; prefix?: string; suffix?: string; decimals?: number };

function AnimatedNumber({
                            value,
                            duration = 1000, // ms
                            prefix = "",
                            suffix = "",
                            decimals = 0,
                            className = "",
                        }: {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}) {
    const [n, setN] = useState(0);

    useEffect(() => {
        const steps = 30;                       // ~30 frames
        const inc = value / steps;
        const tick = Math.max(16, Math.floor(duration / steps));
        let cur = 0;
        const id = setInterval(() => {
            cur += inc;
            if (cur >= value) {
                setN(value);
                clearInterval(id);
            } else {
                setN(cur);
            }
        }, tick);
        return () => clearInterval(id);
    }, [value, duration]);

    const fmt = n.toFixed(decimals);
    return <span className={className}>{prefix}{fmt}{suffix}</span>;
}

export default function ImpactNumbers({
                                          title = "Wirkung in Zahlen",
                                          subtitle,
                                          stats,
                                          className = "",
                                          textColor = "text-primary"
                                      }: {
    title?: string;
    subtitle?: string;
    stats: Stat[];
    className?: string;
    textColor?: string;
}) {
    return (
        <>
        <section className={`w-full py-12 md:py-16 ${className} ${textColor}`}>
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                <div className="text-center">
                    <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${textColor}`}>{title}</h2>
                    {subtitle && <p className={`mt-2 text-lg md:text-xl opacity-80 ${textColor}`}>{subtitle}</p>}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div key={i} className="rounded-2xl bg-black/5 p-6 text-center">
                            <AnimatedNumber
                                value={s.value}
                                prefix={s.prefix}
                                suffix={s.suffix}
                                decimals={s.decimals ?? 0}
                                className="text-4xl md:text-5xl font-extrabold tabular-nums"
                            />
                            <div className="mt-2 text-base md:text-lg opacity-80">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    <SectionSeparatorWave className={`text-htlgirls rotate-180`}/>
</>
);
}
