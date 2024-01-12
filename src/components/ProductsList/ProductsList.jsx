import React from "react";
import { Button, Row, Form, InputGroup } from "react-bootstrap";

import ProductCard from "../ProductCard/ProductCard";
import useGetProductsArr from "../../hooks/useGetProductsArr";

const ProductsList = () => {
    const productsArr = useGetProductsArr();
    const showProducts = productsArr?.map((el, index) => <ProductCard key={index} product={el} />);

    return (
        <>
            <InputGroup className="mb-4 w-75 mx-auto">
                <InputGroup.Text>
                    <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Я шукаю..."
                />
                <Button type="submit">Знайти</Button>
            </InputGroup>
            <Row>
                {showProducts}
            </Row>
        </>
    );
};

export default ProductsList;