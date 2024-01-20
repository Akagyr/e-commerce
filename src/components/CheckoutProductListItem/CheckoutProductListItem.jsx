import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./CheckoutProductListItem.scss";

const CheckoutProductListItem = ({ product }) => {
    return (
        <Row className="text-center align-items-center">
            <Col className="col-sm-2 col-3">
                <Image src={product.image} className="checkout-product-list-image" />
            </Col>
            <Col className="col-sm-8 col-6 checkout-product-list-title">
                {product.title}
            </Col>
            <Col className="col-sm-2 col-3 checkout-product-list-price">
                {product.sumPrice} $
            </Col>
        </Row>
    );
};

export default CheckoutProductListItem;