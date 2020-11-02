import React from "react";
import css from './SingleBuildControl.module.css'

const singleBuildControl = (props)=>{
    return (
        <div className={css.SingleBuildControlWrapper}>
        <p className={css.BuildControlName}>{props.name}</p>
            <div className={css.ButtonsWrapper}>
                <button disabled={props.disabled} className={css.Button} onClick={props.removeIng}>-</button>
                <button onClick={props.addIng} className={css.Button}>+</button>
            </div>
        </div>
    )
}

export default singleBuildControl;