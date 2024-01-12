import React from "react";
import { Card, Button, Col } from "react-bootstrap";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
    return (
        <Col className="col-4 mb-4">
            <Card>
                <Card.Img src={product.image} className="mt-3 w-auto mx-auto" />
                <Card.Body>
                    <Card.Title className="text-truncate">{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>
                        {product.price}
                        <i className="bi bi-currency-dollar"></i>
                    </Card.Text>
                    <Button variant="primary" size="sm">Придбати</Button>
                </Card.Body>
            </Card>
        </Col >

    );
};

export default ProductCard;