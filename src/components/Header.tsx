import type { Locale } from "@/lib/i18n"

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
                <a className="logo-link" href="#home">{ name }</a>
            </div>
            <nav className="header-nav">
                <a className="header-link" href="#home">{ navigation.home }</a>
                <a className="header-link" href="#works">{ navigation.works }</a>
                <a className="header-link" href="#about">{ navigation.about }</a>
                <a className="header-link" href="#experience">{ navigation.experience }</a>
                <a className="header-link" href="#contacts">{ navigation.contacts }</a>                
            </nav>
        </header>
    )
}

export default Header;