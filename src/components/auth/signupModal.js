import React, { useState } from 'react';
import { Dialog, Box } from '@material-ui/core';
import { authModalStyle, clearIconStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { strings, SUFields } from 'constant';
import InputFields from './inputFields';
const { auth } = strings;

export default props => {
  const classes = authModalStyle();
  const { modal = false, setModal = () => { }, onSignIn } = props;

  const [state, setState] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    role: '',
  })
  const [errors, setErrors] = useState({
    fullname: null,
    email: null,
    phone: null,
    password: null,
    cpassword: null,
    role: null,
  })
  const inprops = { onSignIn, errors, state, setState, setModal, fields: SUFields, setErrors }

  return (
    <div>
      <Dialog open={modal} onClose={() => setModal(false)} className={classes.modal}>
        <div className={classes.modalBody}>
          <div className={classes.headerIconV}>
            <Clear style={clearIconStyle} onClick={() => setModal(false)} />
          </div>
          <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{auth.SignUp}</Box>
          <InputFields {...inprops} />
        </div>
      </Dialog>
    </div>
  );
}