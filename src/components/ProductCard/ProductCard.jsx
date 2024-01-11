import React from "react";
import { Card, Button, Col } from "react-bootstrap";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
    return (
        <Col className="col-4">
            <Card>
                <Card.Img src={product.image} className="w-auto mx-auto h-50" />
                <Card.Body className="h-50">
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" size="sm">Придбати</Button>
                </Card.Body>
            </Card>
        </Col >

    );
};

export default ProductCard;