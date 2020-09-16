import React, {useState} from 'react';
import { Modal, Backdrop, Fade, Typography, Box } from '@material-ui/core';
import { authModalStyle, clearIconStyle } from "styles";
import { Clear } from '@material-ui/icons';
import { strings, SUFields } from 'constant';
import InputFields from './inputFields';
const { auth } = strings;

export default props => {
  const classes = authModalStyle();
  const { modal=false, setModal=()=>{}, onSignIn } = props;

const [state, setState] = useState({
    fullname : '',
    email : '',
    phone : '',
    password : '',
    cpassword : '',
})
const [errors, setErrors] = useState({
    fullname : null,
    email : null,
    phone : null,
    password : null,
    cpassword : null,
})



const inprops = { onSignIn, errors, state, setState, fields:SUFields, setErrors }

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
                        <Box fontFamily="CormorantBold" className={classes.modalHeadingT}>{auth.SignUp}</Box>
                </Typography>
                <InputFields {...inprops} />
            </div>
        </Fade>
      </Modal>
    </div>
  );
}