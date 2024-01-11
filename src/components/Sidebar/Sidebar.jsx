import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
    const categoriesArr = ["men's clothing", "jewelery", "electronics"];

    const showCategories = categoriesArr.map((el, index) =>
        <ListGroup.Item
            key={index}
            variant="light"
            action
        >
            {el}
        </ListGroup.Item>
    );

    return (
        <>
            <ListGroup>
                {showCategories}
            </ListGroup>
        </>
    );
};

export default Sidebar;