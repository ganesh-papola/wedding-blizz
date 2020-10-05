import React, { useState, useEffect } from 'react';
import { Modal, Dialog, Backdrop, Fade, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, clearIconStyle, whiteLoaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings, LFields, loginErrors } from 'constant';
import { Loader } from 'components';
import Inputs from "components/auth/input";
import { addProposal } from "actions";
import moment from "moment";

const { common, events } = strings;

export default props => {
  const classes = authModalStyle();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name : '',
    email : '',
    phone : '',
    servicesDate : new Date,
    message : '',
    contact_preference:'email'
  });
  const { _loader = false, event, category, vendor } = useSelector(({ event }) => event);
  const {name,phone,email, uid} = useSelector(({ user }) => user.user);
  useEffect(()=>{
      setState({...state, name, email, phone})
  },[email, name, phone]);
  const { modal=false, onClose=()=>{} } = props;
  const onQuote = () => {
      const prefs = {
          email : 1,
          chat : 2,
          phone : 3
      }
    setTimeout(() => {
        onClose(false)
    }, 2000);
    const data = {
        category_id : category?.id,
        event_id : event?.id,
        vender_id : vendor?.id,
        sender_id : uid,
        user_id : uid,
        ...state,
        contact_preference : prefs[state.contact_preference],
        servicesDate: state?.servicesDate.getTime()
    };
    dispatch(addProposal(data));
}
const onChange = (key, value) => {
    setState({ ...state, [key] : value })
}
const prefMethod = [
    { label : common.Email, value:'email' },
    { label : common.Chat, value:'chat' },
    { label : common.Phone, value:'phone' },
]
const fields = [
    { label : common.Name, key : 'name', maxLength : 200, type:'textfield', value:state.name },
    { label : common.EmailAddress, key : 'email', maxLength : 100, type:'textfield', value:state.email },
    { label : common.PhoneNumber, key : 'phone', maxLength : 100, type:'textfield', value:state.phone },
    { label : events.WeddingDate, key : 'servicesDate', maxLength : 100, type:'datepicker', minDate : new Date(), value:state.servicesDate },
    { label : common.Message, key : 'message', maxLength : 2000, type:'textarea', value:state.message },
    { label : events.PrefContactMethod, key : 'contact_preference', maxLength : 2000, type:'multiradio', value:state.contact_preference, data:prefMethod },
]
  return (
      <Dialog open={modal} onClose={onClose} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={onClose}/>
                </div>
                <Typography component={'span'} className={classes.headingV}>
                        <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{common.GetAQuote}</Box>
                </Typography>
                <Inputs fields={fields} state={state} errors={{}} onChange={onChange} />
                <div className={classes.buttonV}>
                    <Button onClick={onQuote} variant="contained" size="large" color='primary' className={classes.button}>
                        {_loader ? <Loader style={whiteLoaderStyle} size={15} /> : common.Submit}
                    </Button>
                </div>
            </div>
      </Dialog>
  );
}