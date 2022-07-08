import React from "react";
import "./style.css";
import DashedCircleBorder from "./DashedCircleBorder.png";
import { Image } from "react-bootstrap";

const ProductDevCycle = () => {
    return (
        <div className="position-relative overflow-hidden vh-100 vw-100 bg-success">
            <Image src={DashedCircleBorder} className="position-absolute start-0 top-0 h-95" />
        </div>
    );
};

export default ProductDevCycle;