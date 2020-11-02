import React from "react";
import css from './Button.module.css'
const button = (props)=>{
    return(
        <button disabled={props.disabled} onClick={props.hide} className={[css.Button,css[props.type]].join(' ')}>
            {props.children}
        </button>
    )
}

export default button;