import React, { useState } from 'react';
import { perfectWedding1, perfectWedding2 } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { strings } from 'constant';

const { landing } = strings;
const images = [perfectWedding1, perfectWedding2];

const Image = ({image, index=0}) => {
    const classes = landingStyle();
    let change = { 0 : classes.pLetsPlanView, 1 : classes.sLetsPlanView}
    return (
           <Grid container justify="center" className={change[index]}>
                <Grid item sm={12} xs={12} md={6} className={classes.letsPlanImageV}>
                    <img src={image} className={classes.letsPlanImage} />
                </Grid>
                <Grid item sm={12} xs={12} md={6} className={classes.letsPlanDesc}>
                    <Typography component="div" className={classes.letsPlanTexts}>
                        <Box fontFamily='CormorantBoldItalic' className={`${index?classes.LetsPlanHeading1:classes.LetsPlanHeading}`}>
                            {landing.LetsPlanHeading}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.LetsPlanMessage1}`}>
                            {landing.LetsPlanMessage1}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.LetsPlanMessage2}`}>
                            {landing.LetsPlanMessage2}
                        </Box>
                        <Box fontFamily='GothamBook' className={`${classes.LetsPlanMessage3}`}>
                            {landing.LetsPlanMessage3}
                        </Box>
                    </Typography>
                </Grid>
        </Grid>
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

