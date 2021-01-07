
import React, { useState, useEffect } from 'react';
import { Modal, Dialog, Backdrop, Fade, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, commonStyle, clearIconStyle, whiteLoaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings, LFields, loginErrors } from 'constant';
import { Loader, TextArea } from 'components';
import Rating from '@material-ui/lab/Rating';
import Inputs from "components/auth/input";
import { addReview, getReview } from "actions";
import { validator } from "helpers"
const { common, errors } = strings;

export default props => {
    const classes = authModalStyle();
    const comClass = commonStyle();
    const dispatch = useDispatch();
    const { modal = false, onClose = () => { } } = props;
    const { rloader=false } = useSelector(({ event }) => event);
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [old, setId] = useState(null);
    const onRating = (e,rate) => {
        setRating(rate);
    }
    useEffect(()=>{
        const get = async () => {
            const old = await dispatch(getReview());
            if(old&&old.id){
                setId(old.id);
                setRating(old?.rating?parseInt(old.rating):1)
                setReview(old?.reviewText)
            }
        }
        get();
    },[])
    const onSubmit = async () => {
        const done = await dispatch(addReview(rating, review, old));
        if(done){
            setRating(1);
            setReview('')
            onClose()
        }
    }
    return (
        <Dialog open={modal} onClose={onClose} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={onClose} />
                </div>
                <Typography component={'span'} className={classes.headingV}>
                    <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{common.AddReview}</Box>
                </Typography>
                <div className={comClass.ratingTV}>
                    <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                        {common.Rating}
                    </Box>
                    <Rating value={rating} size="large" onChange={onRating} />
                    <div className={comClass.spaceV30}/>
                    <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                        {common.WriteReview}
                    </Box>
                    {/* <Box fontFamily='Gotham' className={classes.eventInfoHT}>
                        {common.WriteReview}
                    </Box> */}
                    <TextArea label={common.WriteYourReview} onChange={v=>setReview(v)} value={review} />
                </div>
                
                <div className={classes.buttonV}>
                    <Button onClick={onSubmit} variant="contained" size="large" color='primary' className={classes.button}>
                        {rloader ? <Loader style={whiteLoaderStyle} size={15} /> : common.Submit}
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}