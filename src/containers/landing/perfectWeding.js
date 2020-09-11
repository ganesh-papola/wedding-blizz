import React, { useState } from 'react';
import { perfectWedding1, perfectWedding2 } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { Strings } from 'constant';

const { landing } = Strings;
const images = [perfectWedding1, perfectWedding2];

const Image = ({image, index=0}) => {
    const classes = landingStyle();
    let change = { 0 : classes.pLetsPlanView, 1 : classes.sLetsPlanView}
    return (
        <div className={change[index]}>
            {/* <img src={image} className={classes.frontImage} /> */}

        </div>
    )
}
export default (props) => {
    const [index, setIndex] = useState(0);

    return (
        <Carousel navButtonsAlwaysVisible={false} navButtonsAlwaysInvisible={false} 
            onChange={(index)=>setIndex(index)} indicators={false} autoPlay={true} timeout={100}>
            {images.map(image => <Image key={Math.random()} index={index} image={image} />)}
        </Carousel>
    );
};

