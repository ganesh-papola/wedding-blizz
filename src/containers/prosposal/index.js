import React, { useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { proposalStyle, eventStyle } from 'styles';
import { strings } from 'constant';
import { BreadCrumb, Loader, NoRecordFound } from "components";
import { getProposals, setProposal } from "actions";
import moment from 'moment';
const { proposal, common } = strings;

export default props => {
    const classes = proposalStyle();
    const eclasses = eventStyle();
    const breads = [
        { title: common.Home, path: '/' }
    ];
    const dispatch = useDispatch();
    const { user: { type } } = useSelector(({ user }) => user);
    const { proposals = [], loader = false } = useSelector(({ proposal }) => proposal);
    useEffect(() => {
        dispatch(getProposals())
    }, [])
    const handleProposal = propose => {
        dispatch(setProposal(propose))
        props.history.push('/proposaldetail')
    }
    return (
        <div className={classes.proposalMain}>
            <BreadCrumb breads={breads} current={common.Proposals} />
            <div className={classes.mainBody}>
                {loader ? <Loader /> : proposals && proposals.length ? proposals.map(propo => (
                    <div className={classes.listCard} onClick={()=>handleProposal(propo)}>
                        <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                            {propo?.name}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                            {propo?.servicesDate?moment(new Date(propo?.modifiedAt)).format('DD MMM YYYY') :'' }
                        </Box>
                        <Box fontFamily='GothamBook' className={eclasses.eventFrCT}>
                            {propo?.message?.replace(/^(.{300}[^\s]*).*/, "$1")}
                        </Box>
                    </div>)) : <NoRecordFound text={proposal.NoProposalFound} />}
            </div>
        </div>
    )
}
