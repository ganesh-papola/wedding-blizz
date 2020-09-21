import React, { useState } from 'react';
import {
    useMediaQuery, DialogContent, Dialog, DialogContentText, Grid, Box, Button, useTheme,
    DialogTitle
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { giftStyle, commonStyle } from 'styles';
import { strings } from 'constant';
import { useSelector } from "react-redux";
import { giftIcon, usersIcon } from "assets";

const { gift, common } = strings;

const dummy = [
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3', from : 'Michael Johnson', address : '63, Adekunle Fajuyi, G.R.A, Ikeja, Lagos, Nigeria 542684', description : 'Consetetur sadipscing elitr, sed diam nons umyerte eirmod tempor invidunt ut labore set dolore magna aliquyam erat, sed diameset voluptua. At vero eos et justo duo dolores et ea rebumtet clita kasd gubergren.' },

]

export default props => {
    const classes = giftStyle();
    const comclasses = commonStyle();
    const { gifts = dummy } = useSelector(({ gift }) => gift);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const onClose = () => {
        setOpen(false);
    }
    const viewDetails = (data) => {
        setData(data);
        setOpen(true);
    }


    return (
        <Grid container className={classes.giftMain}>
            <div className={classes.headV}>
                <Box fontFamily='CormorantBold' className={classes.giftT}>
                    {gift.GiftList}
                </Box>
                <div className={classes.addButtonV}>
                    <Button onClick={() => alert("n progress ...")} variant="outlined" size="large" color='primary'>
                        {gift.AddGift}
                    </Button>
                </div>
            </div>
            <div className={classes.giftListV}>
                <Grid justify='center' container >
                    {dummy.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={4} className={classes.boxWrapper} key={Math.random() + index + 'gift-list'}>
                            <div className={classes.giftBox}>
                                <img src={giftIcon} className={classes.icon} />
                                <div className={classes.centerTV}>
                                    <Box fontFamily='GothamBook' className={classes.giftstatsT}>
                                        {item.gift}
                                    </Box>
                                    <Box fontFamily='GothamBook' className={classes.viewDetailT} onClick={() => viewDetails(item)}>
                                        {common.ViewDetails}
                                    </Box>
                                </div>
                                <Box fontFamily='Gotham' className={classes.giftTotalT}>
                                    {item.giftTotal}
                                </Box>
                            </div>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>
            <GiftDetailDialog open={open} onClose={onClose} data={data} />
        </Grid>
    )
}

const GiftDetailDialog = ({ open = false, onClose = () => { }, data = {} }) => {
    const classes = giftStyle();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            className={classes.giftDetailDialogMain}
        >
            <div className={classes.dialogTitleV}>
                <DialogTitle fontFamily='CormorantBold' className={classes.detailModalTitleHT} >{gift.GiftDetails}</DialogTitle>
                <Clear className={classes.cancelIcon} onClick={onClose} />
            </div>

            <DialogContent>
                <div>
                    <div className={classes.contentHV}>
                        <img src={giftIcon} className={classes.dialogIcon} />
                        <Box fontFamily='Gotham' className={classes.giftNameT}>
                            {data.gift}
                        </Box>
                    </div>
                    <div>
                        <Box fontFamily='Gotham' className={classes.dialogTitleT}>
                            {common.Quantity}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT} >
                            {data.giftTotal}
                        </Box>
                        <Box fontFamily='Gotham' className={classes.dialogTitleT}>
                            {common.Description}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT}>
                            {data.description}
                        </Box>
                        <Box fontFamily='Gotham' className={classes.dialogTitleT} >
                            {common.DeliveryAddress}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT}>
                            {data.address}
                        </Box>
                        
                        <Box fontFamily='Gotham' className={classes.dialogTitleT} >
                            {gift.Giftedby}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT} >
                            {data.from}
                        </Box>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}