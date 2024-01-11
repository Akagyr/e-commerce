import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import CheckoutProductList from "../../components/CheckoutProductList/CheckoutProductList";

const CheckoutPage = () => {
    return (
        <>
            <Form className="w-50 mx-auto">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-3">
                        Імʼя
                    </Form.Label>
                    <Col className="col-9">
                        <Form.Control type="text" placeholder="Імʼя" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-3">
                        Email
                    </Form.Label>
                    <Col className="col-9">
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="col-3">
                        Номер телефона
                    </Form.Label>
                    <Col className="col-9">
                        <Form.Control type="phone" placeholder="Номер телефона" />
                    </Col>
                </Form.Group>
                <div className="mt-4 text-center">
                    <Button className="text-center" type="submit">Оформити замовлення</Button>
                </div>
            </Form>
            <CheckoutProductList />
        </>
    );
};

export default CheckoutPage;