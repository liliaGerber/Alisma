import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Member = {
    id: string;
    name: string;
    role: string;
    school?: string;
    bio: string;
    quote?: string;
    photo: string;
    links?: { label: string; href: string }[];
};

export default function CommunityProfiles({ members }: { members: Member[] }) {
    const { t } = useTranslation();
    const [selectedId, setSelectedId] = useState<string>(members[0]?.id);
    const selected = useMemo(
        () => members.find((m) => m.id === selectedId) ?? members[0],
        [members, selectedId, members]
    );

    const listboxId = useId();
    const panelRef = useRef<HTMLDivElement>(null);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Home") { e.preventDefault(); setSelectedId(members[0].id); }
        if (e.key === "End")  { e.preventDefault(); setSelectedId(members[members.length - 1].id); }
    };

    useEffect(() => { panelRef.current?.focus(); }, [selectedId]);

    const colHeight = "calc(3*8rem + 2*0.75rem)";

    return (
        <section className="bg-secondary text-primary">
            <div className="container mx-auto px-4 md:px-6 text-primary lg:px-8 py-10 md:py-14">
                <header className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl text-primary font-bold">
                        {t("community.members.sectionTitle")}
                    </h2>
                    <p className="mt-2 text-sm text-primary md:text-base">
                        {t("community.members.sectionIntro")}
                    </p>
                </header>

                <div
                    className="
            grid gap-6 items-stretch
            md:grid-cols-[minmax(140px,15%)_minmax(0,1fr)]
          "
                >
                    <div
                        className="
              hidden md:block text-primary
              md:overflow-y-auto md:space-y-3
            "
                        style={{ height: colHeight }}
                        role="listbox"
                        aria-label={t("community.members.aria_list")}
                        id={listboxId}
                        onKeyDown={onKeyDown}
                        tabIndex={0}
                    >
                        {members.map((m) => {
                            const isActive = m.id === selectedId;
                            return (
                                <button
                                    key={m.id}
                                    role="option"
                                    aria-selected={isActive}
                                    onClick={() => setSelectedId(m.id)}
                                    className={[
                                        "group block w-full rounded-xl overflow-hidden border",
                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                        isActive ? "border-primary" : "border-transparent hover:border-muted-foreground/30",
                                    ].join(" ")}
                                    style={{ height: "8rem" }} // smaller square
                                    aria-label={t("community.members.aria_thumbnail", { name: m.name, role: m.role })}
                                >
                                    <img
                                        src={m.photo}
                                        alt={t("community.members.alt", { name: m.name, role: m.role })}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <div
                        className="
              md:hidden mb-4 -mx-4 px-4 text-primary
              flex gap-3 overflow-x-auto snap-x snap-mandatory
            "
                        role="listbox"
                        aria-label={t("community.members.aria_list_mobile")}
                        id={`${listboxId}-mobile`}
                    >
                        {members.map((m) => {
                            const isActive = m.id === selectedId;
                            return (
                                <button
                                    key={m.id}
                                    role="option"
                                    aria-selected={isActive}
                                    onClick={() => setSelectedId(m.id)}
                                    className={[
                                        "shrink-0 snap-start rounded-xl overflow-hidden border",
                                        isActive ? "border-primary" : "border-transparent",
                                    ].join(" ")}
                                    style={{ width: "6rem", height: "6rem" }} // smaller mobile square
                                    aria-label={t("community.members.aria_thumbnail", { name: m.name, role: m.role })}
                                >
                                    <img
                                        src={m.photo}
                                        alt={t("community.members.alt", { name: m.name, role: m.role })}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <div
                        ref={panelRef}
                        tabIndex={-1}
                        aria-live="polite"
                        className="rounded-2xl border bg-card/0 p-4 sm:p-6 text-primary md:p-8"
                        style={{ minHeight: colHeight }} // keep columns visually matched
                    >
                        <div className="grid gap-6 md:grid-cols-[minmax(240px,36%)_1fr] items-start">
                            <div className="overflow-hidden rounded-2xl">
                                <div className="hidden md:block aspect-square">
                                    <img
                                        src={selected.photo}
                                        alt={t("community.members.portraitAlt", { name: selected.name })}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="md:hidden">
                                    <img
                                        src={selected.photo}
                                        alt={t("community.members.portraitAlt", { name: selected.name })}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-primary">{selected.name}</h3>
                                <p className="text-sm text-primary mt-1">
                                    {selected.role}{selected.school ? ` · ${selected.school}` : ""}
                                </p>

                                {selected.quote && (
                                    <blockquote className="mt-4 border-l-4 pl-4 italic" aria-label={t("community.members.aria_quote")}>
                                        “{selected.quote}”
                                    </blockquote>
                                )}

                                <p className="mt-5 text-primary leading-relaxed">{selected.bio}</p>

                                {selected.links?.length ? (
                                    <div className="mt-6 flex text-primary flex-wrap gap-3">
                                        {selected.links.map((l) => (
                                            <a
                                                key={l.href}
                                                href={l.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center text-primary rounded-full border px-3 py-1.5 text-sm hover:bg-accent"
                                                aria-label={t("community.members.aria_link", { label: l.label, name: selected.name })}
                                            >
                                                {l.label}
                                            </a>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    {/* end right column */}
                </div>
            </div>
        </section>
    );
}
