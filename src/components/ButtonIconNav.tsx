"use client";
import { ReactNode } from "react";

type ButtonIconProps = {
    icon: ReactNode;
    classname: string
}

const ButtonIconNav = ({ icon, classname }: ButtonIconProps) => {

    function toogleNavOpen() {
        const headerNav = document.querySelector(".header-nav-container");
        const body = document.querySelector("body");
        headerNav?.classList.toggle("header-nav-open");
        headerNav?.classList.contains("header-nav-open") ? body?.classList.add("inactive-bg") : body?.classList.remove("inactive-bg");
    }

    return (
        <button className={ classname } onClick={ () => toogleNavOpen() }>{ icon }</button>
    )
}

export default ButtonIconNav;