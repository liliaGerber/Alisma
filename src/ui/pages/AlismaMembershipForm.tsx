/*
// src/ui/pages/AlismaMembershipForm.tsx
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {useBrevoForm} from "@/hooks/useBrevoForm";

export default function AlismaMembershipForm() {
    const { t } = useTranslation();
    const [over14, setOver14] = useState(false);
    const [under14, setUnder14] = useState(false);
    const [guardianEmail, setGuardianEmail] = useState("");

    useBrevoForm({
        locale: "en",
        autohide: false,
        messages: {
            requiredCode: "Please choose a country code",
            emailInvalid:
                "The information provided is invalid. Please review the field format and try again.",
            smsInvalid:
                "The information provided is invalid. Please review the field format and try again.",
            required: "This field cannot be left blank.",
            genericInvalid:
                "The information provided is invalid. Please review the field format and try again.",
        },
        commonI18n: {
            selectedList: "{quantity} list selected",
            selectedLists: "{quantity} lists selected",
            selectedOption: "{quantity} selected",
            selectedOptions: "{quantity} selected",
        },
    });

    // FRONTEND-ONLY VALIDATION
    const over14Required = !under14;
    const guardianEmailRequired = under14;

    const over14CheckboxProps = useMemo(
        () => ({
            checked: over14 && !under14,
            disabled: under14,
            required: over14Required,
        }),
        [over14, under14, over14Required]
    );

    const onToggleUnder14 = (checked: boolean) => {
        setUnder14(checked);
        if (checked) setOver14(false);
        else setGuardianEmail("");
    };

    return (
        <section className="min-h-screen w-full bg-secondary text-primary px-4 md:px-8 py-10 md:py-16">
            {/!* Brevo requires these wrapper + message nodes *!/}
            <div className="sib-form" style={{ display: "contents" }}>
                <div id="sib-form-container" className="sib-form-container hidden" />
                <div id="error-message" className="sib-form-message-panel hidden" aria-hidden="true" />
                <div id="success-message" className="sib-form-message-panel hidden" aria-hidden="true" />
                <div id="sib-container" className="hidden" aria-hidden="true" />

                <form
                    id="sib-form"
                    method="POST"
                    action="https://2db304ad.sibforms.com/serve/MUIFANcgofmRntmhc9CJK34XAauNuhkj8O5PLHoACvI0dbTNlC_ZsYbTG-SWeKWLYbT8y_Fw94s3RmQ8KU4QpwmLqLzHlUke-_8kOg4MdgfU8xfQ3_z9JAcUBpXJvMZ35bAIycC1FdU40yxSs1Bgq-EGLP8WgjxWn3dyS6LPBsDlHtb0q9qUJU2yUdEosBGm9euU-ih4ANS7TTGu"
                    className="mx-auto w-full max-w-screen-xl rounded-2xl bg-secondary p-6 md:p-10"
                    noValidate
                    data-type="subscription"
                >
                    {/!* Header *!/}
                    <div className="mb-10">
                        <h1 className="text-left text-3xl md:text-4xl font-bold text-primary">
                            {t("membershipform.title")}
                        </h1>
                        <p className="text-left text-base mt-2 text-primary-200">
                            {t("membershipform.subtitle")}
                        </p>
                    </div>

                    {/!* Form grid *!/}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/!* Email *!/}
                        <div className="space-y-2">
                            <label htmlFor="EMAIL" className="block text-left text-base font-semibold">
                                {t("membershipform.email.label")}
                            </label>
                            <input
                                className="input w-full rounded-md bg-secondary border border-primary/30 px-3 py-2 text-primary placeholder:text-primary-200 placeholder:text-sm outline-none focus:ring-2 focus:ring-current"
                                type="email"
                                id="EMAIL"
                                name="EMAIL"
                                placeholder={t("membershipform.email.placeholder")}
                                required
                            />
                            <p className="text-left text-xs text-primary-200">
                                {t("membershipform.email.helper")}
                            </p>
                        </div>

                        {/!* SMS *!/}
                        <div className="space-y-2">
                            <label htmlFor="SMS" className="block text-left text-base font-semibold">
                                {t("membershipform.sms.label")}
                            </label>
                            <div className="flex flex-row gap-2">
                                <select
                                    className="input w-full md:w-32 rounded-md bg-secondary border border-primary/30 px-3 py-2 text-primary outline-none focus:ring-2 focus:ring-current"
                                    name="SMS__COUNTRY_CODE"
                                    aria-label={t("membershipform.sms.country_code_aria")}
                                    defaultValue="+43"
                                    required
                                >
                                    <option value="+43">+43 AT</option>
                                    <option value="+49">+49 DE</option>
                                    <option value="+33">+33 FR</option>
                                    <option value="+41">+41 CH</option>
                                    <option value="+39">+39 IT</option>
                                    <option value="+44">+44 GB</option>
                                    <option value="+1">+1 US</option>
                                    <option value="+34">+34 ES</option>
                                    <option value="+31">+31 NL</option>
                                    <option value="+32">+32 BE</option>
                                    <option value="+420">+420 CZ</option>
                                </select>

                                <input
                                    className="input w-full rounded-md bg-secondary border border-primary/30 px-3 py-2 text-primary placeholder:text-primary-200 placeholder:text-sm outline-none focus:ring-2 focus:ring-current"
                                    type="tel"
                                    id="SMS"
                                    name="SMS"
                                    inputMode="tel"
                                    placeholder={t("membershipform.sms.placeholder")}
                                />
                            </div>
                            <p className="text-left text-xs text-primary-200">
                                {t("membershipform.sms.helper")}
                            </p>
                        </div>

                        {/!* First name *!/}
                        <div className="space-y-2">
                            <label htmlFor="FIRSTNAME" className="block text-left text-base font-semibold">
                                {t("membershipform.firstname.label")}
                            </label>
                            <input
                                className="input w-full rounded-md bg-secondary border border-primary/30 px-3 py-2 text-primary placeholder:text-primary-200 placeholder:text-sm outline-none focus:ring-2 focus:ring-current"
                                type="text"
                                id="FIRSTNAME"
                                name="FIRSTNAME"
                                placeholder={t("membershipform.firstname.placeholder")}
                                required
                            />
                        </div>

                        {/!* Last name *!/}
                        <div className="space-y-2">
                            <label htmlFor="LASTNAME" className="block text-left text-base font-semibold">
                                {t("membershipform.lastname.label")}
                            </label>
                            <input
                                className="input w-full rounded-md bg-secondary border border-primary/30 px-3 py-2 text-primary placeholder:text-primary-200 placeholder:text-sm outline-none focus:ring-2 focus:ring-current"
                                type="text"
                                id="LASTNAME"
                                name="LASTNAME"
                                placeholder={t("membershipform.lastname.placeholder")}
                                required
                            />
                        </div>

                        {/!* Age confirmation *!/}
                        <div className="space-y-3 lg:col-span-2 text-primary">
                            <p className="font-semibold">{t("membershipform.age.section_label")}</p>
                            <div className="rounded-lg border border-primary/30 p-4">
                                <div className="ml-5 grid grid-cols-1 gap-3">
                                    <label className={`flex items-start gap-3 text-sm ${under14 ? "opacity-50" : ""}`}>
                                        <input
                                            type="checkbox"
                                            className="mt-1 h-4 w-4 rounded bg-primary accent-primary"
                                            id="FORM_OVER_14"
                                            name="FORM_OVER_14"
                                            value="1"
                                            {...over14CheckboxProps}
                                            onChange={(e) => setOver14(e.target.checked)}
                                        />
                                        <span className="text-primary">{t("membershipform.age.over14")}</span>
                                    </label>
                                    <label className="flex items-start gap-3 text-sm">
                                        <input
                                            type="checkbox"
                                            className="mt-1 h-4 w-4 rounded bg-primary accent-primary"
                                            id="FORM_UNDER_14"
                                            name="FORM_UNDER_14"
                                            value="1"
                                            checked={under14}
                                            onChange={(e) => onToggleUnder14(e.target.checked)}
                                        />
                                        <span className="text-primary">{t("membershipform.age.under14")}</span>
                                    </label>
                                </div>

                                {under14 && (
                                    <div className="space-y-2 mt-4">
                                        <label htmlFor="FORM_PARENTS_EMAIL" className="block text-left text-base font-semibold">
                                            {t("membershipform.age.guardian_email.label")}
                                        </label>
                                        <input
                                            className="input w-full rounded-md bg-secondary border border-primary/30 px-3 py-2 text-primary placeholder:text-primary-200 placeholder:text-sm outline-none focus:ring-2 focus:ring-current"
                                            type="email"
                                            id="FORM_PARENTS_EMAIL"
                                            name="FORM_PARENTS_EMAIL"
                                            placeholder={t("membershipform.age.guardian_email.placeholder")}
                                            value={guardianEmail}
                                            onChange={(e) => setGuardianEmail(e.target.value)}
                                            required={guardianEmailRequired}
                                        />
                                        <p className="text-left text-xs text-primary-200">
                                            {t("membershipform.age.guardian_email.helper")}
                                        </p>
                                    </div>
                                )}

                                <ul className="ml-0 list-disc pl-5 text-sm mt-4">
                                    <li className="text-primary-200">{t("membershipform.age.list.over14_rule")}</li>
                                    <li className="text-primary-200">{t("membershipform.age.list.under14_rule")}</li>
                                </ul>
                            </div>
                        </div>

                        {/!* Terms, contact permission, newsletter *!/}
                        <div className="lg:col-span-2 space-y-3 ml-5">
                            <div className="space-y-3">
                                <label className="flex items-start gap-3 text-sm">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded bg-primary accent-primary"
                                        id="FORM_AGREE_CONDITIONS"
                                        name="FORM_AGREE_CONDITIONS"
                                        required
                                    />
                                    <span className="text-primary">{t("membershipform.terms.label")}</span>
                                </label>
                            </div>

                            <div>
                                <label className="flex items-start gap-3 text-sm">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded bg-primary accent-primary"
                                        id="FORM_AGREE_TO_EMAIL"
                                        name="FORM_AGREE_TO_EMAIL"
                                        required
                                    />
                                    <span className="text-primary">{t("membershipform.contact_permission.label")}</span>
                                </label>
                                <p className="text-left text-xs text-primary-200 mt-0">
                                    {t("membershipform.contact_permission.helper")}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-start gap-3 text-sm">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded bg-primary accent-primary"
                                        id="FORM_SIGNUP_NEWSLETTER"
                                        name="FORM_SIGNUP_NEWSLETTER"
                                    />
                                    <span className="text-primary">{t("membershipform.newsletter.label")}</span>
                                </label>
                            </div>
                        </div>

                        {/!* Declaration *!/}
                        <div className="lg:col-span-2 flex flex-row">
                            <div className="gap-4 rounded-lg p-4 flex flex-row">
                                <svg className="h-12 w-12 text-primary" viewBox="0 0 63 63" fill="currentColor" aria-hidden>
                                    <path d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393z" />
                                    <circle cx="31.5" cy="31.5" r="12" />
                                </svg>
                                <p className="text-sm text-primary">{t("membershipform.declaration.text")}</p>
                            </div>
                        </div>
                    </div>

                    {/!* Hidden fields Brevo expects *!/}
                    <input type="text" name="email_address_check" defaultValue="" className="hidden" readOnly />
                    <input type="hidden" name="locale" value="en" />

                    {/!* Submit *!/}
                    <div className="pt-8">
                        <button
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-bold text-secondary hover:opacity-90"
                            type="submit"
                        >
                            {t("membershipform.submit")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
*/
import React from "react";

export default function MembershipFormIframe() {
    return (
        <section className="w-full h-screen bg-secondary flex items-center justify-center pt-20">
            <iframe
                src="https://2db304ad.sibforms.com/serve/MUIFACIQj4Or_74b-b01SBFdTUCJBUWpzgFyHoq4Fp2bx3FPRcZ446hqm2iI_r1-AEbhFGeGQV1hNUYmy11Wzxmvc0vynIlNHpbhd5jVGpyTZ6M-ze9CtWpjiyY-K8sVxA4HL0-07kqOmsBLwn9NuCp7NNFj7N-jNr1x0YnJWNJSZieRiRLkO2-Y1xo0EhZu_a27ULazzsEJOLzY"
                className="w-full h-full border-0"
                scrolling="auto"
                allowFullScreen
                title="Alisma membership signup"
            />
        </section>
    );
}

