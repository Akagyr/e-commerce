import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, InputGroup, CloseButton } from "react-bootstrap";

import { searchProducts, clearSearchProducts } from "../../redux/slices/productsSlice";

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
        <Form id="search-form" onSubmit={handleSubmitSearch}>
            <InputGroup className="mb-4 w-75 mx-auto">
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
    );
};

export default ProductsListSearchForm;