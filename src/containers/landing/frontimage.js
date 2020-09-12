import React from 'react';
import { weddingPlanner1, weddingPlanner2, downloadAndroid, downloadApple } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Box } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { Strings } from 'constant';

const { landing } = Strings;

const images = [weddingPlanner1, weddingPlanner2];
const Image = ({ image }) => {
    const classes = landingStyle();
    return (
        <div>
            <img src={image} className={classes.frontImage} />
            <div className={classes.frontImageTextView}>
                <Typography component="div" className={classes.headingBox}>
                    <Box fontFamily='CormorantBold' className={`${classes.headingImageText1}`}>
                        {landing.Wedding}
                    </Box>
                    <Box fontFamily='CormorantBold' className={`${classes.headingImageText2}`}>
                        {landing.Planner}
                    </Box>
                    <Box fontFamily='Gotham' className={`${classes.imageQuoteText}`}>
                        {landing.DreamComeTrue}
                    </Box>
                </Typography>
                <Box className={`${classes.downloadImageView}`}>
                    <img src={downloadApple} className={classes.downloadImage} onClick={()=>alert('In progress..')} />
                    <img src={downloadAndroid} className={classes.downloadImage} onClick={()=>alert('In progress..')} />
                </Box>

            </div>
        </div>
    )
}
const frontimage = () => {
    return (
        <Carousel navButtonsAlwaysVisible={false} navButtonsAlwaysInvisible={false} indicators={false} autoPlay={true} timeout={100}>
            {images.map(image => <Image key={Math.random()} image={image} />)}
        </Carousel>
    );
};
export default frontimage;