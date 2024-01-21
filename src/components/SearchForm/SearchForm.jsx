import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, InputGroup } from "react-bootstrap";

import { searchProducts } from "../../redux/slices/productsSlice";

import "./SearchForm.scss";

const SearchForm = () => {
    const dispatch = useDispatch();

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        dispatch(searchProducts(e.target.search.value));
        document.getElementById("search-form").reset();
    };

    return (
        <Form
            id="search-form"
            className="mb-4 mx-auto search-form"
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
                <Button type="submit">Знайти</Button>
            </InputGroup>
        </Form>
    );
};

export default SearchForm;