import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { vendorStyle, commonStyle } from 'styles';
import {
    ReceptionVenue, WeddingPhotographers, Videographers,
    BridalSalons, Beauty, DJs, WedingBands, WeddingPlanners, WeddingCakes
} from "assets";
import { strings } from 'constant';
const { vendors, common } = strings;



const images =
    [
        { title: vendors.ReceptionVenue, image: ReceptionVenue },
        { title: vendors.WeddingPhotographers, image: WeddingPhotographers },
        { title: vendors.Videographers, image: Videographers },
        { title: vendors.BridalSalons, image: BridalSalons },
        { title: vendors.Beauty, image: Beauty },
        { title: vendors.DJs, image: DJs },
        { title: vendors.WedingBands, image: WedingBands },
        { title: vendors.WeddingPlanners, image: WeddingPlanners },
        { title: vendors.WeddingCakes, image: WeddingCakes },
    ]


const onViewMore = () => {
    alert("in progres...")
}

const ImageGrid = ({ img = [] }) => {
    const classes = vendorStyle();
    return (
        <Grid container justify="center" className={classes.imagesGridV}>
            {
                images.map((image, i) => (
                    <Grid item sm={12} xs={12} md={4} lg={4} className={classes.ideaTipImgV} key={i + image.title}>
                        <div className={classes.categoryImageV}>
                            <img src={image.image} className={classes.ideaTipImg} />
                            <Typography component="div" className={classes.imageGridTV}>
                                <Box fontFamily='Gotham' className={classes.imageGridT}>
                                    {image.title}
                                </Box>
                            </Typography>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    )
}


const ButtonView = props => {
    const classes = vendorStyle();

    return (
        <div className={classes.catButtonV}>
            <Button onClick={onViewMore} variant="outlined" size="large" color='primary' className={classes.catButton}>
                {common.ViewAll}
            </Button>
        </div>

    )
}
export default props => {
    const classes = vendorStyle();
    const comclasses = commonStyle();
    return (
        <Grid container >
            <Grid item sm={12} xs={12} md={12} className={classes.IdeasNTipsTopV}>
                <Typography component="div" className={classes.IdeasNTipsHT}>
                    <Box fontFamily='CormorantBoldItalic' className={`${classes.IdeasNTipsText}`}>
                        {vendors.TopVenCategory}
                    </Box>
                </Typography>
            </Grid>
            <ImageGrid />
            <ButtonView />
            <div className={comclasses.space100} />
        </Grid>
    )
}