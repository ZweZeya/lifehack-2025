import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

import "./NavigationMenu.scss";

const NavigationMenu = () => {
    const data = {
        "About": "#about",
        "Challenge": "#problem-statements",
        "Timeline": "#timeline",
        "Prizes": "#prizes",
        "FAQs": "#faqs",
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > window.innerHeight);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <Menu
            right
            className="navigation-menu"
            burgerBarClassName={`.bm-burger-bars bm-burger-bars${scrolled ? "--scrolled" : ""}`}
            pageWrapId="page-wrap"
            outerContainerId="root">
            {
                Object.entries(data).map(([label, href], i) => <a href={href} key={i}>{label}</a>)
            }
        </Menu>
    );
}

export default NavigationMenu;
