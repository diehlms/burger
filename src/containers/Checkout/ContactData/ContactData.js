import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'

export class ContactData extends Component {
    
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street Name'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zip code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email address'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'fastest'},
                        {value: 'cheapest', displayValue: 'cheapest'}
                    ]
                },
                value: 'fastest'
            }
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }
        
        axios.post('/orders.json', order)
             .then(response => {
                 this.setState({loading: false});
                 this.props.history.push('/');
             })
             .catch(err => {
                 this.setState({loading: false})
             });
    }
    
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                <form>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            elementValue={formElement.config.value}
                        />
                    ))}
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className='ContactData'>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
