import WaveHero from "@/ui/sections/LandingPage/WaveHeroBanner";
import OurMission from "@/ui/sections/LandingPage/OurMission";
import WhoWeAre from "@/ui/sections/LandingPage/WhoWeAre";
import Projects from "@/ui/sections/LandingPage/Projects";
import JoinSectionALISMA from "@/ui/sections/LandingPage/joinmember";
import {useEffect} from "react";

export default function LandingPage () {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return(
        <>
            <WaveHero/>
            <OurMission/>
            <Projects/>
            <JoinSectionALISMA/>
        </>
    )
}