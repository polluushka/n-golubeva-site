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
            button: "Связаться",
            img: "#"
        },
        works: [
            {
                name_project: "Название проекта №1",
                category: "Категория",
                adress: "Адрес",
                img: "#",
            },
            {
                name_project: "Название проекта №2",
                category: "Категория",
                adress: "Адрес",
                img: "#",
            },
            {
                name_project: "Название проекта №3",
                category: "Категория",
                adress: "Адрес",
                img: "#",
            },
            {
                name_project: "Название проекта №4",
                category: "Категория",
                adress: "Адрес",
                img: "#",
            }
        ]
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
        },
        works: [
            {
                name_project: "Name Prpject #1",
                category: "Category",
                adress: "Address",
                img: "#",
            },
            {
                name_project: "Name Prpject #2",
                category: "Category",
                adress: "Address",
                img: "#",
            },
            {
                name_project: "Name Prpject #3",
                category: "Category",
                adress: "Address",
                img: "#",
            },
            {
                name_project: "Name Prpject #4",
                category: "Category",
                adress: "Address",
                img: "#",
            }
        ]
    },
}

export type Locale = keyof typeof translations;