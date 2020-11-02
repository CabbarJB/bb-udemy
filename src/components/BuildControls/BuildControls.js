import React from "react";
import css from "./BuildControls.module.css"
import SingleBuildControl from "./SingleBuildControl/SingleBuildControl";
const buildControls = (props)=>{
    // let ingredientsCount = Object.keys(props.ingredients);
    return (
        <div className={css.BuildControlsWrapper}>
            <p>{props.price}$</p>
            {
                props.controls.map((item,index)=>{
                    return <SingleBuildControl
                        removeIng={()=>{
                        props.removeIngredient(item.type)
                        }}
                        addIng={()=>{
                        props.addIngredient(item.type)
                        }}
                        key={item.name}
                        name={item.name}
                        disabled={props.disabled[item.type]}
                    />
                })
            }
            {/*{*/}
            {/*    ingredientsCount.map((item,index)=>{*/}
            {/*        return <SingleBuildControl name={item}/>*/}
            {/*    })*/}
            {/*}*/}
            <button onClick={props.clicked} disabled={!props.purchasable}>ORDER</button>
        </div>
    )
};



export default buildControls;