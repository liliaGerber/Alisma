import {SectionSeparatorWave} from "@/ui/components/generics/Waves";
import {useTranslation} from "react-i18next";

export default function OurMission() {
    const {t} = useTranslation();
    return (
        <>
            <section className="bg-primary relative">
                <div className="  max-w-4xl px-15 py-20 text-start">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-secondary">
                        {t('mission.titel')}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary-500">
                        {t('mission.text')}            </p>
                </div>
                <SectionSeparatorWave className="text-primary absolute bottom-[-1] left-0 right-0 z-0 rotate-180"/>
            </section>
        </>

    )
}