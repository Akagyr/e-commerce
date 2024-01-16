import React from "react";
import { useSelector } from "react-redux";
import { Container, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getCountProductsInCart } from "../../redux/slices/cartSlice";

import "./Header.scss";

const Header = () => {
    const countsProductsInCart = useSelector(getCountProductsInCart);

    return (
        <Navbar bg="dark" data-bs-theme="dark" as="header">
            <Container as="nav">
                <Navbar.Brand>
                    <Link to="/">E-commerce</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/cart" className="position-relative">
                        <i className="bi bi-cart cart-icon"></i>
                        <Badge
                            bg="primary"
                            className="position-absolute cart-products-count"
                        >
                            {countsProductsInCart}
                        </Badge>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;