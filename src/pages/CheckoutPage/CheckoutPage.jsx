import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutProductList from "../../components/CheckoutProductList/CheckoutProductList";
import { getCartArr } from "../../redux/slices/cartSlice";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

import "./CheckoutPage.scss";

const CheckoutPage = () => {
    const checkoutProductArr = useSelector(getCartArr);
    const navigate = useNavigate();

    useEffect(() => {
        checkoutProductArr.length === 0 && navigate("/");
    }, []);

    return (
        <div className="checkout-page-container mx-auto">
            <CheckoutForm checkoutProductArr={checkoutProductArr} />
            <TotalPrice />
            <CheckoutProductList checkoutProductArr={checkoutProductArr} />
        </div>
    );
};

export default CheckoutPage;