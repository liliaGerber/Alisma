import React from 'react';
import UnstyledScrollToButton from "./UnstyledScrollToButton";

interface HoveringScrollButtonProps {
    targetId: string;
    isWhite?: boolean;
    className?: string;
}

const HoveringScrollButton: React.FC<HoveringScrollButtonProps> = ({targetId, isWhite = true, className="w-12 h-12 justify-center"}  ) => {

    return (
        <UnstyledScrollToButton
            targetId={targetId}
            className={`rounded-full border-2 ${isWhite ? "border-white" : "border-black"} justify-center flex items-center bg-transparent animate-slow-bounce hover:opacity-80 transition-opacity ${className}`}
            aria-label="Scroll to section"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={isWhite ? "white" : "black"}
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </UnstyledScrollToButton>
    );
};

export default HoveringScrollButton;
