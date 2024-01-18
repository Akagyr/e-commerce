import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getCartArr } from "../../redux/slices/cartSlice";
import CartProductList from "../../components/CartProductList/CartProductList";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const CartPage = () => {
    const cartArr = useSelector(getCartArr);
    const navigate = useNavigate();

    return (
        <>
            {cartArr.length === 0
                ? <h3 className="text-center">Корзина пуста</h3>
                : <>
                    <CartProductList cartArr={cartArr} />
                    <TotalPrice />
                    <div className="mt-4 text-end">
                        <Button onClick={() => navigate("/checkout")}>Оформити замовлення</Button>
                    </div>
                </>
            }
        </>
    );
};

export default CartPage;