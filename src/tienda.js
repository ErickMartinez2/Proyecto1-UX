import {createStore} from 'redux';

const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.producto)
        };
    } else if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cart: state.cart.filter(producto => producto.nombre !== action.producto.nombre)
        };
    }
    return state;
}

export default createStore(reducer, { cart: [] });