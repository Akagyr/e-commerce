import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import { getMessage, clearMessage } from "../../redux/slices/cartSlice";

import "./AlertMessage.scss";

const AlertMessage = () => {
    const message = useSelector(getMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearMessage());
        }, 3000);
        return () => clearTimeout();
    }, [message]);

    return (
        <Alert
            className="position-absolute-center text-center"
            variant="success"
            show={!!message}>
            {message}
        </Alert>
    );
};

export default AlertMessage;