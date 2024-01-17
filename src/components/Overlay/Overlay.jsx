import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

const Overlay = ({
    dispatchAction,
    dispatchData,
    showTime,
    messageText,
    overlayPlace = "right",
    btnType = "button",
    btnText,
}) => {
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatchAction && dispatch(dispatchAction(dispatchData));
        setIsShow(true);
        setTimeout(() => {
            setIsShow(false);
        }, showTime);
        return () => clearTimeout();
    };

    const renderTooltip = (props) => (
        <Tooltip {...props}>
            {messageText}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            show={isShow}
            placement={overlayPlace}
            overlay={renderTooltip}
        >
            <Button
                type={btnType}
                onClick={() => handleClick()}
            >
                {btnText}
            </Button>
        </OverlayTrigger>
    );
};

export default Overlay;