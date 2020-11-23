import React, { useState, useEffect } from 'react';
import { Modal, Dialog, Backdrop, Fade, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, clearIconStyle, whiteLoaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings, LFields, loginErrors } from 'constant';
import { Loader, PhoneInput } from 'components';
import Inputs from "components/auth/input";
import { addProposal, fetchProposal } from "actions";
import { validator } from "helpers"

const { common, events } = strings;
const error = {
    name: strings.errors.fullname,
    email: strings.errors.email,
    phone: strings.errors.phone,
    message: strings.errors.message,
}
const prefs = {
    email: 1,
    chat: 2,
    phone: 3
}
export default props => {
    const { modal = false, onClose = () => { } } = props;
    const classes = authModalStyle();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        servicesDate: new Date,
        message: '',
        contact_preference: 'email'
    });
    const [errors, setError] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [id, setId] = useState(null);
    const { _loader = false, event, category, vendor } = useSelector(({ event }) => event);
    const { name, phone, email, uid } = useSelector(({ user }) => user.user);
    useEffect(() => {
        setState({ ...state, name, email, phone });
        getPropsal();
    }, [email, name, phone]);
    const getPropsal = async () => {
        const proposal = await dispatch(fetchProposal(event?.id, uid, category.id));
        if (proposal && proposal.id) {
            setId(proposal.id);
            setState({
                email: proposal.email,
                phone: proposal.phone,
                name: proposal.name,
                message: proposal.message,
                contact_preference: proposal.contact_preference,
                servicesDate: new Date(proposal.servicesDate)
            })
        }
    }

    const makeErrors = () => {
        let err = {}
        const er = Object.keys(errors).map(key => {
            const status = validator(key, state[key]);
            err = { ...err, [key]: status ? '' : error[key] }
            return status;
        })
        setError({ ...errors, ...err });
        return er;
    }
    const onQuote = () => {
        setTimeout(() => {
            onClose(false)
        }, 2000);
        const data = {
            category_id: category?.id,
            event_id: event?.id,
            business_id: vendor?.id,
            sender_id: uid,
            user_id: uid,
            ...state,
            contact_preference: prefs[state.contact_preference],
            servicesDate: state?.servicesDate.getTime(),
            isQuote: true,
            isProposal: false,
            isBooked: false
        };
        dispatch(addProposal(data, id));
    }
    const onChange = (k, v) => {
        setState({ ...state, [k]: v })
        setError({ ...errors, [k]: validator(k, v) ? '' : error[k] })
    }
    const onSubmit = () => {
        const errs = makeErrors();
        if (errs && errs.filter(er => !er).length)
            return
        else onQuote()
    }
    const prefMethod = [
        { label: common.Email, value: 'email' },
        { label: common.Chat, value: 'chat' },
        { label: common.Phone, value: 'phone' },
    ]
    const fields = [
        { label: common.Name, key: 'name', maxLength: 200, type: 'textfield', value: state.name },
        { label: common.EmailAddress, key: 'email', maxLength: 100, type: 'textfield', value: state.email },
        { label: common.PhoneNumber, key: 'phone', maxLength: 100, type: 'phone', value: state.phone },
        { label: events.WeddingDate, key: 'servicesDate', maxLength: 100, type: 'datepicker', minDate: new Date(), value: state.servicesDate },
        { label: common.Message, key: 'message', maxLength: 2000, type: 'textarea', value: state.message },
        { label: events.PrefContactMethod, key: 'contact_preference', type: 'multiradio', value: state.contact_preference, data: prefMethod },
    ]
    return (
        <Dialog open={modal} onClose={onClose} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={onClose} />
                </div>
                <Typography component={'span'} className={classes.headingV}>
                    <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{common.GetAQuote}</Box>
                </Typography>
                <Inputs fields={fields} state={state} errors={errors} onChange={onChange} />
                <div className={classes.buttonV}>
                    <Button onClick={onSubmit} variant="contained" size="large" color='primary' className={classes.button}>
                        {_loader ? <Loader style={whiteLoaderStyle} size={15} /> : id ? common.Update : common.Submit}
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}