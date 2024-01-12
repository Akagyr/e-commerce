import React from "react";
import { ListGroup } from "react-bootstrap";

import CartProductListItem from "../CartProductListItem/CartProductListItem";

const CartProductList = () => {
    //static data
    const cartProductsArr = [];

    const showCartProducts = cartProductsArr?.map((el, index) =>
        <ListGroup.Item key={index}>
            <CartProductListItem product={el} />
        </ListGroup.Item>);

    return (
        <ListGroup>
            {showCartProducts}
        </ListGroup>
    );
};

export default CartProductList;