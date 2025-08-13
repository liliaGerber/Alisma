import {Login1} from "../components/shadcn/login1";
import backgroundImageUrl from "/backgrounds/GIftedInfoHeroabstractBackgroundInverted.png";
// TODO add functionality

const LoginPageWithBackground = () => {
    return(
        <div className="relative w-screen h-screen">
        <div
            className="absolute inset-0 z-[-5] bg-blend-overlay"
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ></div>
        <Login1 logo={{
            url: "/",
            title: "Login"
        }}/>
        </div>
    )
}
export default LoginPageWithBackground;