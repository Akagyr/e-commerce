import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/Header/Header";
import Routes from "../components/RoutesCreate";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Container as="main" className="mt-4">
                <Routes />
            </Container>
        </>
    );
};

export default MainLayout;