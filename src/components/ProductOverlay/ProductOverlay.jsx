import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import { addProductToCart } from "../../redux/slices/cartSlice";

const ProductOverlay = ({ product }) => {
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(product));
        setIsShow(true);
        setTimeout(() => {
            setIsShow(false);
        }, 1000);
        return () => clearTimeout();
    };

    const renderTooltip = (props) => (
        <Tooltip {...props}>
            Товар додано у кошик
        </Tooltip>
    );

    return (
        <OverlayTrigger
            show={isShow}
            placement="right"
            overlay={renderTooltip}
        >
            <Button onClick={() => handleAddProductToCart()}>Придбати</Button>
        </OverlayTrigger>
    );
};

export default ProductOverlay;