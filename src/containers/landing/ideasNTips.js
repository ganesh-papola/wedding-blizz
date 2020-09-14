import React, { useState } from 'react';
import { weddingFashion, weddingReception, weddingService, weddingTheme, planningBasics, familyFriends } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box, Container, Zoom } from '@material-ui/core'
import { strings } from 'constant';
const { landing } = strings;


const images = [
    [
        { title: landing.PlanningBasics, image: planningBasics },
        { title: landing.FamilyNFriends, image: familyFriends },
        { title: landing.WeddingTheme, image: weddingTheme },
    ],
    [
        { title: landing.WeddingFashion, image: weddingFashion },
        { title: landing.WeddingReception, image: weddingReception },
        { title: landing.WeddingServices, image: weddingService },
    ]
]

const ImageGrid = ({ img = [] }) => {
    const classes = landingStyle();
    return (
        <Grid container justify="center" className={classes.imagesGridV}>
            {
                img.map(image => (
                    <>
                        <Grid item justify="center" align='center' sm={12} xs={12} md={4} className={classes.ideaTipImgV}>
                            <img src={image.image} className={classes.ideaTipImg} />
                            <Typography component="div"  className={classes.imageGridTV}>
                                <Box fontFamily='Gotham' className={classes.imageGridT}>
                                    {image.title}
                                </Box>
                            </Typography>
                        </Grid>
                    </>
                ))
            }
        </Grid>
    )
}
const ImagesGrid = () => {


    return (
        <>
            { images.map(img => (
                <ImageGrid img={img} key={Math.random()} />
            ))}
        </>

    )
}
export default () => {
    const classes = landingStyle();
    return (
        <Container>
            <Grid container justify="center" align='center' className={classes.IdeasNTipsTopV}>
                <Typography component="div" className={classes.IdeasNTipsHT}>
                    <Box fontFamily='CormorantBoldItalic' className={`${classes.IdeasNTipsText}`}>
                        {landing.IdeasNTips}
                    </Box>
                    <Box fontFamily='GothamBook' className={`${classes.IdeasNTipsMsgText}`}>
                        {landing.IdeasNTipsMssg}
                    </Box>
                </Typography>
            </Grid>
            <ImagesGrid />
        </Container>
    );
};

