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
        home: {
            title_normal: "Shaping spaces,",
            title_italic: "connecting nature",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis.",
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
        home: {
            title_normal: "Shaping spaces,",
            title_italic: "connecting nature",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis.",
            button: "Contact me"
        }
    },
}

export type Locale = keyof typeof translations;