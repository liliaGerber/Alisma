import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import mainInformation from '@/assets/data/mainInformation.json'
import {resolveColorBG} from "@/config/ThemeProvider";



export default function FooterSimple() {
    const {t} = useTranslation();
    const {pathname} = useLocation();
    const theme = resolveColorBG(pathname);

    return (
        <footer role="contentinfo" className={`${theme}`}>
            <div
                className="container mx-auto px-4 md:px-6 py-8 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Navigation links */}
                <nav className="flex flex-row items-center z-100 gap-4 md:gap-6">
                    <Link to="/impressum"
                          className="text-md lg:text-sm text-primary font-medium transition-colors hover:text-accent">
                        {t("footer.terms")}
                    </Link>
                    <Link to="/dsgvo"
                          className="text-md lg:text-sm text-primary font-medium transition-colors hover:text-accent">
                        {t("footer.privacy")}
                    </Link>
                    <Link to="/contact"
                          className="text-md text-primary lg:text-sm font-medium transition-colors hover:text-accent">
                        {t("footer.contact")}
                    </Link>
                </nav>

                {/* Copyright info */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <p className="text-md lg:text-sm text-primary">
                        &copy; {new Date().getFullYear()} {mainInformation.company_name}. {t("footer.rights")}
                    </p>
                </div>
            </div>

        </footer>

    );
}
