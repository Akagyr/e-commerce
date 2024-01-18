import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/Header/Header";
import Routes from "../components/RoutesCreate";
import Loader from "../components/Loader/Loader";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Loader />
            <Container as="main" className="mt-4 mb-3">
                <Routes />
            </Container>
        </>
    );
};

export default MainLayout;