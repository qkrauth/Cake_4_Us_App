import React from "react";
import useCurrency from "../hooks/useCurrency";

const CartCard = ({cake}) => {
  const price = useCurrency(cake.cost)
  return (
    <div className="cart-item">
      <img
        src="https://www.lifeloveandsugar.com/wp-content/uploads/2014/08/Best-Moist-Chocolate-Cake1-1.jpg"
        alt=""
      />
      <div className="cart-info">
        <h2>{cake.name}</h2>
        <h4>{cake.base}</h4>
        <ul>
          {cake.extras.map((x) => <li>{x}</li>)}
        </ul>
      </div>
      <h4 className="card-total">{price}</h4>
    </div>
  );
};

export default CartCard;
