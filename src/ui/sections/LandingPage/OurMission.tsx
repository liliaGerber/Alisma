import {SectionSeparatorWave, TopWave} from "@/ui/components/generics/Waves";
import {useTranslation} from "react-i18next";

export default function OurMission() {
    const {t} = useTranslation();
    return (
        <>
        <section className="relative overflow-hidden bg-primary">
            <div className=" z-10 max-w-4xl justify-start px-15 pt-20 pb-30 text-start">
                <h2 className="text-2xl sm:text-3xl font-semibold text-secondary">
                    {t('mission.titel')}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary-500">
                    {t('mission.text')}
                </p>
            </div>

            <SectionSeparatorWave
                className="absolute text-secondary inset-x-0 bottom-[-1px]  scale-x-[-1] z-0"
            />
        </section>
    <section className="relative overflow-hidden bg-primary">

        <div className="bg-secondary z-10 w-full justify-end px-15 pt-20 pb-30 text-end">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                {t('vision.title')}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary-500">
                {t('vision.text')}
            </p>
        </div>


    </section>
            <SectionSeparatorWave
                className="relative text-secondary inset-x-0 top-[-1px]  rotate-180 z-0"
            />
        </>



    )
}