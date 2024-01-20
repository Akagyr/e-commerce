import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";

import Overlay from "../Overlay/Overlay";

import "./CheckoutForm.scss";

const CheckoutForm = ({ checkoutProductArr }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Замовлення:\n\n Ім'я: ${e.target.name.value}\n Пошта: ${e.target.email.value}\n Номер телефона: ${e.target.phone.value}\n\nТовари:\n\n ${checkoutProductArr.map(el => `${el.title} - ${el.counts} item(-s)\n`)}`;

        console.log(message);

        const templateParams = {
            to_email: "casha.mironyuk.2001@gmail.com",
            from_name: e.target.name.value,
            from_email: e.target.email.value,
            subject: `Замовлення від ${e.target.name.value}`,
            message: message,
        };
        emailjs.send("service_60461lb", "template_9iya8wn", templateParams, "ojBoTbNUh-9ltG-Fl");
    };

    return (
        <Form className="checkout-form" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label className="col-3">
                    Імʼя
                </Form.Label>
                <Col className="col-9">
                    <Form.Control type="text" name="name" placeholder="Імʼя" required />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label className="col-3">
                    Email
                </Form.Label>
                <Col className="col-9">
                    <Form.Control type="email" name="email" placeholder="email@example.com" required />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label className="col-3">
                    Номер телефона
                </Form.Label>
                <Col className="col-9">
                    <Form.Control type="tel" name="phone" pattern="[0-9]{1,4}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{3}" placeholder="Номер телефона" required />
                </Col>
            </Form.Group>
            <div className="mt-4 text-center">
                <Overlay
                    overlayPlace="top"
                    showTime={2000}
                    messageText="Вітаю! Замовлення надіслано!"
                    btnType="submit"
                    btnText="Оформити замовлення"
                />
            </div>
        </Form>
    );
};

export default CheckoutForm;