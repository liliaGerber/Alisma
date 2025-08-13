import {TopWave, BottomWave} from "@/ui/components/generics/Waves";
import WaveHeroImage from "@/assets/img/WaveHeroImage.png"


export default function WaveHero() {
    return (
        <header className="relative bg-secondary h-screen overflow-hidden">
            {/* Hero content with background image */}
            <div className="relative z-10 p-5 bg-secondary text-start ">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-20 text-primary tracking-tight">
                    Für Gemeinschaft, Austausch und Förderung.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-primary opacity-90">
                    Kurzer Untertitel mit Blah blah.
                </p>
            </div>
            <div
                className="relative grid place-items-center px-6 py-70  bg-center bg-cover"
                style={{ backgroundImage: `url(${WaveHeroImage})` }}
            >
                {/* Top wave (green) lowered but OVER the image */}
                <TopWave className="pointer-events-none text-secondary absolute scale-x-[-1] left-0 right-0  z-20" />

            </div>

            {/* Bottom wave (white) to transition into next section */}
            {/*<BottomWave className="pointer-events-none text-primary" />*/}
        </header>
    );
}