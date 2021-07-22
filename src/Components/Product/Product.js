import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price, id } = props.product;
    return (
        <div className="pd-style">
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button>add to cart</button>
        </div>
    );
};

export default Product;