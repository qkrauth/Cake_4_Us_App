import React, {useContext} from "react";
import GlobalContext from "../store/GlobalContext";
import CartCard from "../components/CartCard";
import useCurrency from "../hooks/useCurrency";

const CartScreen = () => {
    const {state, dispatch} = useContext(GlobalContext);

    const cartDisplay = state.cart.map((cake) => {
        return <CartCard cake={cake} />
    });

    const cartTotal = state.cart.reduce((acc, cake) => {
        return acc + cake.cost
    }, 0);

    const total = useCurrency(cartTotal)

    return (
        <div className="main-page">
            <h1>My Cart</h1>
            <h2>{total}</h2>
            <div className="cart-container">
                {cartDisplay}
            </div>
            <div className="order-button-container">
                <button>Check Out</button>
            </div>
        </div>
    )
};

export default CartScreen;