// EventCalendarResponsive.tsx
import React, {useMemo, useState} from "react";
import {ScheduleXCalendar, useNextCalendarApp} from "@schedule-x/react";
import {
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
    type CalendarEventExternal,
} from "@schedule-x/calendar";
import EventDetails from "@/ui/components/EventDetailsComponent";
import events from "@/assets/data/events.json"
import {useTranslation} from "react-i18next";

export default function EventCalendar() {
    const [selected, setSelected] = useState<CalendarEventExternal | null>(null);
    const {t} = useTranslation();
    const isMobile = useMediaQuery("(max-width: 640px)");

    type ViewType = ReturnType<typeof createViewMonthAgenda>;
    const mobileViews: [ViewType, ...ViewType[]] = [createViewMonthGrid()];
    const desktopViews: [ViewType, ...ViewType[]] = [
        createViewMonthGrid() as ViewType,
    ];
    const views = useMemo(() => (isMobile ? mobileViews : desktopViews), [isMobile]);
    const calendarApp = useNextCalendarApp({
        views,
        theme: "shadcn",
        calendars: {
            alisma: {
                label: "Alisma",
                colorName: "alisma",
                lightColors: {
                    main: "#F5EBE0",
                    container: "#193B1D",
                    onContainer: "#F5EBE0",
                },
            },
        },
        selectedDate: new Date().toISOString().split("T")[0],
        events: events,
        callbacks: {
            onEventClick(ev) {
                setSelected(ev as CalendarEventExternal);
            },
            onClickDate(date, e?: UIEvent) {
                if (!selected) {
                    setSelected(null);
                    return;
                }
                const clicked = date.split(" ")[0];
                const start = selected.start.split(" ")[0];
                const end = selected.end.split(" ")[0];

                const isWithinEvent =
                    clicked >= start && clicked <= end;

                if (!isWithinEvent) {
                    setSelected(null);
                }

            },
        },
    });

    return (
        <div className="w-full relative bg-secondary  h-screen text-primary">
            <h1 className={"text-primary text-4xl pt-30 pl-10 h-fit"}>{t("events.title")}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-secondary p-0 m-0 justify-center h-fit">
                <div className="col-span-1 lg:col-span-5 h-fit top-0   bg-secondary w-full">
                    <div
                        className="calendar-shell w-full h-fit  bg-secondary p-3 sm:p-4 text-base md:text-lg leading-snug">
                        <div
                            className="w-full bg-primary">
                            <ScheduleXCalendar
                                key={isMobile ? "grid-mobile" : "grid-desktop"}
                                calendarApp={calendarApp}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 h-fit lg:col-span-7 right-0 top-0 ">
                    <EventDetails event={selected}/>
                </div>
            </div>
        </div>
    );
}

/** Simple media-query hook */
function useMediaQuery(query: string) {
    const [matches, setMatches] = React.useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia(query).matches;
    });
    React.useEffect(() => {
        const m = window.matchMedia(query);
        const onChange = () => setMatches(m.matches);
        if (m.addEventListener) m.addEventListener("change", onChange);
        else m.addListener(onChange);
        return () => {
            if (m.removeEventListener) m.removeEventListener("change", onChange);
            else m.removeListener(onChange);
        };
    }, [query]);
    return matches;
}