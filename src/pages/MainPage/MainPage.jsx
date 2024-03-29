import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Sidebar from "../../components/Sidebar/Sidebar";

const MainPage = () => {
    return (
        <Row>
            <Col as="aside" className="col-md-3">
                <Sidebar />
            </Col>
            <Col className="col-12 col-md-9">
                <Outlet />
            </Col>
        </Row>
    );
};

export default MainPage;