import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Image } from "react-bootstrap";

import { getCurrentProduct } from "../../redux/slices/productsSlice";

import "./ProductPage.scss";
import Overlay from "../../components/Overlay/Overlay";
import { addProductToCart } from "../../redux/slices/cartSlice";

const ProductPage = () => {
    const product = useSelector(getCurrentProduct);

    return (
        <Row className="align-items-center">
            <Col className="col-6 text-center align-items-center">
                <Image src={product.image} className="product-image" />
            </Col>
            <Col className="col-6">
                <h2 className="product-title">{product.title}</h2>
                <p>{product.category}</p>
                <p>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="product-rate">{product.rating.rate}</span>
                </p>
                <p>{product.description}</p>
                <p>
                    {product.price}
                    <i className="bi bi-currency-dollar"></i>
                </p>
                <Overlay 
                    dispatchAction={addProductToCart}
                    dispatchData={product}
                    showTime={1000}
                    messageText="Товар додано у кошик"
                    btnText="Придбати"
                />
            </Col>
        </Row>
    );
};

export default ProductPage;