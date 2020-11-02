import React from "react";
import css from './Header.module.css';
import Logo from './Logo/Logo'
import NavItem from "./NavItem/NavItem";
const navItems = ['Home', 'Burger Builder', 'About'];
const header = props => {
    return (
        <header className={css.Header}>
            <div className={css.LogoWrapper}>
                <Logo/>
            </div>
            <nav className={css.Nav}>
                {navItems.map(item=>{
                    return <NavItem>
                        {item}
                    </NavItem>
                })}
            </nav>
        </header>
    )
};

export default header;