import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";

import { incrementProductCounts, decrementProductCounts, deleteProductFromCart } from "../../redux/slices/cartSlice";

import "./CartProductListItem.scss";

const CartProductListItem = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Row className="text-center align-items-center user-select-none cart-product-list-item-lg">
                <Col className="col-sm-2">
                    <Image src={product.image} className="cart-product-image" />
                </Col>
                <Col className="col-sm-4 cart-product-title">
                    {product.title}
                </Col>
                <Col className="col-sm-2 cart-product-price">
                    {product.sumPrice} $
                </Col>
                <Col className="col-sm-2 cart-product-count">
                    <i
                        role="button"
                        className="bi bi-plus-circle"
                        onClick={() => dispatch(incrementProductCounts(product.id))}
                    ></i>
                    <span>{product.counts}</span>
                    <i
                        role="button"
                        className="bi bi-dash-circle"
                        onClick={() => dispatch(decrementProductCounts(product.id))}
                    ></i>
                </Col>
                <Col className="col-sm-2">
                    <Button
                        className="cart-product-btn"
                        size="sm"
                        onClick={() => dispatch(deleteProductFromCart(product.id))}
                    >
                        Вилучити
                    </Button>
                </Col>
            </Row>

            <Row className="text-center align-items-center user-select-none cart-product-list-item-sm">
                <Col className="col-2">
                    <Image src={product.image} className="cart-product-image" />
                </Col>
                <Col className="col-10">
                    <Row>
                        <Col className="col-12 text-truncate cart-product-title">
                            {product.title}
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="col-4 cart-product-price">
                            {product.sumPrice} $
                        </Col>
                        <Col className="col-4 cart-product-count">
                            <i
                                role="button"
                                className="bi bi-plus-circle"
                                onClick={() => dispatch(incrementProductCounts(product.id))}
                            ></i>
                            <span>{product.counts}</span>
                            <i
                                role="button"
                                className="bi bi-dash-circle"
                                onClick={() => dispatch(decrementProductCounts(product.id))}
                            ></i>
                        </Col>
                        <Col className="col-4">
                            <Button
                                className="cart-product-btn"
                                size="sm"
                                onClick={() => dispatch(deleteProductFromCart(product.id))}
                            >
                                Вилучити
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default CartProductListItem;