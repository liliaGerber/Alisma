import WaveHero from "@/ui/components/WaveHeroBanner";
import OurMission from "@/ui/sections/LandingPage/OurMission";
import WhoWeAre from "@/ui/sections/LandingPage/WhoWeAre";
import Projects from "@/ui/sections/LandingPage/Projects";
import JoinSectionALISMA from "@/ui/sections/LandingPage/joinmember";

export default function LandingPage () {
    return(
        <>
            <WaveHero/>
            <OurMission/>
            <WhoWeAre/>
            <Projects/>
            <JoinSectionALISMA/>
        </>
    )
}