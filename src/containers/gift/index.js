import React, { useState, useEffect } from 'react';
import {
    useMediaQuery, DialogContent, Dialog, DialogContentText, Grid, Box, Button, useTheme,
    DialogTitle
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { giftStyle, commonStyle } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import { strings } from 'constant';
import { giftIcon } from "assets";
import { createAlert, fetchGifts } from "actions";
import { Loader, NoRecordFound } from "components";
const { gift, common, errors } = strings;


export default props => {
    const classes = giftStyle();
    const dispatch = useDispatch();
    const { gifts = [], loader=false } = useSelector(({ gift }) => gift);
    const { event = {} } = useSelector(({ event }) => event);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    useEffect(()=>{
        dispatch(fetchGifts());
    },[])
    const onClose = () => {
        setOpen(false);
    }
    const viewDetails = (data) => {
        setData(data);
        setOpen(true);
    }
    const handleAddGift = () => {
        if(event&&event.id)
        props.history.push('/addgift')
        else dispatch(createAlert({message:errors.noEventFoun, type:'error'}));
    }

    return (
        <Grid container className={classes.giftMain}>
            <div className={classes.headV}>
                <Box fontFamily='CormorantBold' className={classes.giftT}>
                    {gift.GiftList}
                </Box>
                <div className={classes.addButtonV}>
                    <Button onClick={handleAddGift} variant="outlined" size="large" color='primary'>
                        {gift.AddGift}
                    </Button>
                </div>
            </div>
            <div className={classes.giftListV}>
                {loader? <Loader/>:<Grid container >
                    {gifts && gifts.length ? gifts.map((item, index) => (
                        <Grid item sm={12} xs={12} md={12} lg={4} className={classes.boxWrapper} key={Math.random() + index + 'gift-list'}>
                            <div className={classes.giftBox}>
                                <img src={giftIcon} className={classes.icon} />
                                <div className={classes.centerTV}>
                                    <Box fontFamily='GothamBook' className={classes.giftstatsT}>
                                        {item.gift_title}
                                    </Box>
                                    <Box fontFamily='GothamBook' className={classes.viewDetailT} onClick={() => viewDetails(item)}>
                                        {common.ViewDetails}
                                    </Box>
                                </div>
                                <Box fontFamily='Gotham' className={classes.giftTotalT}>
                                    {item.quantity}
                                </Box>
                            </div>
                        </Grid>
                    ))
                    : <NoRecordFound />}
                </Grid>}
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
                <div className={classes.giftDetailModalBodyMainV}>
                    <div className={classes.contentHV}>
                        <img src={giftIcon} className={classes.dialogIcon} />
                        <Box fontFamily='Gotham' className={classes.giftNameT}>
                            {data.gift_title}
                        </Box>
                    </div>
                    <div className={classes.giftDetailModalBody}>
                        <Box fontFamily='Gotham' className={classes.dialogTitleT}>
                            {common.Quantity}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT} >
                            {data.quantity}
                        </Box>
                        <Box fontFamily='Gotham' className={classes.dialogTitleT}>
                            {common.Description}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT}>
                            {data.gift_description}
                        </Box>
                        <Box fontFamily='Gotham' className={classes.dialogTitleT} >
                            {common.DeliveryAddress}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT}>
                            {data.delivery_address}
                        </Box>
                        
                        {/* <Box fontFamily='Gotham' className={classes.dialogTitleT} >
                            {gift.Giftedby}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.dialogDetailT} >
                            {data.from}
                        </Box> */}
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}