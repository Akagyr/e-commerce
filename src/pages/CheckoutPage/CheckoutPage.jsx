import React from "react";
import { useSelector } from "react-redux";

import CheckoutProductList from "../../components/CheckoutProductList/CheckoutProductList";
import { getCartArr } from "../../redux/slices/cartSlice";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import TotalPrice from "../../components/TotalPrice/TotalPrice";


const CheckoutPage = () => {
    const checkoutProductArr = useSelector(getCartArr);

    return (
        <div className="w-50 mx-auto">
            <CheckoutForm checkoutProductArr={checkoutProductArr} />
            <TotalPrice />
            <CheckoutProductList checkoutProductArr={checkoutProductArr} />
        </div>
    );
};

export default CheckoutPage;