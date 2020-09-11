import React from 'react';
import { heartImage, calculatorImage, userTieImage, gridImage, clipboardImage, usersImage } from 'assets';
import { landingStyle } from 'styles';
import { Typography, Grid, Box } from '@material-ui/core'
import { Strings } from 'constant';

const { landing } = Strings;

const WPDecor = () => {
    const classes = landingStyle();
    return (
        <Typography component="div" className={classes.wpdecorView}>
            <Box fontFamily='Gotham' className={`${classes.wpdecorText}`}>
                {landing.WeddingPlanninDecor}
            </Box>
            <Box fontFamily='GothamLight' className={`${classes.wpdecorContentText}`}>
                {landing.WPDContent}
            </Box>
        </Typography>
    )
}
const list1 = [
    { title: landing.WeddingVision, message: landing.WeddingVisionMessage, icon: heartImage },
    { title: landing.GuestList, message: landing.GuestListMessage, icon: usersImage },
    { title: landing.Budget, message: landing.BudgetMessage, icon: calculatorImage },
];

const list2 = [
    { title: landing.Checklist, message: landing.ChecklistMessage, icon: clipboardImage },
    { title: landing.VendorManager, message: landing.VendorManagerMessage, icon: userTieImage },
    { title: landing.WedingWebsite, message: landing.WedingWebsiteMessage, icon: gridImage },
]
const SubItem = ({ message = '', title = '', icon = '' }) => {
    const classes = landingStyle();
    return (
        <Typography component={'span'} className={classes.serviceListBox}>
            <img src={icon} className={classes.listImages} />
            <Box>
                <Box fontFamily='CormorantBoldItalic' className={`${classes.listTitle}`}>
                    {title}
                </Box>
                <Box fontFamily='Gotham' className={`${classes.listMessage}`}>
                    {message}
                </Box>
            </Box>
        </Typography>
    )
}
const WPServices = () => {
    const classes = landingStyle();
    return (
        <Grid container justify="center" alignItems="center" className={classes.serviceListViewWrapper}>
            <Grid item sm={6} xs={12} md={6} className={classes.serviceListView}>
                {
                    list1.map(item => <SubItem {...item} key={item.title} />)
                }
            </Grid>
            <Grid item sm={6} xs={12} md={6} className={classes.serviceListView}>
                {
                    list1.map(item => <SubItem {...item} key={item.title} />)
                }
            </Grid>
        </Grid>
    )
}
const weddingServices = () => {
    const classes = landingStyle();
    return (
        <Grid container justify="center" alignItems="center" className={classes.serviceView}>
            <Grid item sm={5} xs={12} md={5} >
                <WPDecor />
            </Grid>
            <Grid item sm={7} xs={12} md={7}  >
                <WPServices />
            </Grid>
        </Grid>
    );
};

export default weddingServices;