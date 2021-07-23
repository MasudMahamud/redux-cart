import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const initialState = {
    cart: [],
    product: [
        { name: 'Nokia A11', price: 20000, id: 1 },
        { name: 'Samsung M12', price: 14700, id: 2 },
        { name: 'Redmi MI', price: 22000, id: 3 },
        { name: 'Poco M3', price: 16000, id: 4 },
        { name: 'Realme C21', price: 12000, id: 5 },
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id)
            return { ...state, cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;
