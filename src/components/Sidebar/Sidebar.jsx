import React from "react";

import FilterForm from "../FilterForm/FilterForm";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <FilterForm />
        </div>
    );
};

export default Sidebar;