import React from "react";
import FrontImage from './frontimage';
import WeddingServices from './weddingServices';
import PerfectWedding from './perfectWeding';
import IdeasNTips from './ideasNTips';
import WeddingVendor from './weddingVendor';
import WeddingApp from './weddingApp';
import { landingStyle } from "styles";

export default () => {
    const classes = landingStyle();
    return (
        <div className={classes.landingMain}>
            <FrontImage/>
            <WeddingServices/>
            <PerfectWedding/>
            <IdeasNTips/>
            <WeddingVendor/>
            <WeddingApp/>
        </div>
    )
}