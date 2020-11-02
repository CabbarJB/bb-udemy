import React from 'react';
import Burger from '../../../components/Burger/Burger'

import Button from  '../../../shared/Button/Button'

const checkoutSummary = (props)=> {
    console.log(props.ingredients)

        return (
            <div>
               <Burger ingredients={props.ingredients}/>

                <Button
                    hide={()=>{
                        props.history.goBack()
                    }}
                    type={'Cancel'}>Cancel</Button>
                <Button
                    hide={()=>{
                        props.history.replace('/checkout/contact-data')
                    }}
                    type={'Confirm'}>Kantinyu</Button>

            </div>
        );
}

export default checkoutSummary;