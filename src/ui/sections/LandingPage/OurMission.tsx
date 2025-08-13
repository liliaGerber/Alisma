import {SectionSeparatorWave} from "@/ui/components/generics/Waves";

export default function OurMission() {
    return (
        <>
            <section className="bg-primary relative">
                <div className="  max-w-4xl px-15 py-20 text-start">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-secondary">
                        Unsere Mission
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        mollis, massa ac porta ultricies, nisi nibh pharetra mauris, sed
                        condimentum mi elit vel arcu. Integer mattis, arcu nec varius
                        sollicitudin, metus ex rhoncus urna, et suscipit lectus risus eget
                        neque.
                    </p>
                </div>
                <SectionSeparatorWave className="text-primary absolute bottom-[-1] left-0 right-0 z-0 rotate-180"/>
            </section>
        </>

    )
}