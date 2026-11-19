export const translations = {
    ru: {
        name: "НАТАЛЬЯ ГОЛУБЕВА",
        navigation: {
            home: "Главная",
            works: "Портфолио",
            about: "Обо мне",
            experience: "Опыт и образование",
            contacts: "Контакты"
        },
        main: {
            title: "",
            description: "",
            button: "Связаться"
        }
    },

    en: {
        name: "NATALYA GOLUBEVA",
        navigation: {
            home: "Home",
            works: "Works",
            about: "About",
            experience: "Experience",
            contacts: "Contacts"
        },
        main: {
            title: "",
            description: "",
            button: "Сontact me"
        }
    },
}

export type Locale = keyof typeof translations;