import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import { Button } from "../components/shadcn/button";
import { Input } from "../components/shadcn/input";
import { Label } from "../components/shadcn/label";
import { Textarea } from "../components/shadcn/textarea";

type FormState = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export const ContactSection: React.FC = () => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);

    const [form, setForm] = useState<FormState>(initialForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const validate = (): boolean => {
        const next: FormErrors = {};

        if (!form.firstname.trim()) next.firstname = t("contact.form.required", { defaultValue: "Required" });
        if (!form.lastname.trim()) next.lastname = t("contact.form.required", { defaultValue: "Required" });

        if (!form.email.trim()) {
            next.email = t("contact.form.required", { defaultValue: "Required" });
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            next.email = t("contact.form.invalidEmail", { defaultValue: "Invalid email" });
        }

        if (!form.subject.trim()) next.subject = t("contact.form.required", { defaultValue: "Required" });
        if (!form.message.trim()) next.message = t("contact.form.required", { defaultValue: "Required" });
        if (form.message.length < 5) next.message = t("contact.form.required", { defaultValue: "Required" });

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleChange =
        (field: keyof FormState) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm((prev) => ({ ...prev, [field]: e.target.value }));
                // clear error on change
                if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
            };

    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
        throw new Error("Missing EmailJS env vars (VITE_EMAILJS_PUBLIC_KEY / SERVICE_ID / TEMPLATE_ID).");
    }

    emailjs.init({ publicKey: PUBLIC_KEY });

    async function sendEmail() {
        const payload = {
            from_name: `${form.firstname} ${form.lastname}`.trim(),
            from_email: form.email,
            from_phone: form.phone ?? "",
            subject: form.subject,
            message: form.message,
        };

        // Since we've called init(), don't pass a 4th argument
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusMessage(null);

        if (!validate()) return;

        setIsLoading(true);
        try {
            await sendEmail();
            setStatusMessage(t("contact.form.success", { defaultValue: "Message sent successfully!" }));
            setForm(initialForm);
            formRef.current?.reset();
        } catch (err) {
            console.error("Email sending failed:", err);
            setStatusMessage(
                t("contact.form.error", { defaultValue: "Error sending email. Please try again later." })
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-30 container w-screen h-screen overflow-hidden bg-primary">
            <div className="flex px-0 lg:px-30 flex-col gap-5 xl:flex-row lg:gap-10 justify-evenly">
                <div className="mx-auto px-5 flex flex-col justify-evenly items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-2 text-secondary">{t("contact.title")}</h1>
                        <p className="text-secondary-500">{t("contact.description")}</p>
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-4xl flex-col gap-6 px-10 ml-0"
                    noValidate
                >
                    <div className="flex gap-4">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="firstname">{t("contact.form.firstname")}</Label>
                            <Input
                                id="firstname"
                                type="text"
                                placeholder={t("contact.form.firstnamePlaceholder")}
                                value={form.firstname}
                                onChange={handleChange("firstname")}
                                aria-invalid={!!errors.firstname}
                            />
                            {errors.firstname && (
                                <p className="text-sm text-red-600">{errors.firstname}</p>
                            )}
                        </div>

                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="lastname">{t("contact.form.lastname")}</Label>
                            <Input
                                id="lastname"
                                type="text"
                                placeholder={t("contact.form.lastnamePlaceholder")}
                                value={form.lastname}
                                onChange={handleChange("lastname")}
                                aria-invalid={!!errors.lastname}
                            />
                            {errors.lastname && (
                                <p className="text-sm text-red-600">{errors.lastname}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">{t("contact.form.email")}</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={t("contact.form.emailPlaceholder")}
                            value={form.email}
                            onChange={handleChange("email")}
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                    </div>

                    {/* Optional phone field to align with your EmailJS template */}
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="phone">{t("contact.form.phone", { defaultValue: "Phone" })}</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder={t("contact.form.phonePlaceholder", { defaultValue: "+43 660 1234567" })}
                            value={form.phone}
                            onChange={handleChange("phone")}
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                        <Input
                            id="subject"
                            type="text"
                            placeholder={t("contact.form.subjectPlaceholder")}
                            value={form.subject}
                            onChange={handleChange("subject")}
                            aria-invalid={!!errors.subject}
                        />
                        {errors.subject && (
                            <p className="text-sm text-red-600">{errors.subject}</p>
                        )}
                    </div>

                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">{t("contact.form.message")}</Label>
                        <Textarea
                            id="message"
                            placeholder={t("contact.form.messagePlaceholder")}
                            value={form.message}
                            onChange={handleChange("message")}
                            aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                            <p className="text-sm text-red-600">{errors.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded bg-secondary-600 text-primary-600 disabled:opacity-60"
                    >
                        {isLoading ? t("contact.form.sending", { defaultValue: "Sending…" }) : t("contact.form.send")}
                    </Button>

                    {statusMessage && (
                        <p className="text-sm text-secondary-500">{statusMessage}</p>
                    )}
                </form>
            </div>
        </section>
    );
};
