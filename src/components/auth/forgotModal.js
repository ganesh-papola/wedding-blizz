import React, { useState, useCallback } from 'react';
import { Dialog, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, clearIconStyle, loaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings } from 'constant';
import { Loader, TextField } from 'components';
import { onForgotPassword } from "actions"

const { auth, common } = strings;

export default props => {
    const classes = authModalStyle();
    const { modal = false, setModal = () => { }, onSignIn = () => { } } = props;
    const dispatch = useDispatch();
    const { loader = false } = useSelector(({ user }) => user);
    const [email, setEmail] = useState('');

    const onChange = (value) => {
        setEmail(value)
    }
    const onSubmit = () => {
        if (email) {
            dispatch(onForgotPassword(email))
            setTimeout(() => {
                setModal();
            }, 1000);
        }
    }


    return (
        <Dialog open={modal} onClose={() => setModal(false)} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={() => setModal(false)} />
                </div>
                <Typography component={'span'} className={classes.headingV}>
                    <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{auth.ForgotPassword}</Box>
                </Typography>
                
                <TextField label={common.EmailAddress} value={email} maxLength={100} onChange={onChange} />
                <Box fontFamily="Gotham" className={classes.ForgotMessageT}>{auth.ForgotLinkMessage}</Box>
                <div className={classes.buttonV}>
                    <Button onClick={onSubmit} variant="contained" size="large" color='primary' className={classes.button}>
                        {loader ? <Loader {...loaderStyle} size={15} /> : common.Submit}
                    </Button>
                    <Typography fontFamily="GothamBook" component={'span'} className={classes.forgotPassV}>
                        <Box onClick={onSignIn} className={classes.forgotPassT}>{auth.Login}</Box>
                    </Typography>
                </div>
            </div>
        </Dialog>
    );
}