import React, { useState } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { eventStyle, commonButtonStyle } from 'styles';
import { TextField, GooglePlaces, TextArea, Loader } from "components";
import { strings, giftTErrors } from 'constant';
import { addGift } from "actions";
import { useDispatch, useSelector } from "react-redux"
const { gift, common } = strings;

export default props => {
    const classes = eventStyle();
    const dispatch = useDispatch();
    const { loader=false } = useSelector(({gift})=>gift);
    const [state, setState] = useState({
        gift_title: '',
        gift_description : '',
        quantity : '',
        delivery_address : '',
        // city : '',
        // state : '',
        // country : '',
        // zip : ''
    });
    const [error, setError] = useState({
        gift_title: '',
        gift_description : '',
        delivery_address : '',
        quantity : ''
    });
    const submit = () => {
        if(state.gift_title && state.gift_description && state.delivery_address && state.quantity && state.quantity > 0){
            dispatch(addGift(state));
        }else makeErrors();
    }
    const makeErrors = () =>{
        let errors={};
        ['gift_title','gift_description','delivery_address', 'quantity'].forEach(item=> errors = {...errors, [item]:state[item]?'':giftTErrors[item] }  )
        setError(errors)
    }
    const onChange = (k,v) => {
        setState({...state,[k]:v})
        if(!v && (k==='gift_title'||k==='gift_description') || (k==='quantity' && v<1))
        setError({...error,[k]: giftTErrors[k]});
        else setError({...error,[k]:''});
    }
    return (
        <Grid container className={classes.eventMain}>
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {gift.AddNewGift}
                </Box>
            </Typography>
            <form className={classes.addNewEventFormV} noValidate autoComplete="off">
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField error={error.gift_title} label={gift.GiftTitle} onChange={v=>onChange('gift_title',v)} value={state.gift_title} maxLength={100} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Quantity} error={error.quantity} onChange={v=>onChange('quantity',v)} value={state.quantity} type='number' min={1} />
                    </Grid>

                    <Grid item sm={12} xs={12} className={classes.addNewEventFormGV}>
                        <TextArea label={common.Description} error={error.gift_description} onChange={v=>onChange('gift_description',v)} value={state.gift_description} />
                    </Grid>

                    <Grid item sm={12} xs={12}  className={classes.addNewEventFormGV}>
                        {/* <TextArea label={common.Address} error={error.delivery_address} onChange={v=>onChange('delivery_address',v)} value={state.delivery_address}/> */}
                        <GooglePlaces label={common.Address} error={error.delivery_address} onChange={(add)=>onChange('delivery_address',add.address)} value={state.delivery_address}/>
                    </Grid>
                    {/* <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.City} onChange={v=>onChange('city',v)} value={state.city}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.State} onChange={v=>onChange('state',v)} value={state.state}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <DropDown label={common.Country} onChange={v=>onChange('country',v)} value={state.country}/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <TextField label={common.Zipcode} onChange={v=>onChange('zip',v)} value={state.zip} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}/> */}

                    <Grid item sm={6} xs={6} md={6} lg={6} className={classes.addNewEventFormGBtV}>
                        <Button disabled={loader} variant="contained" size="large" color='primary' style={commonButtonStyle} onClick={submit}>
                            {loader?<Loader />:common.Submit}
                        </Button>
                        <Button disabled={loader} variant="contained" size="large" style={commonButtonStyle} onClick={()=>props.history.goBack()}>
                            {common.Cancel}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}