import React from "react";
import css from './NavItem.module.css'

const navItem = props=>{
    return(
        <div className={css.NavItem}>
            <a href="" className={css.NavLink}>{props.children}</a>
        </div>
    )
};

export default navItem;