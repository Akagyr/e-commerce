import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

import "./CartProductListItem.scss";

const CartProductListItem = ({ product }) => {
    return (
        <Row className="text-center align-items-center">
            <Col className="col-2">
                <Image src={product.image} className="cart-product-image" />
            </Col>
            <Col className="col-4">
                {product.title}
            </Col>
            <Col className="col-2 cart-product-count">
                <i className="bi bi-plus-circle"></i>
                <span>2</span>
                <i className="bi bi-dash-circle"></i>
            </Col>
            <Col className="col-2">
                {product.price}
                <i className="bi bi-currency-dollar"></i>
            </Col>
            <Col className="col-2">
                <Button size="sm">Вилучити</Button>
            </Col>
        </Row>
    );
};

export default CartProductListItem;