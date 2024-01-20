import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, InputGroup, CloseButton } from "react-bootstrap";

import { searchProducts, clearSearchProducts } from "../../redux/slices/productsSlice";

import "./ProductsListSearchForm.scss";

const ProductsListSearchForm = () => {
    const [isDisabledCloseBtn, setIsDisabledCloseBtn] = useState(true);
    const dispatch = useDispatch();

    const handleClearSearch = () => {
        dispatch(clearSearchProducts());
        document.getElementById("search-form").reset();
        setIsDisabledCloseBtn(true);
    };

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        dispatch(searchProducts(e.target.search.value));
        setIsDisabledCloseBtn(false);
    };

    return (
        <>
            <Form
                className="mb-4 mx-auto w-75 search-form-lg"
                id="search-form"
                onSubmit={handleSubmitSearch}
            >
                <InputGroup>
                    <InputGroup.Text>
                        <i className="bi bi-search"></i>
                    </InputGroup.Text>
                    <Form.Control
                        name="search"
                        type="text"
                        placeholder="Я шукаю..."
                    />
                    <InputGroup.Text>
                        <CloseButton disabled={isDisabledCloseBtn} onClick={() => handleClearSearch()} />
                    </InputGroup.Text>
                    <Button type="submit">Знайти</Button>
                </InputGroup>
            </Form>
            <Form
                className="mb-4 mx-auto search-form-sm"
                id="search-form"
                onSubmit={handleSubmitSearch}
            >
                <InputGroup>
                    <Form.Control
                        name="search"
                        type="text"
                        placeholder="Я шукаю..."
                    />
                    <InputGroup.Text >
                        <CloseButton disabled={isDisabledCloseBtn} onClick={() => handleClearSearch()} />
                    </InputGroup.Text>
                    <Button type="submit">
                        <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>
            </Form>
        </>
    );
};

export default ProductsListSearchForm;