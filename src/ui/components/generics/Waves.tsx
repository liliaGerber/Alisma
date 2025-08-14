export function BottomWave({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 1440 112"
            preserveAspectRatio="none"
            className={[
                "absolute inset-x-0 bottom-0 w-full h-28",
                "block leading-none translate-y-[1px]",
                "pointer-events-none",
                className ?? "text-primary",
            ].join(" ")}
        >
            <path
                d="M0 64c120 28 240 56 360 44s240-60 360-72 240 8 360 28 240 36 360 8V112H0V64Z"
                fill="currentColor"
            />
        </svg>
    );
}


/**
 * Reusable SVG waves. They stretch full-width and keep nice bezier curves.
 * Use the `className` to set color via `text-*` (fill uses currentColor).
 */
export function TopWave({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className={[
                "absolute inset-x-0 top-0 w-full h-40",
                "block leading-none -translate-y-[1px]",
                "pointer-events-none",
                className ?? "text-gray-900",
            ].join(" ")}
        >
            <path
                d="M0 0h1440v64c-120 28-240 56-360 60-120 4-240-16-360-40S480 28 360 20C240 12 120 8 0 24V0Z"
                fill="currentColor"
            />
        </svg>
    );
}


export function SectionSeparatorWave({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
            className={[
                "block w-full h-24 leading-none pointer-events-none",
                className ?? "text-primary",
            ].join(" ")}
        >
            <path
                d="M0 48c120 28 240 56 360 44s240-60 360-72 240 8 360 28 240 36 360 8V96H0V48Z"
                fill="currentColor"
            />
        </svg>
    );
}
