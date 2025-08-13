// Sidebar.tsx
import Close from '@/assets/icons/CloseIcon.svg?react';
import { Link, NavLink } from 'react-router-dom';
import LanguageSwitcher from '@/ui/components/generics/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import  Logo  from '@/assets/icons/Logo.svg?react';

import mainInformation from '@/assets/data/mainInformation.json'
interface SidebarProps {
    sidebarOpen: boolean;
    toggleSidebar: (open: boolean) => void;
    linkItems: { section: string; links: { name: string; to: string }[] }[];
}

export default function Sidebar({ sidebarOpen, toggleSidebar, linkItems }: SidebarProps) {
    const { t } = useTranslation();

    return (
        <nav
            className={`fixed top-0 z-[9999] bg-primary pl-8 py-0 transition-all duration-300 animate h-screen ${
                sidebarOpen ? 'right-0 w-screen' : '-right-[400px] w-[400px]'
            } max-[400px]:w-full`}
        >
            <div className="flex flex-col pb-5">
                <div className="flex-row flex justify-end gap-x-4 w-full text-4xl pr-3 mt-2">
                    <div><LanguageSwitcher /></div>
                    <button onClick={() => toggleSidebar(!sidebarOpen)} className="p-2 bg-transparent">
                        <Close />
                    </button>
                </div>
                <Link to="/" className="flex justify-start items-center w-full max-h-[80px] overflow-hidden">
                    <Logo className="max-h-[60px] max-w-[60px] w-full h-full object-contain" />
                    <h1 className="text-secondary text-4xl font-extrabold ml-4 truncate">{mainInformation.company_name}</h1>
                </Link>
            </div>

            <ul className="flex flex-col items-start pr-10 py-3 text-2xl font-semibold text-secondary">
                {linkItems.map((group) => (
                    <div key={group.section} className="w-full px-2">
                        <h4 className="text-lg text-secondary-400 font-semibold uppercase mb-1">
                            {t(`navbar.sections.${group.section}`)}
                        </h4>
                        {group.links.map(({ name, to }) => (
                            <li key={to} className="py-2 hover:text-accent w-full">
                                <NavLink
                                    onClick={() => toggleSidebar(!sidebarOpen)}
                                    to={to}
                                    className="cursor-pointer px-4 py-2 block"
                                >
                                    {t(`navbar.links.${name}`)}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                ))}
                <li key="login" className="py-2 hover:text-accent w-full">
                    <NavLink
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        to="/login"
                        className="cursor-pointer px-4 py-2 block"
                    >
                        {t('navbar.links.login')}
                    </NavLink>
                </li>
                <li key="get-started" className="py-2 hover:text-accent w-full">
                    <NavLink
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        to="/coming-soon"
                        className="cursor-pointer px-4 py-2 block"
                    >
                        {t('navbar.links.getStarted')}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
