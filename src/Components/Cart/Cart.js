import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/CartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h2>This is cart</h2>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}> {pd.name} <button 
                        onClick = {() => removeFromCart(pd.cartId) }
                        >x</button> </li> )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);