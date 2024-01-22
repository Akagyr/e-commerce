import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import { getMessage, clearMessage } from "../../redux/slices/cartSlice";
import { getErrorMessageApi } from "../../redux/slices/productsSlice";

import "./AlertMessage.scss";

const AlertMessage = () => {
    const message = useSelector(getMessage);
    const errorMessageApi = useSelector(getErrorMessageApi);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearMessage());
        }, 3000);
        return () => clearTimeout();
    }, [message]);

    return (
        <>
            {message &&
                <Alert
                    className="position-absolute-center text-center"
                    variant="success"
                >
                    {message}
                </Alert >
            }
            {
                errorMessageApi &&
                <Alert
                    className="position-absolute-center text-center"
                    variant="danger"
                >
                    {errorMessageApi}
                </Alert >
            }
        </>
    );
};

export default AlertMessage;