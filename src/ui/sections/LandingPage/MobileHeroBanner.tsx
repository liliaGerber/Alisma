import ScrollToButton from "../../components/generics/ScrollToButton";
import {useTranslation} from "react-i18next";

type MobileHeroBannerProps = {
    targetId: string;
}


export default function MobileHeroBanner({targetId}: MobileHeroBannerProps) {
    const imageUrl = "/GIftedInfoHeroabstractBackground.png"
    const {t} = useTranslation();
    return (
        <section
            id="hero-banner-mobile-cebra"
            className="w-screen h-screen ml-0 overflow-clip relative">
            <div
                className="absolute inset-0  bg-blend-overlay"
                style={{backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            ></div>
            {/* Foreground Black Cutout Overlay */}
            {/*<img*/}
            {/*    src="/backgrounds/LandingPage_CustomBlob.svg"*/}
            {/*    alt="Foreground cutout"*/}
            {/*    className="absolute inset-0 w-full h-full object-cover -z-10"*/}
            {/*/>*/}

            {/* Hero Content */}
            <main className="relative z-10 flex flex-col justify-center text-start  h-full w-screen ">
                {/*<div className="flex flex-row w-full h-fit bg-primary  p-10">*/}
                <div
                    className=" py-12 flex flex-col justify-center items-center text-center h-fit rounded w-[80vw] mx-auto bg-primary p-10">
                    <h1 className="text-5xl">                            {t('lp_s0_a')}
                    </h1>
                    <h4 className="mt-2 text-2xl font-medium text-secondary-600">
                        {t('lp_s0_b')}
                    </h4>
                    <div className="w-full flex items-center mt-10 justify-center  text-center">
                        <ScrollToButton targetId={targetId} isWhite={false} className="w-20 h-20 "/>
                    </div>
                </div>
                {/*</div>*/}
            </main>
        </section>
    )
}

{/*            <section className="w-screen h-screen overflow-hidden">
                            <div className="h-2/5 overflow-hidden">
                <img
                    src={CebrasLogo}
                    alt="Cebras Logo"
                    className="w-full h-full object-cover object-top bg-secondary"
                />
            </div>

                 Center content
                <div className="flex flex-row w-full h-1/5 px-6">
                    <div className=" py-12 flex flex-col justify-center">
                        <h1 className="text-5xl">We are the future.</h1>
                        <h4 className="mt-2 text-2xl font-medium text-secondary-600">
                            The community and platform for bright minds<span className="text-accent">.</span>
                        </h4>
                    </div>
                    <div className="w-[30%] flex items-center justify-center  text-center">
                        <ScrollToButton targetId={targetId} isWhite={false} className="w-20 h-20 " />
                    </div>
                </div>
                            <div className="h-2/5 overflow-hidden">
                <img
                    src={CebrasLogo}
                    alt="Cebras Logo"
                    className="w-full h-full object-cover object-bottom bg-secondary"
                />
            </div>
            </section>*/
}
