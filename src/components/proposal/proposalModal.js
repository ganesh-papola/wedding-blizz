import React, { useState, useEffect } from 'react';
import { Modal, Dialog, Backdrop, Fade, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, clearIconStyle, whiteLoaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings, LFields, loginErrors } from 'constant';
import { Loader } from 'components';
import Inputs from "components/auth/input";
import { addVendorProposal } from "actions";
import { validator } from "helpers"

const { common, events } = strings;
const error = {
    name : strings.errors.fullname,
    booking_amount : strings.errors.bookinAmount,
    message : strings.errors.message,
}
export default props => {
  const classes = authModalStyle();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name : '',
    booking_amount : '',
    message : '',
  });
  const [errors, setError] = useState({
    name : '',
    booking_amount : '',
    message : '',  
  })
  const {name, uid} = useSelector(({ user }) => user.user);
  const {proposal={}, loader=false} = useSelector(({ proposal }) => proposal);
  useEffect(()=>{
      setState({...state, name});
  },[name]);
  useEffect(()=>{
      if(proposal&&proposal.proposed)
    setState({...state, name:proposal?.proposed?.name, message:proposal?.proposed?.message, 
        booking_amount:proposal?.proposed?.booking_amount});
},[proposal&&proposal.proposed]);
  const { modal=false, onClose=()=>{} } = props;
  const submit = () => {
      const {proposed,modifiedAt,createdAt,isDeleted,owner,event,id,...propsal} = proposal;
    setTimeout(() => {
        onClose(false)
    }, 2000);
    const data = {
        ...propsal,
        ...state,
        sender_id : uid,
        isQuote : false,
        isProposal : true,
        isBooked : false
    };
    console.log("data data data data ",data)
    dispatch(addVendorProposal(data,id, proposed&&proposed.id));
}
const onChange = (k,v) => {
        setState({...state,[k]:v})
        setError({...errors, [k] : validator(k,v)?'':error[k]})
    }
    const makeErrors = () => {
        let err = {}
        const er = Object.keys(errors).map(key=>{
            const status = validator(key,state[key]);
            err = {...err, [key]:status?'':error[key]}
            return status;
        });
        setError({...errors, ...err});
        return er;
    }
    const onSubmit = () => {
        const errs = makeErrors();
        if(errs&&errs.filter(er=>!er).length)
            return
        else submit()
    }

const fields = [
    { label : common.Name, key : 'name', maxLength : 200, type:'textfield', value:state.name },
    { label : common.BookingAmount, key : 'booking_amount', maxLength : 100, type:'textfield', value:state.booking_amount },
    { label : common.Message, key : 'message', maxLength : 2000, type:'textarea', value:state.message },
]
  return (
      <Dialog open={modal} onClose={onClose} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={onClose}/>
                </div>
                <Typography component={'span'} className={classes.headingV}>
                    <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{strings.proposal.AddProposal}</Box>
                </Typography>
                <Inputs fields={fields} state={state} errors={errors} onChange={onChange} />
                <div className={classes.buttonV}>
                    <Button onClick={onSubmit} variant="contained" size="large" color='primary' className={classes.button}>
                        {loader ? <Loader style={whiteLoaderStyle} size={15} /> : common.Submit}
                    </Button>
                </div>
            </div>
      </Dialog>
  );
}