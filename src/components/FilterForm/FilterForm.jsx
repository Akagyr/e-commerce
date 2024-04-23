import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
    getProductsCategoryArr,
    filterProducts,
    clearFilterProducts,
    getCurrentCategory,
} from "../../redux/slices/productsSlice";

import "./FilterForm.scss";

const FilterForm = () => {
    const categoriesArr = useSelector(getProductsCategoryArr);
    const currentCategory = useSelector(getCurrentCategory);
    const dispatch = useDispatch();

    const showCategories = categoriesArr.map((el, index) =>
        <Form.Check
            key={index}
            label={el}
            value={el}
            checked={el === currentCategory}
            type="radio"
            name="categories"
            onChange={(e) => dispatch(filterProducts(e.target.value))}
        />
    );

    return (
        <Form className="filter-form">
            <Form.Check
                checked={currentCategory === "all"}
                label="All"
                value="all"
                type="radio"
                name="categories"
                onChange={() => dispatch(clearFilterProducts())}
            />
            {showCategories}
        </Form>
    );
};

export default FilterForm;