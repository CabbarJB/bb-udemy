import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import css from './BuilderPage.module.css'
import Modal from "../../components/Modal/Modal";
import Button from "../../shared/Button/Button";
import axios from '../../axios/axios-orders'
import Checkout from "../Checkout/Checkout";
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
const PRICES = {
    meat: 5,
    salad: 1,
    cheese: 2,
    bacon: 3
};

class BuilderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: [
                {type: 'salad', name: 'Salad'},
                {type: 'bacon', name: 'Bacon'},
                {type: 'meat', name: 'Meat'},
                {type: 'cheese', name: 'Cheese'}
            ],
            purchasable: false,
            isPurchasing: false
        }
        this.addIngredient = (type) => {
            let oldPrice = this.state.totalPrice;
            let newPrice = oldPrice + PRICES[type];

            let oldCount = this.state.ingredients[type];
            let newCount = oldCount + 1;
            let newIngredients = {
                ...this.state.ingredients
            };
            newIngredients[type] = newCount;
            this.setState({ingredients: newIngredients, totalPrice: newPrice});
            this.setPurchasableState(newIngredients)

        }
        this.removeIngredient = (type) => {
            let oldPrice = this.state.totalPrice;
            let newPrice = oldPrice - PRICES[type];
            let oldCount = this.state.ingredients[type]
            let newCount = oldCount - 1;
            if (newCount >= 0) {
                let newIngredients = {
                    ...this.state.ingredients
                }
                newIngredients[type] = newCount;
                this.setState({
                    ingredients: newIngredients, totalPrice: newPrice
                })
                this.setPurchasableState(newIngredients)
            }
        }

        this.checkoutHandler = () => {
            this.setState({isPurchasing: true})
        }
        this.setPurchasableState = (ing) => {

            let sum = Object.keys(ing).map((key) => {
                return ing[key]
            }).reduce((sum, el) => {
                return sum + el
            }, 0)

            return sum>0

        }
        this.hideModal = () => {
            this.setState({isPurchasing: false})
        }
        this.continue = () => {

            let queryString = '';
            let ings = [];
            Object.keys(this.props.ings).map(item=>{
                ings.push(`${encodeURIComponent(item)}=${encodeURIComponent(this.props.ings[item])}`)
            });
            queryString = ings.join('&');

            this.props.history.push('/checkout')

        }
    }


    render() {

        const disabled = {
            ...this.props.ings
        }
        console.log(this.props.totalP)
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        console.log(disabled)
        return (
            <div className={css.BuilderPageWrapper}>
                <Modal hideModal={this.hideModal} show={this.state.isPurchasing}>
                    <p>{this.props.totalP}</p>
                    <Button hide={this.hideModal} type={'Cancel'}>Cancel</Button>
                    <Button hide={this.continue} type={'Confirm'}>Confirm</Button>
                </Modal>
                <Burger ingredients={this.props.ings}/>

                <BuildControls
                    purchasable={this.setPurchasableState(this.props.ings)}
                    price={this.props.totalP}
                    disabled={disabled}
                    removeIngredient={this.props.removeIng}
                    addIngredient={this.props.addIng}
                    controls={this.state.controls}
                    clicked={this.checkoutHandler}
                />
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return {
        ings: state.ingredients,
        totalP: state.totalPrice,
        purchasable: state.purchasable
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        addIng:(ing)=>dispatch({type:'ADD_ING', payload:{
            ing:ing,
            }}),
        removeIng:(ing)=>dispatch({type:'REMOVE_ING',payload: {
            ing:ing,
            }}),
        setPurchasable:()=>dispatch({type:'SET_PURCHASABLE'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BuilderPage);