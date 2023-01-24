import React, {useContext} from "react";
import GlobalContext from "../store/GlobalContext";
import CartCard from "../components/CartCard";

const CartScreen = () => {
    const {state, dispatch} = useContext(GlobalContext);

    const cartDisplay = state.cart.map((cake) => {
        return <CartCard cake={cake} />
    });

    return (
        <div className="main-page">
            <h1>My Cart</h1>
            <div className="cart-container">
                {cartDisplay}
            </div>
        </div>
    )
};

export default CartScreen;