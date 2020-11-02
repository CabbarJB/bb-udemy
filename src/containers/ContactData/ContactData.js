import React, {Component} from 'react';
import Input from '../../shared/Input/Input'
import axios from '../../axios/axios-orders'
import Button from '../../shared/Button/Button'
import {connect} from 'react-redux'
class ContactData extends Component {
    state = {
        loading:false,
        inputs : {
            name:{
                label:'Name',
                type:'text',
                placeholder: 'Name',
                value:'',
                validation:{
                    required:true,
                    minLength:5
                },
                valid:false,
                touched:false,
                errMsg:'duz yazda lom'
            },
            surname:{
                label:'Last Name',
                type:'text',
                placeholder: 'Last Name',
                value:'',
                validation:{
                    required:true,
                    minLength:5
                },
                valid:false,
                touched:false,
                errMsg:'duz yazda lom',
            },
            address:{
                label:'Address',
                type:'text',
                placeholder: 'Address',
                value:'',
                validation:{
                    required:true,
                    maxLength:8,
                },
                valid:false,
                touched:false,
                errMsg:'duz yazda lom'
            },

        },
        formIsValid:false
    }
    inputChange = (e,input)=>{
        let inputs = {...this.state.inputs};
        inputs[input].value = e.target.value;
        inputs[input].valid = this.checkValidation(inputs[input].value,inputs[input].validation);
        inputs[input].touched = true;
        let formIsValid = true;
        Object.keys(this.state.inputs).map(item=>{
            // if (!this.state.inputs[item].valid===true){
            //     formIsValid = false;
            //     return;
            // }

            formIsValid = this.state.inputs[item].valid && formIsValid

        })
        this.setState({
            inputs:inputs,
            formIsValid:formIsValid
        })
    };
    checkValidation = (value,rules)=>{
        let isValid = true;
        if (rules.required){
            isValid = value.trim() !=='' && isValid;
        }
        if (rules.minLength){
            isValid = value.trim().length >=Number(rules.minLength) && isValid
        }
        if (rules.maxLength){
            isValid = value.trim().length <=Number(rules.maxLength) && isValid
        }
        return isValid;
    }
    orderHandler = (e)=>{
        e.preventDefault();
        let formValues = {};
        if (this.state.formIsValid){
            this.setState({loading:true})

            Object.keys(this.state.inputs).map(a=>{
                formValues[a] = this.state.inputs[a].value;
            })

            const order = {
                ingredients: this.props.ings,
                price: this.props.price,
                customer: {
                    address: formValues.address,
                    name: formValues.name,
                    surname: formValues.surname
                }
            }
            console.log(order)
            axios.post('/orders.json',order).then((response)=>{
                console.log(response)
                this.setState({loading:false})
            });
        }
        else alert('LMAO NIBBA SIKE U THOGUHT')

    }
    render() {
        let form = <p>LOADING...</p>
        if(!this.state.loading){
            form = ( <form action="" onSubmit={this.orderHandler}>
                {
                    Object.keys(this.state.inputs).map(item=>{
                        return <Input touched={this.state.inputs[item].touched} errMsg={this.state.inputs[item].errMsg} invalid={!this.state.inputs[item].valid} value={this.state.inputs[item].value} change={e=>{
                            this.inputChange(e,item)
                        }
                        } placeholder={this.state.inputs[item].placeholder} type={this.state.inputs[item].type} label={this.state.inputs[item].label}/>
                    })}
                <Button disabled={!this.state.formIsValid} type={'Confirm'}>Press me Nigga</Button>
            </form>)

        }
        return (
            form
        );
    }
}
const mapStateToProps = state=>{
    return {
        ings:state.ingredients,
        price:state.totalPrice
    }
};

export default connect(mapStateToProps)(ContactData);