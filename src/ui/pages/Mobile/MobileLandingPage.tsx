import FooterSimple from "@/ui/components/nav/FooterSimple";
import {useTranslation} from "react-i18next";
import {CheckIcon} from "lucide-react";
import {motion} from "framer-motion";

export default function MobileLandingPage() {
    const {t} = useTranslation();

    const sections = [
        {id: "mobile-0", title: t("lp_s1_a"), text: t("lp_s1_b")},
        {id: "mobile-1", title: t("lp_s2_a"), text: t("lp_s2_b")},
        {
            id: "mobile-2",
            title: t("lp_s3_a"),
            text: t("lp_s3_b"),
            buttons: (
                <div className="flex gap-8 flex-row justify-between pt-4">
                    <button className="btn-primary w-full">{t("lp_s3_c")}</button>
                    <button className="btn-primary w-full">{t("lp_s3_d")}</button>
                </div>
            )
        },
        {
            id: "mobile-3",
            title: t("lp_s5_a"),
            text: t("lp_s5_b"),
            buttons: (
                <button className="btn-primary w-fit  mt-6">{t("lp_s5_c")}</button>
            )
        },
        {id: "mobile-4", title: t("lp_s6_a"), text: t("lp_s6_b")},
        {id: "mobile-5", title: t("lp_s7_a"), text: t("lp_s7_b")},
        {
            id: "mobile-6",
            title: t("lp_s8_a"),
            text: "",
            buttons: (
                <ul className="text-secondary text-3xl space-y-4 text-left pt-6">
                    <motion.li className="flex items-start gap-x-3" whileHover={{scale: 1.05}}><CheckIcon
                        className="mt-1"/> {t("lp_s8_b")}</motion.li>
                    <motion.li className="flex items-start gap-x-3" whileHover={{scale: 1.05}}><CheckIcon
                        className="mt-1"/> {t("lp_s8_c")}</motion.li>
                    <motion.li className="flex items-start gap-x-3" whileHover={{scale: 1.05}}><CheckIcon
                        className="mt-1"/> {t("lp_s8_d")}</motion.li>
                    <motion.li className="flex items-start gap-x-3" whileHover={{scale: 1.05}}><CheckIcon
                        className="mt-1"/> {t("lp_s8_e")}</motion.li>
                </ul>
            )
        },
        {
            id: "mobile-7",
            title: t("lp_s9_a"),
            text: "",
            buttons: (
                <button className="btn-primary w-fit mt-6">{t("lp_s9_b")}</button>
            )
        }
    ];

    return (
        <div className="block lg:hidden scroll-smooth relative">
            {/* Background decorations with light stripes */}
            <div
                className="absolute inset-0 -z-10 bg-[url('/backgrounds/TransparentStripeBackgroundMobile.png')] bg-repeat opacity-10"/>


            {sections.map((section) => (
                <motion.section
                    key={section.id}
                    id={section.id}
                    className="relative min-h-[100svh] px-6 py-8 text-left text-secondary flex flex-col justify-center overflow-hidden"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: false, amount: 0.4}}
                    transition={{duration: 0.8}}
                >
                    <motion.h2
                        className="text-6xl font-medium leading-snug mb-6 max-w-[90vw] z-10"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        {section.title}
                    </motion.h2>
                    {section.text && (
                        <motion.p
                            className="text-5xl font-light leading-snug text-primary/90 max-w-[90vw] z-10"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.3}}
                        >
                            {section.text}
                        </motion.p>
                    )}
                    {section.buttons && (
                        <motion.div className="mt-10 z-10" initial={{opacity: 0}} whileInView={{opacity: 1}}
                                    transition={{delay: 0.4}}>
                            {section.buttons}
                        </motion.div>
                    )}
                </motion.section>
            ))}
            <FooterSimple/>
        </div>
    );
}
