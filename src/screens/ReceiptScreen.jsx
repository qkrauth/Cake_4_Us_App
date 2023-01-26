import React, { useState, useEffect, useContext } from "react";
import ReceiptItem from "../components/ReceiptItem";
import useCurrency from "../hooks/useCurrency";
import GlobalContext from "../store/GlobalContext";

const ReceiptScreen = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [order, setOrder] = useState(state.cart);

  let subTotal = order.reduce((acc, cake) => {
    return acc + cake.cost;
  }, 0);

  let total = subTotal + (subTotal * .07);
  subTotal = useCurrency(subTotal);
  total = useCurrency(total);

  let receiptItemDisplay = order.map((cake) => {
    return <ReceiptItem cake={cake} />
  });

  useEffect(() => {
    dispatch({type: "RESETCART"})
  }, []);

  return (
    <div className="final-screen">
      <h1>Thank You</h1>
      {receiptItemDisplay}
      <p>SUBTOTAL: {subTotal}</p>
      <h3>TOTAL: {total}</h3>
    </div>
  );
};

export default ReceiptScreen;
