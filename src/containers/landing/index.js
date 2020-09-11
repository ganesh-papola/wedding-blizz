import React from "react";
import FrontImage from './frontimage';
import { landingStyle } from 'styles';
import WeddingServices from './weddingServices';
import PerfectWedding from './perfectWeding';

export default props => {
    const classes = landingStyle();
    return (
        <div>
            <FrontImage/>
            <WeddingServices/>
            <PerfectWedding/>
        </div>
    )
}