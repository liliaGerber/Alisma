import {useTranslation} from "react-i18next";

export default function AboutUsHeroBanner() {
    const imageUrl = '/backgrounds/GIftedInfoHeroabstractBackground.png'
    const {t} = useTranslation();
    return (
        <section
            id="hero-banner-cebra"
            className="w-screen h-[50vh] lg:h-screen mt-0 ml-0 z-100 overflow-clip relative">
            <div
                className="absolute inset-0 bg-black/50 bg-blend-overlay"
                style={{backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            ></div>
            {/* Foreground Black Cutout Overlay */}
            {/*<img*/}
            {/*    src="/backgrounds/LandingPage_CustomBlob.svg"*/}
            {/*    alt="Foreground cutout"*/}
            {/*    className="absolute inset-0 w-full h-full object-cover -z-10"*/}
            {/*/>*/}

            {/* Hero Content */}
            <main className="relative z-10 flex flex-col justify-center text-start px-6 py-32 max-w-lg h-full md:ml-10">
                <h1 className={"text-primary text-4xl sm:text-6xl lg:text-8xl"}>
                    {t("aboutus_hero_title")}
                </h1>
                <p className=" sm:text-2xl lg:text-4xl text-primary">
                    {t("aboutus_hero_subtitle")}

                </p>
            </main>
        </section>
    )
}