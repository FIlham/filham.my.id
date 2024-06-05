import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Navigation() {
    const [navActive, setNavActive] = useState(false);

    function toggleNav(button: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log("clikced");
        const buttonTarget = button.currentTarget;
        if (buttonTarget.id == "open-button") {
            setNavActive(true);
        } else {
            setNavActive(false);
        }
    }

    return (
        <>
            <button className="nav-button btn p-0 bg-transparent sticky left-[85%] top-[85%] md:left-[95%] z-40 outline-none border-none" id="open-button" onClick={(e) => toggleNav(e)}>
                <Icon icon="solar:hamburger-menu-bold" width={50} color="oklch(24.1559% .049362 89.070594 / 1)" />
            </button>
            <nav className={`bg-primary-content fixed w-56 rounded-box -right-56 top-0 h-screen transition-all duration-300 z-50 ${navActive ? "active" : ""}`}>
                <ul className="menu pt-[15%]">
                    <li>
                        <a href="#home">Beranda</a>
                    </li>
                    <li>
                        <a href="#about">Tentang</a>
                    </li>
                    <li>
                        <a href="#projects">Karya</a>
                    </li>
                    <li>
                        <a href="#contacts">Kontak</a>
                    </li>
                </ul>
                <button className="btn absolute top-[85%] left-4 bg-transparent p-0" id="close-button" onClick={(e) => toggleNav(e)}>
                    <Icon icon="carbon:close-outline" width={50} color="oklch(24.1559% .049362 89.070594 / 1)" />
                </button>
            </nav>
        </>
    );
}

export default Navigation;
