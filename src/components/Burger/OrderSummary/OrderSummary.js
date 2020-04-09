import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This could be functional components changed to class to check lifecycle hookd 
    componentDidUpdate() {
        console.log("order summary will update")
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>
                );
            })


        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>Your delicious burger with following ingredients : </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price :{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        )
    }
}



export default OrderSummary;