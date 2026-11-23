import type { Locale } from "@/lib/i18n";
import ButtonIconNav from "./ButtonIconNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
    locale: Locale;
    name: string;
    navigation: {
        home: string,
        works: string,
        about: string,
        experience: string,
        contacts: string
    }
}

const Header = ({ locale, navigation, name } : HeaderProps) => {
    const otherLocale = locale === "ru" ? "en" : "ru";

    return(
        <header className="custom-header">
            <div className="logo">
                <a className="text-special logo-link" href="#home">{ name }</a>
            </div>
            <ButtonIconNav icon={ <FontAwesomeIcon icon={faBars} /> } classname="burger-menu" />
            <div className="header-nav-container">
                <ButtonIconNav icon={ <FontAwesomeIcon icon={faXmark} /> } classname="cross-nav" />
                <nav className="header-nav">
                    <a className="text-default header-link" href="#home">{ navigation.home }</a>
                    <a className="text-default header-link" href="#works">{ navigation.works }</a>
                    <a className="text-default header-link" href="#about">{ navigation.about }</a>
                    <a className="text-default header-link" href="#experience">{ navigation.experience }</a>
                    <a className="text-default header-link" href="#contacts">{ navigation.contacts }</a>                
                </nav>
            </div>
            
        </header>
    )
}

export default Header;