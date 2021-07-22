import React from 'react';
import Product from '../Product/Product';

const products = [
    {name: 'Nokia', price:20000, id: 1},
    {name: 'Samsung', price:14700, id: 2},
    {name: 'Redmi', price:22000, id: 3},
    {name: 'Poco', price:16000, id: 4},
    {name: 'Realme', price:12000, id: 5},
]

const Shop = () => {
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product product={pd} >  </Product> ) 
            }
        </div>
    );
};

export default Shop;