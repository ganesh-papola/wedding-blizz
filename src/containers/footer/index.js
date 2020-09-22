import React, { useState } from 'react';
import { logoF } from 'assets';
import { footerStyle } from 'styles';
import { Typography, Grid, Box, List } from '@material-ui/core'
import { strings } from 'constant';
import { MailOutlineOutlined, CallOutlined, LocationOnOutlined } from '@material-ui/icons';

const iconStyle = { marginRight : '10px', marginTop : '5px', fontSize: 15}
const icons = [ null, <MailOutlineOutlined style={iconStyle}/>, <CallOutlined style={iconStyle}/>, <LocationOnOutlined style={iconStyle}/> ]
const { footer } = strings;

const LinksTexts1 = [{title : footer.Links}, {title : footer.Planning}, {title : footer.LocalVendors}, {title : footer.WeddingWebsite}, {title : footer.Invitations}, {title : footer.RingsNDresses}]
const LinksTexts2 = [{title : footer.Links}, {title : footer.AboutUs}, {title : footer.Contact}, {title : footer.CovidTerms}, {title : footer.TnC}, {title : footer.PnP}]
const SocialTexts = [{title : footer.SocialMedia}, {title : footer.Facebook}, {title : footer.Instagram}, {title : footer.LinkedIn}, {title : footer.Twitter}, {title : footer.YouTube}]
const ContactTexts = [{title : footer.ContactUs}, {title : footer.FooterEmail}, {title : footer.FooterPhone}, {title : footer.FooterAddrss}];

const LogoView = () => {
    const classes = footerStyle();
    return (
        <div className={classes.logoView}>
            <img src={logoF} className={classes.footerLogo} />
        </div>
    )
}
const LinksView = () => {
    const classes = footerStyle();
    return (
        <div className={classes.ListView}>
            <List className={classes.footerList}>
                {LinksTexts1.map((list, index) => (
                    <Typography fontFamily={index ? 'GothamBook' : 'Gotham'} key={`${Math.random()}-${index}-L1`} className={index ? classes.footerLinksT : classes.footerLinksT0}>
                        <Box component="span" className={index ? classes.footerLinksT : classes.footerLinksT0}>
                            {list.title}
                        </Box>
                    </Typography>
                ))}
            </List>
            <List className={classes.footerList}>
                {LinksTexts2.map((list, index) => (
                    <Typography fontFamily={index ? 'GothamBook' : 'Gotham'} key={`${Math.random()}-${index}-L2`}>
                        <Box component="span" className={index ? classes.footerLinksT : classes.footerLinksT0}>
                            {list.title}
                        </Box>
                    </Typography>
                ))}
            </List>
        </div>
    )

}
const ContactView = () => {
    const classes = footerStyle();
    return (
        <div className={classes.ListView}>
            <List className={classes.contactFooterList}>
                {SocialTexts.map((list, index) => (
                    <Typography fontFamily={index ? 'GothamBook' : 'Gotham'} key={`${Math.random()}-${index}-C1`} className={index ? classes.footerLinksT : classes.footerLinksT0}>
                        <Box component="span" className={index ? classes.footerLinksT : classes.footerLinksT0}>
                            {list.title}
                        </Box>
                    </Typography>
                ))}
            </List>
            <List className={classes.contactFooterList}>
                {ContactTexts.map((list, index) => (
                    <Typography fontFamily={index ? 'GothamBook' : 'Gotham'} key={`${Math.random()}-${index}-C2`} className={index ? classes.footerLinksT : classes.footerLinksT0}>
                        <Box component="span" className={index ? classes.footerLinksTCU : classes.footerLinksT0}>
                            {icons[index]}
                            {list.title}
                        </Box>
                    </Typography>
                ))}
            </List>
        </div>
    )
}

export default props => {
    const classes = footerStyle();
    return (
        <div className={classes.footerView}>
            <Grid container >
                <Grid item sm={12} xs={12} md={3} >
                    <LogoView />
                </Grid>
                <Grid item sm={12} xs={12} md={4} >
                    <LinksView />
                </Grid>
                <Grid item sm={12} xs={12} md={4} >
                    <ContactView />
                </Grid>
            </Grid>
            <Typography component="span" className={classes.footerCopyRightV}>
                <Box fontFamily='GothamBook' className={`${classes.footerCopyRightT}`}>
                    {footer.CopyRight}
                </Box>
            </Typography>
        </div>
    )
}