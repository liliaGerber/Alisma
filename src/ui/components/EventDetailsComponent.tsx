// EventDetailsComponent.tsx
import React, {useMemo} from "react";
import type {CalendarEventExternal} from "@schedule-x/calendar";
import {useTranslation} from "react-i18next";

function formatWhen(s: string): string {
    const hasTime = s.includes(" ");
    const [datePart, timePart] = hasTime ? s.split(" ") : [s, undefined];
    const [y, m, d] = datePart.split("-").map(Number);
    const date = new Date(y, (m ?? 1) - 1, d ?? 1);
    if (hasTime && timePart) {
        const [hh, mm] = timePart.split(":").map(Number);
        date.setHours(hh ?? 0, mm ?? 0, 0, 0);
    }
    if (Number.isNaN(date.getTime())) return s;
    return new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        ...(hasTime ? {hour: "2-digit", minute: "2-digit"} : {}),
    }).format(date);
}

export default function EventDetails({event}: { event: CalendarEventExternal | null }) {
    const {t} = useTranslation();
    const entries = useMemo<[string, unknown][]>(() => {
        if (!event) return [];
        const ignore = new Set(["_options", "id", "title", "calendarId"]);
        return Object.entries(event).filter(([k]) => !ignore.has(k));
    }, [event]);

    if (!event) {
        return (
            <div className=" justify-center items-center h-full w-full bg-secondary p-5 ">
                <p className="text-2xl text-primary">{t("events.placeholder")}</p>
            </div>
        );
    }


    return (
        <aside className="p-5 text-primary bg-secondary h-fit">
            <div className={"max-w-[80vw] mx-auto "}>
                <h3 className="mb-4 text-primary text-lg font-semibold">{event.title ?? "Untitled event"}</h3>
                <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {entries.map(([key, val]) => {
                        const label = key === "calendarId" ? "calendar" : key.replace(/([A-Z])/g, " $1").toLowerCase();
                        const value =
                            key === "start" || key === "end"
                                ? formatWhen(String(val))
                                : Array.isArray(val)
                                    ? val.join(", ")
                                    : val == null
                                        ? "—"
                                        : typeof val === "object"
                                            ? JSON.stringify(val)
                                            : String(val);

                        return (
                            <div key={key} className="flex flex-col">
                                <dt className="text-sm text-primary/70">{label}</dt>
                                <dd className="text-base break-words">{value}</dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        </aside>
    );
}