import TeamSlider from "@/ui/components/TeamSlider";
import {SectionSeparatorWave} from "@/ui/components/generics/Waves";

export default function WhoWeAre(){
    return (
        <section className={"w-screen pt-25 bg-secondary"}>
            <div className=" max-w-4xl px-15 text-start">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                    Wer wir sind
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    mollis, massa ac porta ultricies, nisi nibh pharetra mauris, sed
                    condimentum mi elit vel arcu. Integer mattis, arcu nec varius
                    sollicitudin, metus ex rhoncus urna, et suscipit lectus risus eget
                    neque.
                </p>
            </div>
            <TeamSlider/>
            <SectionSeparatorWave className="text-secondary absolute bottom-[-1] left-0 right-0 z-20 rotate-180"/>

        </section>
    )
}