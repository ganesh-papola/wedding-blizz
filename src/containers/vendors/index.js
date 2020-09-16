import React from "react";
import FrontImage from './frontimage';
import TopCategories from './topCategories';
import FindVendor from './findVendor';
import AllCategories from './allCategories';
import VendorsByState from './vendorsByState';
export default () => {
    return (
        <div>
            <FrontImage/>
            <TopCategories/>
            <FindVendor/>
            <AllCategories/>
            <VendorsByState/>
        </div>
    )
}