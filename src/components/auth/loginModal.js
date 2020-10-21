import React, { useState, useCallback } from 'react';
import { Modal, Dialog, Backdrop, Fade, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, clearIconStyle, whiteLoaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings, LFields, loginErrors } from 'constant';
import Inputs from './input';
import { Loader } from 'components';
import { login } from "actions"

const { auth } = strings;

export default props => {
  const classes = authModalStyle();
  const { modal=false, setModal=()=>{}, onSignUp=()=>{}, push, type='couple', onChangeLogin=()=>{}, onForgot=()=>{} } = props;
  const dispatch = useDispatch();
  const { loader = false } = useSelector(({ user }) => user);

  const [state, setState] = useState({
    email : '',
    password : '',
})
const [errors, setErrors] = useState({
    email : null,
    password : null,
});
const onChange = useCallback(
  (key, value) => {
    setState({ ...state, [key]: value });
  },
  [state],
);
const makeErrors = () => {
  let errs = {};
  Object.keys(state).forEach(key => {
      if(!state[key])
          errs = { ...errs, [key]: loginErrors[key] }
  });
  setErrors({ ...errors, ...errs })
}
const onSubmit = () =>{
    if(Object.values(state).filter(el => !el).length || Object.values(errors).filter(s => s).length)
        return makeErrors();
    else{
      dispatch(login(state, push))
      setTimeout(() => {
        setModal(false)
      }, 1500);
    }
}

  return (
      <Dialog open={modal} onClose={()=>setModal(false)} className={classes.modal}>
            <div className={classes.modalBody}>
                <div className={classes.headerIconV}>
                    <Clear style={clearIconStyle} onClick={()=>setModal(false)}/>
                </div>
                <Typography component={'span'} className={classes.headingV}>
                        <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{auth.Login}</Box>
                </Typography>
                <Inputs onChange={onChange} fields={LFields} state={state} errors={errors} />
                <div className={classes.buttonV}>
                    <Button onClick={onSubmit} variant="contained" size="large" color='primary' className={classes.button}>
                        {loader ? <Loader style={whiteLoaderStyle} size={15} /> : auth.Login}
                    </Button>
                    <Typography fontFamily="GothamBook" component={'span'} className={classes.forgotPassV}>
                        <Box onClick={onForgot}  className={classes.forgotPassT}>{auth.ForgotPassword}</Box>
                    </Typography>
                    <Typography fontFamily="Gotham" component={'span'} className={classes.alreadyAcV}>
                        <Box className={classes.alreadyAcT}>{auth.DontHaveAc}</Box>
                        <Box onClick={onSignUp} className={classes.alreadyAcSignInT}>{auth.SignUp}</Box>
                    </Typography>
                    <Button onClick={onChangeLogin} variant="outlined" size="large" color='primary' className={classes.button}>
                        {type==='couple'?auth.VendorLogin:auth.CoupleLogin}
                    </Button>
                </div>
            </div>
      </Dialog>
  );
}