import {useTranslation} from "react-i18next";
import React from "react";
import {Button} from "@/ui/components/shadcn/button";

type HeroSectionProps = {
    scrollToSection: () => void;
}

export default function HeroSection({scrollToSection} :HeroSectionProps) {
    const { t } = useTranslation();
    return (
        <section
            id="hero-banner-cebra"
            className="relative h-full w-full z-100 overflow-hidden items-center justify-centertext-black"
        >

            {/* Foreground Black Cutout Overlay */}
            {/*<img*/}
            {/*    src="/backgrounds/LandingPage_CustomBlob.svg"*/}
            {/*    alt="Foreground cutout"*/}
            {/*    className="absolute inset-0 w-full h-full object-cover -z-10"*/}
            {/*/>*/}

            {/* Hero Content */}
            <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-4xl mx-auto mt-15">
                <h1>
                    {t('lp_s0_a')}
                </h1>
                <p className="mt-6 text-lg text-gray-800 mb-8">
                    {t('lp_s0_b')}
                </p>
                <div className="w-full flex items-center mt-10 justify-center  text-center">
                    <Button
                        onClick={scrollToSection}
                        className={`rounded-full border-2 border-black justify-center flex items-center bg-transparent animate-slow-bounce hover:opacity-80 transition-opacity h-14 w-14`}
                        aria-label="Scroll to section"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="black"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Button>
                </div>
            </main>
        </section>
    );
}

/*
Grayscale Design Option
<section className="centered">
    <img src={HeroBannerBackground} alt="HeroBannerGrayscale City Image"
className="h-screen min-w-screen overflow-clip z-0  object-cover "/>
    <div className="absolute inset-0 flex flex-row items-center justify-start ml-[7rem] w-[100%] z-10 ">
    <div className="absolute inset-0 flex flex-col items-center justify-start ml-[7rem] mt-[13%] w-[50%] p-10 border-r-20 bg-white max-h-[400px] shadow-green-500">
    <h1 className="z-10 text-gray-800 font-bold text-[3rem] mt-[-20px]">The world isnt build for the
    gifted.<span className="block text-[3rem]">We are.</span></h1>
</div>

</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
    <HoveringScrollButton targetId={targetScrollId} />
</div>
</section>
*/
