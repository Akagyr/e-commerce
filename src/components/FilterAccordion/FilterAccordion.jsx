import React from "react";
import { Accordion } from "react-bootstrap";

import FilterForm from "../FilterForm/FilterForm";

import "./FilterAccordion.scss";

const FilterAccordion = () => {
    return (
        <Accordion className="mb-4 filter-accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Обрати категорію</Accordion.Header>
                <Accordion.Body>
                    <FilterForm />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FilterAccordion;