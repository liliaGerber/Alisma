import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import AboutUsPage from "./ui/pages/AboutUsPage";
import TopNavbar from "./ui/components/nav/TopNavbar";
import LoginPageWithBackground from "./ui/pages/LoginPageWithBackground";
import ComingSoonPage from "./ui/pages/ComingSoonPage";
import {ContactSection} from "./ui/sections/ContactSection";
import '@/config/i18n'
import i18n from '@/config/i18n';
import {I18nextProvider} from "react-i18next";
import {useEffect, useState} from "react";
import {FAQComponent} from "@/ui/components/FAQComponent";
import OurProjectsPage from "@/ui/pages/OurProjectsPage";
import LandingPage from "@/ui/pages/LandingPage";
import NewsPage from "@/ui/pages/NewsPage";
import CommunityPage from "@/ui/pages/CommunityPage";


function App() {
    const [, setRefresh] = useState(0);

    useEffect(() => {
        const handler = () => setRefresh((r) => r + 1);
        i18n.on("languageChanged", handler);
        return () => {
            i18n.off("languageChanged", handler);
        };
    }, []);
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter key={i18n.language}>
                    <TopNavbar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}></Route>
                        <Route path="/about" element={<AboutUsPage/>}></Route>
                        <Route path="/faq" element={<FAQComponent/>}></Route>
                        <Route path="/contact" element={<ContactSection/>}></Route>
                        <Route path="/login" element={<LoginPageWithBackground/>}></Route>
                        <Route path="/coming-soon" element={<ComingSoonPage/>}></Route>
                        <Route path="/our-projects" element={<OurProjectsPage/>}></Route>
                        <Route path="/news" element={<NewsPage/>}></Route>
                        <Route path="/community" element={<CommunityPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </I18nextProvider>
        </>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App/>);

export default App;