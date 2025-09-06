import EmpoweringHeroImage from "@/assets/img/empowering_hero.png"
import {BottomWave, TopWave} from "@/ui/components/generics/Waves";
import {useTranslation} from "react-i18next";

export default function EmpoweringHeroBanner(){
    const {t} = useTranslation();
    return(
        <header className="relative bg-empowering h-fit overflow-hidden">
            {/* Hero content with background image */}
            <div className="relative z-10 p-5 bg-empowering text-start max-w-[90vw] mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 text-primary tracking-tight">
                    {t('empowering.hero.title')}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-primary opacity-90">

                    {t('empowering.hero.body')}
                </p>
            </div>
            <div
                className="relative grid place-items-center px-6 py-70  bg-center bg-cover"
                style={{ backgroundImage: `url(${EmpoweringHeroImage})` }}
            >
                {/* Top wave (green) lowered but OVER the image */}
                <TopWave className="pointer-events-none text-empowering absolute scale-x-[-1] left-0 right-0  z-20" />

            </div>
            <BottomWave/>
        </header>
    )
}