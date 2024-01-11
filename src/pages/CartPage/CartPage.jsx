import React from "react";
import { Button } from "react-bootstrap";

import CartProductList from "../../components/CartProductList/CartProductList";

const CartPage = () => {
    return (
        <>
            <CartProductList />
            <div className="mt-4 text-end">
                <Button>Оформити замовлення</Button>
            </div>
        </>
    );
};

export default CartPage;