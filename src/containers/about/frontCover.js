import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { aboutStyle } from 'styles';
import { weddingServicesCover } from "assets";
import { strings } from 'constant';
const { about } = strings;


export default props => {
    const classes = aboutStyle();
    const dummy = [
        { value: '50,000', label: about.TotalUsers },
        { value: '12,000', label: about.TotalVendors },
        { value: '150,000', label: about.TotalReviews },
    ]
    return (
        <Grid container className={classes.frontCoverMain}>
            <Grid item sm={12} xs={12} className={classes.frontCoverV}>
                <img src={weddingServicesCover} className={classes.frontCoverI} />
            </Grid>
            <Grid container className={classes.frontCoverTMV}>
                {dummy.map((item, ind) => (
                    <Grid item align='center' sm={12} xs={12} md={4} lg={4} className={classes.frontCoverTMSV} key={`${ind}-typo`}>
                        <Typography component="div" className={classes.frontCoverTV} >
                            <Box fontFamily='CormorantBoldItalic' className={classes.frontCoverHT}>
                                {item.value}
                            </Box>
                            <Box fontFamily='GothamBook' className={classes.frontCoverHST}>
                                {item.label}
                            </Box>
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}