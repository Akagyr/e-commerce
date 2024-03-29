import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

import { setCurrentProduct } from "../../redux/slices/productsSlice";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectProduct = () => {
        dispatch(setCurrentProduct(product));
        navigate(`/product/${product.id}`);
    };

    return (
        <Col className="col-lg-4 col-6 mb-4">
            <Card className="product-card" role="button" onClick={() => selectProduct()}>
                <Card.Img src={product.image} className="mt-3 w-auto mx-auto" />
                <Card.Body>
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>{product.price} $</Card.Text>
                    <Button variant="primary" size="sm">Придбати</Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default ProductCard;