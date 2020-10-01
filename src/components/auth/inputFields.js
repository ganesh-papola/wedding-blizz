import React, { useCallback } from 'react';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { signUp } from "actions";
import { useDispatch, useSelector } from 'react-redux';
import { authModalStyle, whiteLoaderStyle } from "styles";
import { strings, signupError } from 'constant';
import { validations } from 'helpers';
import { Loader } from 'components';
import Inputs from './input';
const { auth } = strings;

export default ({ state = {}, errors = {}, fields = [], setModal=()=>{}, setState, setErrors, onSignIn }) => {
    const classes = authModalStyle();
    const dispatch = useDispatch();
    const { loader = false } = useSelector(({ user }) => user);

    const onChange = useCallback(
        (key, value) => {
            let passChange = {};
            if (key === 'password') passChange = { cpassword: '' };
            setState({ ...state, ...passChange, [key]: value });
            setErrors({ ...errors, [key]: !validations[key](value, state.password) ? signupError[key] : null });
        },
        [state],
    );

    const makeErrors = () => {
        let errs = {};
        Object.keys(state).forEach(key => {
            if(!state[key])
                errs = { ...errs, [key]: signupError[key] }
        });
        setErrors({ ...errors, ...errs })
    }

    const onSubmit = () => {
        if(Object.values(state).filter(el => !el).length || Object.values(errors).filter(s => s).length)
            return makeErrors();
        else {
            dispatch(signUp(state));
            setTimeout(() => {
                setModal(false)
            }, 1000);
        }
    }

    return (
        <div>
            <Inputs onChange={onChange} fields={fields} state={state} errors={errors} />
            <div className={classes.buttonV}>
                <Button onClick={onSubmit} variant="contained" size="large" color='primary' className={classes.button}>
                    {loader ? <Loader style={whiteLoaderStyle} size={15} /> : auth.SignUp}
                </Button>
                <Typography fontFamily="Gotham" component={'span'} className={classes.alreadyAcV}>
                    <Box className={classes.alreadyAcT}>{auth.AlreadyHaveAC}</Box>
                    <Box onClick={onSignIn} className={classes.alreadyAcSignInT}>{auth.SignIn}</Box>
                </Typography>
            </div>

        </div>
    );
}