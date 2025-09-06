"use client"

import React from "react"
import {JSX} from "react/jsx-runtime"
import {useTranslation} from "react-i18next"
import {useLocation} from "react-router-dom"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/ui/components/shadcn/dropdown-menu"
import {Button} from "@/ui/components/shadcn/button"
import CheckIcon from "@/assets/icons/CheckmarkIcon.svg?react"
import {resolveThemeTextHover} from "@/config/ThemeProvider"

const languages = {
    en: "English",
    de: "Deutsch",
    fr: "Français",
}

export default function LanguageSwitcher() {
    const {i18n} = useTranslation()
    const current = i18n.language
    const {pathname} = useLocation()

    // theme text (includes default + hover, e.g. "text-htlgirls-600 hover:text-htlgirls-300")
    const themeTextHover = resolveThemeTextHover(pathname)

    return (
        <div className="block z-[1000]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        // bg stays primary, text/hover via theme provider
                        className={`flex items-center gap-2 shadow-sm my-2 h-fit text-sm bg-primary ${themeTextHover}`}
                    >
                        <GlobeIcon className="h-5 w-5"/>
                        <span>{current.toUpperCase()}</span>
                        <ChevronDownIcon className={` ${themeTextHover} h-4 w-4`}/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    // bg stays primary; border neutral ok; text/hover will come from items
                    className="w-48 rounded-xl border border-neutral-200 bg-primary shadow-xl p-1 z-[9999] mt-3 transition-transform duration-200 scale-95 animate-in fade-in"
                    sideOffset={4}
                    forceMount
                >
                    {Object.entries(languages).map(([lang, label]) => (
                        <DropdownMenuItem
                            key={lang}
                            onClick={() => i18n.changeLanguage(lang)}
                            // apply themed text + hover here; keep subtle bg hover if you like
                            className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${themeTextHover} hover:bg-primary-100`}
                        >
                            <span>{label}</span>
                            {current === lang && <CheckIcon className={` ${themeTextHover} h-4 w-4 opacity-80`}/>}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

function ChevronDownIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6"/>
        </svg>
    )
}

function GlobeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
        </svg>
    )
}
