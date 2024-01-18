import React from "react";
import { ListGroup } from "react-bootstrap";

import CheckoutProductListItem from "../CheckoutProductListItem/CheckoutProductListItem";

const CheckoutProductList = ({ checkoutProductArr }) => {

    const showCheckoutProducts = checkoutProductArr.map((el, index) =>
        <ListGroup.Item key={index}>
            <CheckoutProductListItem product={el} />
        </ListGroup.Item>);

    return (
        <ListGroup>
            {showCheckoutProducts}
        </ListGroup>
    );
};

export default CheckoutProductList;