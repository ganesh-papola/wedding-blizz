import React, { useState, useCallback } from 'react';
import { Modal, Backdrop, Fade, Typography, Box, Button } from '@material-ui/core';
import { authModalStyle, clearIconStyle, loaderStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { strings, LFields, loginErrors } from 'constant';
import { validations } from 'helpers';
import Inputs from './input';
import { Loader } from 'components';
import { login } from "actions"

const { auth } = strings;

export default props => {
  const classes = authModalStyle();
  const { modal=false, setModal=()=>{}, onSignUp=()=>{}, push } = props;
  const dispatch = useDispatch();
  const { loader = false } = useSelector(({ auth }) => auth);

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
    else 
    dispatch(login(state, push))
}

const onVendorLogin = ()=> {
  
}

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={()=>setModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
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
                        {loader ? <Loader {...loaderStyle} size={15} /> : auth.Login}
                    </Button>
                    <Typography fontFamily="GothamBook" component={'span'} className={classes.forgotPassV}>
                        <Box className={classes.forgotPassT}>{auth.ForgotPassword}</Box>
                    </Typography>
                    <Typography fontFamily="Gotham" component={'span'} className={classes.alreadyAcV}>
                        <Box className={classes.alreadyAcT}>{auth.DontHaveAc}</Box>
                        <Box onClick={onSignUp} className={classes.alreadyAcSignInT}>{auth.SignUp}</Box>
                    </Typography>
                    <Button onClick={onVendorLogin} variant="outlined" size="large" color='primary' className={classes.button}>
                        {auth.VendorLogin}
                    </Button>
                </div>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}