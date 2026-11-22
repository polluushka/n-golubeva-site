import { notFound } from "next/navigation";

import { translations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Works from "@/components/Works";

type PageProp = {
    params: Promise<{ locale: Locale }>;
}

export default async function Page({ params } : PageProp) {
    const { locale } = await params;

    const currentLocale: Locale = locale;
    const content = translations[currentLocale];

    if (locale !== "ru" && locale !== "en") notFound();

    return(
        <div className="app">
            <div className="custom-container">
                <Header locale={ currentLocale } navigation={ content.navigation } name={ content.name } />
                <Home content={ content.home } />
                <Works title_block={ content.navigation.works } works={ content.works } />
            </div>
        </div>
    )
}