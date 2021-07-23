import React from 'react';
import './Product.css'

const Product = (props) => {
    const { addToCart, product } = props;


    return (
        <div className="pd-style">
            <h4>{product.name}</h4>
            <p>price: {product.price}</p>
            <button
                onClick={() => addToCart(product.id, product.name)}
            >add to cart</button>
        </div>
    );
};

export default Product;