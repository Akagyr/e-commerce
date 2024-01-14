import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
    getProductsCategoryArr,
    filterProducts,
    clearFilterProducts,
} from "../../redux/slices/productsSlice";

const Sidebar = () => {
    const categoriesArr = useSelector(getProductsCategoryArr);
    const dispatch = useDispatch();

    const showCategories = categoriesArr.map((el, index) =>
        <Form.Check
            key={index}
            label={el}
            value={el}
            type="radio"
            name="categories"
            onChange={(e) => dispatch(filterProducts(e.target.value))}
        />
    );

    return (
        <Form>
            <Form.Check
                defaultChecked
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

export default Sidebar;