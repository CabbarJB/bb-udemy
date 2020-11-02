import React from "react";
import css from './Modal.module.css'
import Button from '../../shared/Button/Button'
const modal = (props)=>{
    return(
        props.show ?
        <div onClick={props.hideModal} className={css.ModalBg}>
            <div className={css.Modal} onClick={e=>{
                e.stopPropagation()
            }}>
                {props.children}
            </div>
        </div> : null
    )
};

export default modal;