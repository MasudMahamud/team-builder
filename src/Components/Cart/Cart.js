import React from 'react';
import  './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
   
//     let totalBalance = 0;
//    for (let i = 0; i < cart.length; i++) {
//        const team = cart[i];
//         totalBalance = totalBalance + team.balance;
        
//     }
//     const totalBalance = cart.reduce( (sum, team) => sum + team.balance ,0)
    
    return (
        <div>
            {cart.map(cart => <div className='auto'> You added : {cart.name}</div> )}
        </div>
    );
};

export default Cart;