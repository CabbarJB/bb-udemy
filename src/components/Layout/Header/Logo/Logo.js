import React from "react";
import css from './Logo.module.css';
import LogoImg from '../../../../assets/img/74fb78d3222ba12833ea9275c53a4935-burger-logo-by-vexels.png'

const logo = props=>{
    return(
        <img src={LogoImg} alt="Logo" className={css.Logo}/>
    )
};

export default logo;
