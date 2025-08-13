export function BottomWave({ className = "text-primary" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none absolute -bottom-1 left-0 right-0 h-28 w-full ${className}`}
            viewBox="0 0 1440 112"
            preserveAspectRatio="none"
            aria-hidden
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
export function TopWave({ className = "text-gray-900" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none absolute -top-1 left-0 right-0 h-40 w-full ${className}`}
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            aria-hidden
        >
            <path
                d="M0 0h1440v64c-120 28-240 56-360 60-120 4-240-16-360-40S480 28 360 20C240 12 120 8 0 24V0Z"
                fill="currentColor"
            />
        </svg>
    );
}


export function SectionSeparatorWave({ className = "text-primary" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none h-24 w-full ${className}`}
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
            aria-hidden
        >
            <path
                d="M0 48c120 28 240 56 360 44s240-60 360-72 240 8 360 28 240 36 360 8V96H0V48Z"
                fill="currentColor"
            />
        </svg>
    );
}