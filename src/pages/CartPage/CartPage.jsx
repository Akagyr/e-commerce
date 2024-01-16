import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";

import CartProductListItem from "../../components/CartProductListItem/CartProductListItem";
import { getCartArr } from "../../redux/slices/cartSlice";

const CartPage = () => {
    const cartArr = useSelector(getCartArr);
    const navigate = useNavigate();

    const showCartProducts = cartArr.map((el, index) =>
        <ListGroup.Item key={index}>
            <CartProductListItem product={el} />
        </ListGroup.Item>);

    return (
        <>
            {cartArr.length === 0
                ? <h3 className="text-center">Корзина пуста</h3>
                : <>
                    <ListGroup>
                        {showCartProducts}
                    </ListGroup>
                    <div className="mt-4 text-end">
                        <Button onClick={() => navigate("/checkout")}>Оформити замовлення</Button>
                    </div>
                </>
            }
        </>
    );
};

export default CartPage;