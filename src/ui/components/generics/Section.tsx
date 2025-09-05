import {motion} from "framer-motion";
import ScrollToButton from "@/ui/components/generics/ScrollToButton";
import {useTranslation} from "react-i18next";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";

const Section = ({
                     id,
                     title,
                     text,
                     next,
                     buttons,
                     className,
                     darkMode = false,
                 }: {
    id: string;
    title: string;
    text: string;
    next?: string;
    buttons?: React.ReactNode;
    className?: string;
    darkMode?: boolean;
}) => {
    const {t} = useTranslation();
    return (
        <>
            <motion.section
                id={id}
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
                className={`w-full lg:flex lg:h-[90vh] hidden items-center justify-center px-10 my-20 lg:my-0 bg-transparent ${className}`}
            >
                <div className="max-w-4xl text-center justify-center">
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className={`text-5xl font-bold mb-6 ${darkMode ? "text-primary" : "text-secondary"}`}>{t(title)}</motion.h1>
                    <motion.p initial={{opacity: 0, y: 30}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{duration: 0.6, delay: 0.3}}
                              className={`text-xl leading-relaxed mb-6 ${darkMode ? "text-primary" : "text-secondary-600"} whitespace-pre-line`}>{t(text)}</motion.p>
                    {buttons && <div className="flex gap-4 justify-center mt-4 flex-wrap">{buttons}</div>}
                        {next && <ScrollToButton targetId={next} isWhite={darkMode} className={"items-center mx-auto w-12 h-12"}/>}
                </div>
                <SectionSeparatorWave
                    className="absolute text-secondary inset-x-0 bottom-[-1px]  scale-x-[-1] z-0"
                />
            </motion.section>
            <motion.section
                id={id}
                className={`relative h-fit px-6 py-[10vh] text-left items-start flex lg:hidden flex-col justify-center overflow-hidden`}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false, amount: 0.4}}
                transition={{duration: 0.8}}
            >
                <motion.h2
                    className={`text-5xl font-normal leading-snug ${darkMode ? "text-primary" : "text-secondary"} mb-6 max-w-[90vw] z-10`}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    {t(title)}
                </motion.h2>
                {text && (
                    <motion.p
                        className={`text-3xl font-light leading-snug ${darkMode ? "text-primary" : "text-secondary-600"} max-w-[90vw] z-10`}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                    >
                        {t(text)}
                    </motion.p>
                )}
                {buttons && <motion.div className="mt-10 z-10" initial={{opacity: 0}} whileInView={{opacity: 1}}
                                        transition={{delay: 0.4}}>
                    <div className={"flex flex-row gap-x-5"}>{buttons}</div>
                </motion.div>}
                <SectionSeparatorWave
                    className="absolute text-secondary inset-x-0 bottom-[-1px]  scale-x-[-1] z-0"
                />
            </motion.section>
        </>
    );
}

export default Section;