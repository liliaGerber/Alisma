import {useTranslation} from "react-i18next";

interface HeroBannerParams {
    backgroundImageUrl: string,
    title: string,
    subtitle: string
}

export default function HeroBannerTemplate1({backgroundImageUrl, title, subtitle}: HeroBannerParams) {
    const {t} = useTranslation();
    return (
        <section
            id="hero-banner-cebra"
            className="w-screen h-[50vh] lg:h-screen mt-0 ml-0 z-100 overflow-clip relative">
            <div
                className="absolute inset-0 bg-blend-overlay"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            {/* Foreground Black Cutout Overlay */}
            {/*<img*/}
            {/*    src="/backgrounds/LandingPage_CustomBlob.svg"*/}
            {/*    alt="Foreground cutout"*/}
            {/*    className="absolute inset-0 w-full h-full object-cover -z-10"*/}
            {/*/>*/}

            {/* Hero Content */}
            <main className="relative z-10 flex flex-col justify-center text-start px-6 py-32  h-full md:ml-10">
                <h1 className={"text-secondary text-4xl sm:text-6xl lg:text-8xl"}>
                    {t(title)}
                </h1>
                <p className=" sm:text-2xl lg:text-4xl text-secondary">
                    {t(subtitle)}

                </p>
            </main>
        </section>
    )
}