import { notFound } from "next/navigation";

import { translations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import Header from "@/components/Header";

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
            <div className="container">
                <Header locale={ currentLocale } navigation={ content.navigation } name={ content.name }></Header>
            </div>
        </div>
    )
}