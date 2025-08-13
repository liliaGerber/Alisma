import UnstyledScrollToButton from "@/ui/components/generics/UnstyledScrollToButton";
import {useTranslation} from "react-i18next";

export default function CourseOverviewHeroBannerNew() {
    const imageUrl = '/backgrounds/GIftedInfoHeroabstractBackground.png'
    const {t} = useTranslation()
    return (
        <section
            id="hero-banner-cebra"
            className="w-screen h-[65vh] lg:h-screen mt-0 ml-0 overflow-clip z-100 relative">
            <div
                className="absolute inset-0 bg-black/50 bg-blend-overlay"
                style={{backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            ></div>

            {/* Hero Content */}
            <main
                className="relative z-10 flex flex-col justify-center text-start px-6 py-32 max-w-5xl gap-y-8 h-full md:ml-10">
                <h1 className={"text-primary text-4xl sm:text-6xl lg:text-6xl"}>
                    {t("courses.hero_title")}
                </h1>
                <p className=" text-2xl lg:text-4xl text-primary">
                    {t("courses.hero_subtitle")}
                </p>
                <div className="flex flex-row gap-4 ">
                    <UnstyledScrollToButton
                        className="bg-transparent border-primary border-2 text-primary p-3 font-semibold rounded"
                        targetId={"course-carousel"}>{t("courses.hero_btn_courses")}</UnstyledScrollToButton>
                    <UnstyledScrollToButton
                        className="bg-transparent border-primary border-2 text-primary p-3 font-semibold rounded"
                        targetId={"ronny-introduction"}>{t("courses.hero_btn_learnmore")}</UnstyledScrollToButton>
                </div>
            </main>
        </section>
    )
}