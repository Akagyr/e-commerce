import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";

import { getProductsCountPages, getCurrentPage, setCurrentPage } from "../../redux/slices/productsSlice";

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
        <Pagination>{pagesArr}</Pagination>
    );
};

export default ProductsListPagination;