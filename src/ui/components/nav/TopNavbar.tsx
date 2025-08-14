import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import Logo from "@/assets/icons/Logo.svg?react";
import BurgerIcon from "@/assets/icons/BurgerIcon.svg?react";
import LanguageSwitcher from "../generics/LanguageSwitcher";
import {ChevronDown} from "lucide-react";
import {useTranslation} from "react-i18next";
import mainInfo from '@/assets/data/mainInformation.json'

export default function TopNavbar() {
    const {t} = useTranslation();
    const [scrollY, setScrollY] = useState(0);
    const [sidebarOpen, toggleSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkStructure = [
        {
            section: "main",
            links: [
                {name: "ourCommunity", to: "/our-community"},
                {name: "news", to: "/news"},
            ],
        },
        {
            section: "about",
            links: [
                {name: "aboutUs", to: "/about"},
                {name: "contact", to: "/contact"},
                {name: "faq", to: "/faq"},
                {name: "partners", to: "/partners"},
            ],
        },
        {
            section: "projects",
            links: [
                {name: "htl-girls", to: "/htl-girls"},
                {name: "htl-boys", to: "/htl-boys"},
                {name: "events", to: "/event"},
            ],
        },
    ];
    return (
        <>
            <Sidebar
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                linkItems={linkStructure}
            />
            {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar}/>}

            <nav
                className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 bg-primary flex items-center justify-center ${
                    scrollY > 100
                        ? " h-[100px] lg:h-[60px]"
                        : "h-[120px] lg:h-[80px] shadow-sm "
                }`}
            >
                <div className="container flex items-center justify-between h-full px-5">
                    <Link to="/" className="flex flex-row items-center space-x-3">
                        <Logo
                            className={`bg-fit w-25 h-25 max-h-[100px]`}
                        />
                    </Link>

                    <button
                        className="lg:hidden p-2 text-4xl"
                        onClick={() => toggleSidebar(!sidebarOpen)}
                    >
                        <BurgerIcon className={"text-secondary"}/>
                    </button>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-2">
                        {linkStructure[0].links.map(({name, to}) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className="text-sm font-semibold px-4 py-2 transition-colors hover:text-secondary-200 text-secondary"
                                >
                                    {t(`navbar.links.${name}`)}
                                </Link>
                            </li>
                        ))}
                        <li className="relative group">
                            <div
                                className="flex items-center text-sm font-semibold px-4 py-2 text-secondary cursor-pointer group-hover:text-secondary-200">
                                <span>{t("navbar.sections.projects")}</span>
                                <ChevronDown
                                    size={16}
                                    className="ml-1 transition-transform group-hover:rotate-180"
                                />
                            </div>
                            <ul className="absolute left-0 top-full mt-1 bg-primary shadow-lg border border-neutral-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50 min-w-[240px] p-2 space-y-3">
                                {linkStructure.filter(g => g.section === "projects").map((group) => (
                                    <div key={group.section} className="px-2">
                                        {group.links.map(({name, to}) => (
                                            <li key={to}>
                                                <Link
                                                    to={to}
                                                    className="block px-2 py-1 text-sm font-medium text-secondary hover:text-secondary-200 transition"
                                                >
                                                    {t(`navbar.links.${name}`)}
                                                </Link>
                                            </li>
                                        ))}
                                    </div>
                                ))}
                            </ul>
                        </li>

                        <li className="relative group">
                            <div
                                className="flex items-center text-sm font-semibold px-4 py-2 text-secondary cursor-pointer group-hover:text-secondary-200">
                                <span>{t("navbar.sections.about")}</span>
                                <ChevronDown
                                    size={16}
                                    className="ml-1 transition-transform group-hover:rotate-180"
                                />
                            </div>
                            <ul className="absolute left-0 top-full mt-1 bg-primary shadow-lg border border-neutral-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50 min-w-[240px] p-2 space-y-3">
                                {linkStructure.filter(g => g.section === "about").map((group) => (
                                    <div key={group.section} className="px-2">
                                        {group.links.map(({name, to}) => (
                                            <li key={to}>
                                                <Link
                                                    to={to}
                                                    className="block px-2 py-1 text-sm font-medium text-secondary hover:text-secondary-200 transition"
                                                >
                                                    {t(`navbar.links.${name}`)}
                                                </Link>
                                            </li>
                                        ))}
                                    </div>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    {/* Right Section */}
                    <ul className="hidden lg:flex items-center gap-2">
{/*                        <li>
                            <Link
                                to="/login"
                                className="text-sm font-semibold text-secondary px-2 py-2"
                            >
                                {t("navbar.links.login")}
                            </Link>
                        </li>*/}
                        <li>
                            <LanguageSwitcher/>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
