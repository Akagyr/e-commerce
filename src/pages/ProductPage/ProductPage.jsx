import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

import "./ProductPage.scss";

const ProductPage = () => {
    const productObj = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120,
        },
    };

    return (
        <Row>
            <Col className="col-6 text-center">
                <Image src={productObj.image} className="image-product" />
            </Col>
            <Col className="col-6">
                <h2 className="product-title">{productObj.title}</h2>
                <p>{productObj.category}</p>
                <p>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="product-rate">{productObj.rating.rate}</span>
                </p>
                <p>{productObj.description}</p>
                <p>
                    {productObj.price}
                    <i className="bi bi-currency-dollar"></i>
                </p>
                <Button>Придбати</Button>
            </Col>
        </Row>
    );
};

export default ProductPage;