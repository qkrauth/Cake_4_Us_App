import React from "react";
import useCurrency from "../hooks/useCurrency";

const ReceiptItem = ({cake}) => {
    let extras = cake.extras.map((x) => <li>{x}</li>);
    let price = useCurrency(cake.cost);

    return (
        <div className="receipt-item">
            <div>
                <p>{cake.size} {cake.base}</p>
                <ul>
                    {extras}
                </ul>
            </div>
            <div>{price}</div>
        </div>
    )
};

export default ReceiptItem;