// src/lib/useBrevoForm.ts
import { useEffect } from "react";

type BrevoCommonI18n = {
    selectedList: string;
    selectedLists: string;
    selectedOption: string;
    selectedOptions: string;
};

declare global {
    interface Window {
        REQUIRED_CODE_ERROR_MESSAGE?: string;
        LOCALE?: string;
        EMAIL_INVALID_MESSAGE?: string;
        SMS_INVALID_MESSAGE?: string;
        REQUIRED_ERROR_MESSAGE?: string;
        GENERIC_INVALID_MESSAGE?: string;
        translation?: { common: BrevoCommonI18n };
        AUTOHIDE?: boolean;
    }
}

export type UseBrevoFormOptions = {
    locale?: string; // e.g. 'en' | 'de' | 'fr'
    autohide?: boolean; // Brevo's AUTOHIDE flag
    messages?: Partial<{
        requiredCode: string;
        emailInvalid: string;
        smsInvalid: string;
        required: string;
        genericInvalid: string;
    }>;
    commonI18n?: Partial<BrevoCommonI18n>;
    scriptSrc?: string; // override if needed
};

/**
 * Sets Brevo global config and loads the Brevo inline script.
 * Keep your form's DOM structure and name attributes intact.
 */
export function useBrevoForm({
                                 locale = "en",
                                 autohide = false,
                                 messages,
                                 commonI18n,
                                 scriptSrc = "https://sibforms.com/forms/end-form/build/main.js",
                             }: UseBrevoFormOptions = {}) {
    useEffect(() => {
        // 1) Set globals Brevo reads
        window.REQUIRED_CODE_ERROR_MESSAGE =
            messages?.requiredCode ?? "Please choose a country code";
        window.LOCALE = locale;
        const emailMsg =
            messages?.emailInvalid ??
            "The information provided is invalid. Please review the field format and try again.";
        const smsMsg =
            messages?.smsInvalid ??
            "The information provided is invalid. Please review the field format and try again.";
        window.EMAIL_INVALID_MESSAGE = emailMsg;
        window.SMS_INVALID_MESSAGE = smsMsg;
        window.REQUIRED_ERROR_MESSAGE =
            messages?.required ?? "This field cannot be left blank.";
        window.GENERIC_INVALID_MESSAGE =
            messages?.genericInvalid ??
            "The information provided is invalid. Please review the field format and try again.";
        window.translation = {
            common: {
                selectedList: commonI18n?.selectedList ?? "{quantity} list selected",
                selectedLists: commonI18n?.selectedLists ?? "{quantity} lists selected",
                selectedOption: commonI18n?.selectedOption ?? "{quantity} selected",
                selectedOptions: commonI18n?.selectedOptions ?? "{quantity} selected",
            },
        };
        window.AUTOHIDE = Boolean(autohide);

        // 2) Load Brevo form script once
        const el = document.querySelector<HTMLScriptElement>(
            `script[data-brevo-inline="1"]`
        );
        if (!el) {
            const s = document.createElement("script");
            s.src = scriptSrc;
            s.defer = true;
            s.async = true;
            s.dataset.brevoInline = "1";
            document.body.appendChild(s);
        }

        // No cleanup on globals (Brevo expects them static). We also keep the script for the page lifetime.
    }, [locale, autohide, messages, commonI18n, scriptSrc]);
}
