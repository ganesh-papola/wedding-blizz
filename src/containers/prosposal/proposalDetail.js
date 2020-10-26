
import React, { useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { proposalStyle, proposeDetailStyle, rightSideBubble, leftSideBubble } from 'styles';
import { strings } from 'constant';
import { BreadCrumb, Loader, NoRecordFound, ProposeModal } from "components";
import { getProposals } from "actions";
import moment from 'moment';
const { common } = strings;


export default props => {
    const classes = proposalStyle();
    const [open, setOpen] = useState(false)
    const breads = [
        { title: common.Home, path: '/' },
        { title: common.Proposals, path: '/proposals' }
    ];
    const dispatch = useDispatch();
    const { user: { type, uid = '' } } = useSelector(({ user }) => user);
    const { proposals = [], proposal = {}, loader = false } = useSelector(({ proposal }) => proposal);
    const onAccept = () => {

    }
    return (
        <div className={classes.proposalMain}>
            <BreadCrumb breads={breads} current={common.ProposalDetail} />
            <div className={classes.mainBody} >
                <div className={classes.mainDetailBody} style={proposal && proposal.sender_id === uid ? leftSideBubble:rightSideBubble }>
                    <div className={classes.listCard} style={proposeDetailStyle}>
                        <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                            {type === 3 ? proposal?.owner?.name : proposal?.owner?.business_name}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                            {proposal?.modifiedAt ? moment(new Date(proposal?.modifiedAt)).format('DD MMM YYYY') : ''}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.proposeMT}>
                            {proposal?.message}
                        </Box>
                    </div>
                    {proposal && (proposal.sender_id !== uid || type===3) && proposal.isQuote ?
                        <div className={classes.sendProposeBV} style={proposal && proposal.sender_id === uid ? leftSideBubble :rightSideBubble }>
                            <Button onClick={()=>setOpen(true)} variant="contained" size="large" color='primary' >
                                {loader ? <Loader /> : strings.proposal.SendProposal}
                            </Button>
                        </div>
                        : null}
                </div>
                {proposal&&proposal.proposed?
                <div className={classes.mainDetailBody} style={proposal && proposal.sender_id === uid ? leftSideBubble:rightSideBubble }>
                    <div className={classes.listCard} style={proposeDetailStyle}>
                        <Box fontFamily='Gotham' className={classes.prosposalNameT}>
                            {proposal?.proposed?.name}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.prosposalDateT}>
                            {proposal?.proposed?.modifiedAt ? moment(new Date(proposal.proposed.modifiedAt)).format('DD MMM YYYY') : ''}
                        </Box>
                        <Box fontFamily='GothamBook' className={classes.proposeMT}>
                            {proposal?.proposed?.message}
                        </Box>
                    </div>
                    {proposal && (proposal?.proposed?.sender_id === uid && type===3) && proposal?.proposed?.isProposal ?
                        <div className={classes.sendProposeBV} style={proposal && proposal.sender_id === uid ? leftSideBubble :rightSideBubble }>
                            <Button onClick={()=>setOpen(true)} variant="contained" size="large" color='primary' >
                                {loader ? <Loader /> : strings.proposal.UppdateProposal}
                            </Button>
                        </div> : null}
                        {proposal && (proposal?.proposed?.sender_id !== uid && type!==3) && proposal?.proposed?.isProposal && !proposal?.proposed?.isBooked?
                        <div className={classes.sendProposeBV} style={leftSideBubble }>
                            <Button onClick={onAccept} variant="contained" size="large" color='primary' >
                                {loader ? <Loader /> : strings.common.Accept}
                            </Button>
                        </div>:null}
                </div> : null}
            </div>
            {open?<ProposeModal modal={open} onClose={()=>setOpen(false)} />:null}
        </div>
    )
}
