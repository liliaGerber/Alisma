/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8YMiVEiEQXe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/ui/components/shadcn/dropdown-menu"
import { Button } from "@/ui/components/shadcn/button"
import CheckIcon from "@/assets/icons/CheckmarkIcon.svg?react"
import React from "react"
import { JSX } from "react/jsx-runtime"
import {useTranslation} from "react-i18next";

const languages = {
    en: "English",
    de: "Deutsch",
    fr: "Français",
};
export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const current = i18n.language;

    return (
        <div className="block z-[1000]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2 shadow-sm my-2 h-fit text-sm">
                        <GlobeIcon className="h-5 w-5" />
                        <span>{current.toUpperCase()}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 ounded-xl border border-neutral-200 bg-primary shadow-xl p-1 z-[9999] mt-3 transition-transform duration-200 scale-95 animate-in fade-in" sideOffset={4} forceMount>                    {Object.entries(languages).map(([lang, label]) => (
                        <DropdownMenuItem
                            key={lang}
                            onClick={() => i18n.changeLanguage(lang)}
                            className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-neutral-800
                    hover:bg-primary-100 cursor-pointer transition-colors"
                        >
                            <span>{label}</span>
                            {current === lang && <CheckIcon className="h-4 w-4 opacity-80 " />}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}


function ChevronDownIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function GlobeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}