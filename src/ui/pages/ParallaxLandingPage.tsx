import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useRef} from "react";
import Section from "@/ui/components/generics/Section";
import FooterSimple from "../components/nav/FooterSimple";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CheckIcon} from "lucide-react";
import MobileLandingPage from "@/ui/pages/Mobile/MobileLandingPage";

export default function ParallaxLandingPage() {
    const parallaxRef = useRef<IParallax>(null);
    const {t} = useTranslation();

    return (
        <>
            <Parallax pages={6.5} className="h-full w-full hidden lg:block" ref={parallaxRef}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <Section
                        id="hero"
                        title="lp_s1_a"
                        text="lp_s1_b"
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0.8} speed={0.5}>
                    <Section
                        id="section-1"
                        title="lp_s2_a"
                        text="lp_s2_b"
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={0.5}>
                    <Section
                        id="section-2"
                        title="lp_s3_a"
                        text="lp_s3_b"
                        buttons={
                            <div className="flex gap-4 justify-center flex-wrap">
                                <button className="btn-primary">{t("lp_s3_c")}</button>
                                <button className="btn-primary">{t("lp_s3_d")}</button>
                            </div>
                        }
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={2.4} speed={0.5}>
                    <Section
                        id="section-3"
                        title="lp_s5_a"
                        text="lp_s5_b"
                        buttons={
                            <Link to="/course-overview" className="btn-primary">
                                {t("lp_s5_c")}
                            </Link>
                        }
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={3.2} speed={0.5}>
                    <Section
                        id="section-4"
                        title="lp_s6_a"
                        text="lp_s6_b"
                        buttons={
                            <a href="/course-overview">
                                <button className="btn-primary mt-3">
                                    {t("lp_s6_c")} →
                                </button>
                            </a>
                        }
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={4.0} speed={0.5}>
                    <Section
                        id="section-5"
                        title="lp_s7_a"
                        text="lp_s7_b"
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={4.8} speed={0.5}>
                    <Section
                        id="section-6"
                        title="lp_s8_a"
                        text=""
                        className="text-left"
                        buttons={
                            <ul className="text-secondary text-lg space-y-3">
                                <li className="flex items-start gap-x-3"><CheckIcon className="mt-1"/> {t("lp_s8_b")}
                                </li>
                                <li className="flex items-start gap-x-3"><CheckIcon className="mt-1"/> {t("lp_s8_c")}
                                </li>
                                <li className="flex items-start gap-x-3"><CheckIcon className="mt-1"/> {t("lp_s8_d")}
                                </li>
                                <li className="flex items-start gap-x-3"><CheckIcon className="mt-1"/> {t("lp_s8_e")}
                                </li>
                            </ul>
                        }
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={5.6} speed={0.5}>
                    <Section
                        id="section-7"
                        title="lp_s9_a"
                        text=""
                        buttons={
                            <button className="btn-primary">{t("lp_s9_b")}</button>
                        }
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={6.4} speed={0.5} factor={0.1}>
                    <div className={"items-end  h-full bg-secondary"}>
                        <FooterSimple/>
                    </div>
                </ParallaxLayer>
            </Parallax>
            <MobileLandingPage/>
        </>
    );
}
