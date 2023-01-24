import React from "react";

const CartCard = ({cake}) => {
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
      <h4 className="colored-text">$45.99</h4>
    </div>
  );
};

export default CartCard;
