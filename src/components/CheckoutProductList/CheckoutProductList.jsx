import React from "react";
import { ListGroup } from "react-bootstrap";

import CheckoutProductListItem from "../CheckoutProductListItem/CheckoutProductListItem";

const CheckoutProductList = () => {
     //static data
    const checkoutProductsArr = [];

    const showCheckoutProducts = checkoutProductsArr.map((el, index) =>
        <ListGroup.Item key={index}>
            <CheckoutProductListItem product={el} />
        </ListGroup.Item>);

    return (
        <ListGroup className="w-50 mx-auto mt-5">
            {showCheckoutProducts}
        </ListGroup>
    );
};

export default CheckoutProductList;