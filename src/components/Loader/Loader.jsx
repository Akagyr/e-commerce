import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getStatusApi } from "../../redux/slices/productsSlice";

import "./Loader.scss";

const Loader = () => {
    const [isShow, setIsShow] = useState(false);
    const productsStatusApi = useSelector(getStatusApi);

    useEffect(() => {
        if (productsStatusApi === "loading") {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }, [productsStatusApi]);

    return (
        <>
            {isShow &&
                <div className="dotsContainer">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </div>
            }
        </>
    );
};

export default Loader;