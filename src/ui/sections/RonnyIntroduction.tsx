import RonnyPortrait from '/team/Portrait_Ronny.png'
import { useTranslation } from 'react-i18next'

const RonnyIntroduction = () => {
    const { t } = useTranslation()

    return (
        <section className="lg:min-h-screen w-full" id={"ronny-introduction"}>
            <div className="flex flex-col items-center w-[70vw] mx-auto py-20">
                <div className="h-fit w-full flex flex-col lg:flex-row justify-center items-center top-0">
                    <div className="flex flex-col h-fit top-0">
                        <span className="text-8xl text-accent h-10 self-start mb-1">"</span>
                        <h2 className="text-center pl-10 pr-8">
                            {t("courses.ronny_quote")}
                        </h2>
                        <span className="text-8xl text-accent h-10 self-end">"</span>
                    </div>
                    <img
                        src={RonnyPortrait}
                        alt="Ronny Hollenstein"
                        className="max-h-[50vh] mt-15 lg:mt-0 lg:ml-20 rounded"
                    />
                </div>
                <div className="w-full mx-auto mt-8 lg:mt-15">
                    <h4 className="text-secondary text-xl font-semibold">Ronny Hollenstein</h4>
                    <p className="w-full mx-auto text-secondary whitespace-pre-line">
                        {t("courses.ronny_introduction")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default RonnyIntroduction;
