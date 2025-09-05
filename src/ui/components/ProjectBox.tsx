import { useTranslation } from "react-i18next"

interface ProjectBoxProps {
    img: string
    titleKey: string
    textKey: string
    action: () => void
}

export default function ProjectBox({ img, titleKey, textKey, action }: ProjectBoxProps) {
    const { t } = useTranslation()

    return (
        <div className="w-full mt-4">
            <button
                className="p-0 m-0 bg-transparent border-none outline-none transition-opacity hover:opacity-50 align-middle"
                onClick={action}
            >
                <div className="w-[80%] ml-[10%] aspect-[4/3] overflow-hidden rounded-lg my-5">
                    <img
                        src={img}
                        alt={t(titleKey)}
                        className="w-full h-full object-cover"
                    />
                </div>
            </button>
            <h3 className="text-lg font-extrabold pb-2 mt-0">{t(titleKey)}</h3>
            <p className="text-sm w-[80%] text-middle  ml-[10%]">{t(textKey)}</p>
        </div>
    )
}
