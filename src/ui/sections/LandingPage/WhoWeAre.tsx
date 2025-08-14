import TeamSlider from "@/ui/components/TeamSlider";
import {BottomWave, SectionSeparatorWave} from "@/ui/components/generics/Waves";
import {useTranslation} from "react-i18next";

export default function WhoWeAre(){
    const {t} = useTranslation();
    return (
        <>
        <section className="relative overflow-hidden w-full pt-24 bg-secondary">
            <div className="max-w-4xl mx-auto px-6 text-start">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                    {t('wer_wir_sind_title')}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary">
                    {t('wer_wir_sind_text')}
                </p>
            </div>

            <TeamSlider />

            {/* Reserve space for the wave if needed */}
            <div className="h-10" />

        </section>
    <BottomWave
        className="relative inset-x-0 bottom-[3px] z-10 block leading-none rotate-180 text-secondary"
    />
        </>

    )
}