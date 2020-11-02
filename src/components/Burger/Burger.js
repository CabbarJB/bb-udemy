import React from "react";
import css from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props)=>{
    console.log(props.ingredients)
let ingredientsArray = Object.keys(props.ingredients).map((item)=>{
    return [...Array(props.ingredients[item])].map((a,index)=>{
        return <BurgerIngredient key={item+index} type={item}/>
    })
})
    console.log(ingredientsArray)
    return(
        <div className={css.burgerWrapper}>
            <BurgerIngredient type={'bread-top'}/>
            {
                ingredientsArray.flat().length===0? <p className={css.AddPls}>Add ings pls lol</p> : ingredientsArray

            }
            {console.log(ingredientsArray)}
            <BurgerIngredient type={'bread-bottom'}/>

        </div>
    )
};


export default burger;