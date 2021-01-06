import React from "react";
import FrontImage from './frontimage';
import TopCategories from './topCategories';
import FindVendor from './findVendor';
import AllCategories from './allCategories';
import VendorsByState from './vendorsByState';
import { vendorStyle } from 'styles';
export default () => {
    const classes = vendorStyle();
    return (
        <div className={classes.vendorMain}>
            <FrontImage/>
            <TopCategories/>
            <FindVendor/>
            <AllCategories/>
            <VendorsByState/>
        </div>
    )
}