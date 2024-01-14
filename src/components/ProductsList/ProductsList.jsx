import React from "react";
import { Row } from "react-bootstrap";

import ProductCard from "../ProductCard/ProductCard";
import ProductsListSearchForm from "../ProductsListSearchForm/ProductsListSearchForm";
import ProductsListPagination from "../ProductsListPagination/ProductsListPagination";
import useGetProductsArr from "../../hooks/useGetProductsArr";

const ProductsList = () => {
    const productsArr = useGetProductsArr();
    const showProducts = productsArr.map((el, index) => <ProductCard key={index} product={el} />);

    return (
        <>
            <ProductsListSearchForm />
            <Row>
                {showProducts}
            </Row>
            <ProductsListPagination />
        </>
    );
};

export default ProductsList;