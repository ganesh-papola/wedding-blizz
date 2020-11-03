
import React, { useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { DoneAllRounded } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux';
import { proposalStyle, proposeDetailStyle, rightSideBubble, leftSideBubble,acceptedIcon } from 'styles';
import { strings } from 'constant';
import { BreadCrumb, Loader, NoRecordFound, ProposeModal } from "components";
import moment from 'moment';
import {addVendorProposal} from "actions";
const { common } = strings;


export default props => {
    const classes = proposalStyle();
    const [open, setOpen] = useState(false)
    const breads = [
        { title: common.Home, path: '/' },
        { title: common.Proposals, path: '/proposals' }
    ];
    const { chat=false } = props;
    const dispatch = useDispatch();
    const { user: { type, uid = '' } } = useSelector(({ user }) => user);
    const { proposal = {}, loader = false } = useSelector(({ proposal }) => proposal);
    const onAccept = () => {
        const {proposed,modifiedAt,createdAt,isDeleted,owner,event,id,...propsal} = proposal;
        const data = {
            isQuote : false,
            isProposal : false,
            isBooked : true
        };
        dispatch(addVendorProposal(data,id, proposed&&proposed.id));   
    }
    if(!proposal||(proposal&&!proposal.id))
        return (
            <div className={classes.NoRecV}>
                <NoRecordFound/>
            </div>
        )
    return (
        <div className={classes.proposalMain}>
            {!chat&&<BreadCrumb breads={breads} current={common.ProposalDetail} />}
            <div className={classes.mainBody} >
                <div className={chat?classes.mainDetailBodyC:classes.mainDetailBody} style={proposal && (proposal.sender_id === proposal.user_id && proposal.user_id === uid) ? rightSideBubble : leftSideBubble}>
                    <div className={chat?classes.listCardC:classes.listCard} style={proposeDetailStyle}>
                        <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                            {proposal?.name}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.proposeMT}>
                            {strings.common?.Message+' - '}
                            {proposal?.message}
                        </Box>
                    </div>
                    <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                            {proposal?.modifiedAt ? moment(new Date(proposal?.modifiedAt)).format('DD MMM YYYY') : ''}
                        </Box>
                    {proposal && (proposal.sender_id === proposal.user_id && proposal.user_id!==uid && type === 3) && proposal.isQuote ?
                        <div className={classes.sendProposeBV} style={proposal && proposal.sender_id === proposal.user_id ? leftSideBubble : rightSideBubble}>
                            <Button onClick={() => setOpen(true)} variant="contained" size="large" color='primary' >
                                {loader ? <Loader /> : strings.proposal.SendProposal}
                            </Button>
                        </div>
                        : null}
                </div>
                {proposal && proposal.proposed ?
                    <div className={chat?classes.mainDetailBodyC:classes.mainDetailBody} style={proposal && proposal.proposed&& (proposal.proposed.sender_id !== proposal.proposed.user_id && proposal.proposed.sender_id===uid) ? rightSideBubble:leftSideBubble}>
                        <div className={classes.listCard} style={proposeDetailStyle}>
                            <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                                {proposal?.proposed?.name}
                            </Box>
                            <Box fontFamily='GothamBook' className={classes.proposeMT}>
                                {strings.common?.BookingAmount+' - '}
                                {proposal?.proposed?.booking_amount}
                            </Box>
                            <Box fontFamily='GothamBook' className={classes.proposeMT}>
                                {strings.common?.Message+' - '}
                                {proposal?.proposed?.message}
                            </Box>
                            {proposal?.proposed?.isBooked?<Box fontFamily='GothamBook' className={classes.proposalAccepted}>
                                {strings.proposal?.ProposalAccepted}
                                <DoneAllRounded style={acceptedIcon}/>
                            </Box>:null}
                        </div>
                        <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                                {proposal?.proposed?.modifiedAt ? moment(new Date(proposal.proposed.modifiedAt)).format('DD MMM YYYY') : ''}
                        </Box>
                        { proposal && proposal.proposed&& (proposal.proposed.sender_id !== proposal.proposed.user_id && proposal.proposed.sender_id===uid) && proposal?.proposed?.isProposal && !proposal?.proposed?.isBooked ?
                            <div className={classes.sendProposeBV} style={proposal && proposal?.proposed?.sender_id === proposal?.proposed?.user_id ? leftSideBubble : rightSideBubble}>
                                <Button onClick={() => setOpen(true)} variant="contained" size="large" color='primary' >
                                    {loader ? <Loader /> : strings.proposal.UppdateProposal}
                                </Button>
                            </div> : null}
                            {proposal && (proposal?.proposed?.sender_id !== proposal?.user_id && type !== 3) && proposal?.proposed?.isProposal && !proposal?.proposed?.isBooked ?
                            <div className={classes.sendProposeBV} style={leftSideBubble}>
                                <Button onClick={onAccept} variant="contained" size="large" color='primary' >
                                    {loader ? <Loader /> : strings.common.Accept}
                                </Button>
                            </div> : null}
                    </div> : null}
            </div>
            {open ? <ProposeModal modal={open} onClose={() => setOpen(false)} /> : null}
        </div>
    )
}
