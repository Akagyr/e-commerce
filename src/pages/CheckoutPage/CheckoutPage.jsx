import React from "react";
import { useSelector } from "react-redux";

import CheckoutProductList from "../../components/CheckoutProductList/CheckoutProductList";
import { getCartArr } from "../../redux/slices/cartSlice";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";


const CheckoutPage = () => {
    const checkoutProductArr = useSelector(getCartArr);

    return (
        <>
            <CheckoutForm checkoutProductArr={checkoutProductArr} />
            <CheckoutProductList checkoutProductArr={checkoutProductArr} />
        </>
    );
};

export default CheckoutPage;