import React from 'react';

interface UnstyledScrollToButtonProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
}

const UnstyledScrollToButton: React.FC<UnstyledScrollToButtonProps> = ({targetId, children, className = ''}) => {
    const handleClick = () => {
        const target = document.getElementById(targetId);
        if (!target) {
            console.log("No target to scroll to found")
            return;
        }
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + start;
        const duration = 1500;
        const startTime = performance.now();

        const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const scrollStep = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutQuad(progress);
            window.scrollTo(0, start + (end - start) * ease);

            if (progress < 1) requestAnimationFrame(scrollStep);
        };

        requestAnimationFrame(scrollStep);
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Scroll to section"
            className={className}
        >
            {children}
        </button>
    );
};

export default UnstyledScrollToButton;
