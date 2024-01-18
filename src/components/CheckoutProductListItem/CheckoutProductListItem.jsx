import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./CheckoutProductListItem.scss";

const CheckoutProductListItem = ({ product }) => {
    return (
        <Row className="text-center align-items-center">
            <Col className="col-2">
                <Image src={product.image} className="cart-product-image" />
            </Col>
            <Col className="col-8">
                {product.title}
            </Col>
            <Col className="col-2">
                {product.sumPrice} $
            </Col>
        </Row>
    );
};

export default CheckoutProductListItem;