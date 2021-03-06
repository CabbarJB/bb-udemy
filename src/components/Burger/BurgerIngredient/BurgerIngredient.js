import React from "react";
import css from './BurgerIngredient.module.css'
import propTypes from 'prop-types'
const burgerIngredient = (props)=>{
    let ingredient = null;

    switch (props.type) {
        case('bread-top'): ingredient = <div className={css.BreadTop}>
            <div className={css.Seeds1}></div>
            <div className={css.Seeds2}></div>

        </div>
            break;
        case ('bread-bottom'): ingredient= <div className={css.BreadBottom}></div>
            break;
        case ('meat'): ingredient= <div className={css.Meat}></div>
            break;
        case ('salad'): ingredient= <div className={css.Salad}></div>
            break;
        case ('cheese'): ingredient= <div className={css.Cheese}></div>
            break;
        case ('bacon'): ingredient= <div className={css.Bacon}></div>
            break;
        default:ingredient = null;
            break;
    }

    return ingredient
};


burgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}
export default burgerIngredient