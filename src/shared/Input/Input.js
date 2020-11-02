import React from "react";
import css from './Input.module.css'

const input = (props)=>{
    let inputClasses = [];
    let errMsg = null;
    if (props.invalid && props.touched){
        inputClasses.push(css.Invalid)
        errMsg =  <span className={css.Error}>{props.errMsg}</span>
    }

    return (
        <label htmlFor={props.inputId}>
            {props.label}
            <input className={inputClasses.join(' ')} onChange={props.change} value={props.value} placeholder={props.placeholder} type={props.type}/>
            {errMsg}
        </label>
    )
};

export default input;