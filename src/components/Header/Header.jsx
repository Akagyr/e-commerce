import React from "react";
import { Container, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" as="header">
            <Container as="nav">
                <Navbar.Brand>
                    <Link to="/">E-commerce</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {/* Fixed route */}
                    <Link to="/cart" className="position-relative">
                        <i className="bi bi-cart cart-icon"></i>
                        <Badge bg="secondary position-absolute cart-products-count">0</Badge>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;