import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import style from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Marc N',
                address: {
                    street: 'TestStreet1',
                    zip: '12345',
                    country: 'USA'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest'
        };

        // The .json is sort of a weird thing that Firebase requires
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });  
    }

    render() {
        let form = (
            <form>
                <input className={style.Input} type='text' name='name' placeholder='Your Name' />
                <input className={style.Input} type='email' name='email' placeholder='Your Email' />
                <input className={style.Input} type='text' name='street' placeholder='Street' />
                <input className={style.Input} type='text' name='postal' placeholder='Postal Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={style.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;