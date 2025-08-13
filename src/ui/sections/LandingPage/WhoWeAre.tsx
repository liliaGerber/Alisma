import TeamSlider from "@/ui/components/TeamSlider";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";
import {useTranslation} from "react-i18next";

export default function WhoWeAre(){
    const {t} = useTranslation();
    return (
        <section className={"w-screen pt-25 bg-secondary"}>
            <div className=" max-w-4xl px-15 text-start">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                    {t('wer_wir_sind_title')}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary">
                    {t('wer_wir_sind_text')}

                </p>
            </div>
            <TeamSlider/>
            <SectionSeparatorWave className="text-secondary absolute bottom-[-1] left-0 right-0 z-20 rotate-180"/>

        </section>
    )
}