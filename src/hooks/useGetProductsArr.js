import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, getProductsArr } from "../redux/slices/productsSlice";

const useGetProductsArr = () => {
    const productsArr = useSelector(getProductsArr);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productsArr.length === 0) {
            dispatch(fetchProducts());
        }
    }, []);

    return productsArr;
};

export default useGetProductsArr;