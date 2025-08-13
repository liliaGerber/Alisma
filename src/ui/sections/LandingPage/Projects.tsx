
import ProjectBox from '../../components/ProjectBox'
import ProjectsList from '@/assets/data/projects.json'
import {useTranslation} from "react-i18next";


export default function Projects() {
    const {t} = useTranslation()
    return (
        <section id="projects-section" className="w-full h-screen overflow-y-auto mt-20">
            <div className="text-center max-[860px]:text-center pt-[4rem] mt-0 h-full bg-primary">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-3xl font-extrabold">{t("projects.title")}</h1>
                    <p className="text-sm mt-2">
                        {t("projects.text")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center w-[80vw] ml-[10vw] mt-8">
                    {
                        ProjectsList.map((proj, i) => (
                    <ProjectBox
                        key={i}
                        img={proj.imgUrl}
                        title={proj.title}
                        text={proj.text}
                        action={() => alert('clicked')}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}
