import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@material-ui/core'
import { eventStyle, proposalStyle, primaryLoaderStyle } from 'styles';
import { strings } from 'constant';
import Rating from '@material-ui/lab/Rating';
import { BreadCrumb, Loader, NoRecordFound } from "components";
import { fetchMyReviews } from "actions";
import moment from "moment"
const { events, common } = strings;

export default props => {
    const classes = eventStyle();
    const pclasses = proposalStyle();
    const { rloader=false } = useSelector(({ event }) => event);
    const [reviews, setReviews] = useState([]);
    const breads = [
        { title: common.Home, path: '/' }
    ];
    const dispatch = useDispatch();
    useEffect(()=>{
        const getReviews = async () => {
           const reviews = await dispatch(fetchMyReviews());
           setReviews(reviews);
           console.log("reviews reviews reviews ", reviews)
        }
        getReviews()
    },[])
    return(
        <Grid container justify="center" className={classes.eventMain}>
            <BreadCrumb breads={breads} current={common.Reviews} />
            <Typography component="div" className={classes.eventTV}>
                <Box fontFamily='CormorantBold' className={classes.eventT}>
                    {common.MyReviews}
                </Box>
            </Typography>
            {rloader ? <Loader style={primaryLoaderStyle} /> :
                reviews&&reviews.length?
                reviews.map(it=>(
                    <div className={classes.reviewListV}>
                        <div className={pclasses.listCard}>
                        <Box fontFamily='Gotham' className={pclasses.prosposalNameT}>
                            {it?.user?.name}
                        </Box>
                        <Box fontFamily='GothamBook' className={pclasses.prosposalDateT}>
                            {it?.modifiedAt?moment(new Date(it?.modifiedAt)).format('DD MMM YYYY') :'' }
                        </Box>
                        <Rating value={it.rating} size="small" readOnly />
                        <Box fontFamily='GothamBook' className={classes.eventFrCT}>
                            {it?.reviewText}
                        </Box>
                    </div>
                    </div>
                ))
                : <NoRecordFound/>}
        </Grid>
    )

}