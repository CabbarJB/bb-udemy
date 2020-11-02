import React, {Component} from 'react';
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import {Route} from 'react-router-dom'
import ContactData from "../ContactData/ContactData";
import {connect} from 'react-redux'
class Checkout extends Component {
    // state = {
    //     ingredients: {
    //         salad: 0,
    //         meat: 0,
    //         cheese: 0,
    //         bacon: 0
    //     }
    // }
    historyGoBack = () => {
        this.props.history.goBack()
    }
    componentDidMount() {
        // let ingredients = {};
        // console.log(this.props.location.search)
        // let query = new URLSearchParams(this.props.location.search)
        // for(let i of query.entries()){
        //     ingredients[i[0]] = Number(i[1]);
        // }
        // this.setState({ingredients:ingredients})

    }

    render() {
        return (
            <div>

                <CheckoutSummary {...this.props} ingredients={this.props.ings}/>
                <Route path={'/checkout/contact-data'} component={ContactData}/>
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return{
        ings:state.ingredients,
        price:state.totalPrice
    }
};
//
// const mapDispatchToProps = dispatch=>{
//     return {
//
//     }
// }
export default connect(mapStateToProps)(Checkout);