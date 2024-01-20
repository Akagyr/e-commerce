import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";

import { getProductsCountPages, getCurrentPage, setCurrentPage } from "../../redux/slices/productsSlice";

import "./ProductsListPagination.scss";

const ProductsListPagination = () => {
    const currentPage = useSelector(getCurrentPage);
    const productsCountPages = useSelector(getProductsCountPages);
    const dispatch = useDispatch();
    const pagesArr = [];

    for (let i = 0; i < productsCountPages; i++) {
        pagesArr.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => dispatch(setCurrentPage(i))}
            >
                {i + 1}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className="justify-content-center products-list-pagination">
            {pagesArr}
        </Pagination>
    );
};

export default ProductsListPagination;