import Team05Page from "../components/TeamIntroductionComponent";
import {motion} from "framer-motion";
import FooterSimple from "@/ui/components/nav/FooterSimple";
import ScrollToButton from "@/ui/components/generics/ScrollToButton";
import {useTranslation} from "react-i18next";
import AboutUsHeroBanner from "@/ui/sections/AboutUsHeroBanner";

export default function AboutUsPage() {
    const {t} = useTranslation();

    return (
        <div className="w-full">
            <AboutUsHeroBanner/>
            <motion.section
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
                className="w-screen h-fit my-[10vh] lg:my-0 lg:h-screen flex items-center justify-center mt-20 lg:mt-0 px-10"
                id="ourmission-text-section"
            >
                <div className="max-w-4xl text-primary">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about_mission_title')}</h1>
                    <p className="text-2xl leading-relaxed mb-6">
                        {t('about_mission_text')}
                    </p>
                    <ScrollToButton targetId="ourvision-text-section"/>
                </div>
            </motion.section>

            <motion.section
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
                className="w-screen h-fit my-[10vh] lg:my-0 lg:h-screen flex items-center justify-center px-10"
                id="ourvision-text-section"
            >
                <div className="max-w-4xl text-primary">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about_vision_title')}</h1>
                    <p className="text-2xl leading-relaxed mb-6">
                        {t('about_vision_text')}
                    </p>
                </div>
            </motion.section>

            <motion.section
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
                className="w-screen h-fit my-[10vh] lg:my-0 lg:h-screen flex items-center justify-center px-10"
            >
                <div className="max-w-4xl text-primary">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about_system_title')}</h1>
                    <p className="text-2xl leading-relaxed mb-6">
                        {t('about_system_text')}
                    </p>
                </div>
            </motion.section>

            <motion.section
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
                className="w-screen h-fit my-[10vh] lg:my-0 lg:h-screen flex items-center justify-center px-10"
            >
                <div className="max-w-4xl text-primary">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about_principles_title')}</h1>
                    <p className="text-2xl leading-relaxed mb-6">
                        {t('about_principles_text')}
                    </p>
                </div>
            </motion.section>

            <motion.section
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
                className="w-screen h-fit my-[10vh] lg:my-0 lg:min-h-screen flex items-center justify-center px-10"
            >
                <Team05Page/>
            </motion.section>
        </div>
    );
}
