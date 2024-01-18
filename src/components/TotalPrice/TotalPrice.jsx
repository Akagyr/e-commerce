import React from "react";
import { useSelector } from "react-redux";

import { getTotalPrice } from "../../redux/slices/cartSlice";

import "./TotalPrice.scss";

const TotalPrice = () => {
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className="mt-4 text-end">
            <p className="cart-total-price">До сплати: {totalPrice} $</p>
        </div>
    );
};

export default TotalPrice;