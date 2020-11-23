import React from "react";
import { guestLandStyle } from "styles";
import Gallery from "react-photo-gallery";
import {
    weddingPlanner1, weddingPlanner2, WeddingPhotographers, DJs, WeddingPlanners, flowersPotDec,
    aboutCouple, dressingBride, largeHallRestrau, weddingServicesCover
} from "assets";

const photos=[
    {src:WeddingPhotographers, height:3, width:5},
    {src:DJs, height:1, width:2},
    {src:WeddingPlanners, height:3, width:4},
    {src:dressingBride, height:1, width:1   },
    {src:flowersPotDec, height:4, width:4},
    {src:aboutCouple, height:3, width:4},
    {src:weddingPlanner1, height: 100, width: 200},
    {src:largeHallRestrau, height:4, width:4},
    {src:weddingServicesCover, height:100, width:250},
]
export default () => {
    const classes = guestLandStyle();
    return (
        <div className={classes.container}>
            <div className={classes.headerImageV}>
                <img src={weddingPlanner2} className={classes.headerImage} />
            </div>
            <div className={classes.subImagesV}>
                <Gallery photos={photos} />
            </div>
        </div>

    )
}