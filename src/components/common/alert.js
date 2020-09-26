import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "actions";
import { commonStyle, alertErrorIcon, alertSuccessIcon  } from 'styles';
export default () => {
    const classes = commonStyle();
const {show=false, type='error', message=''} = useSelector(({app})=>app);
const dispatch = useDispatch();
    return (
        <div className={classes.alertShowV}>
            <Collapse in={show}>
                <Alert severity={type==='error'?'error':'success'} action={
                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => dispatch(closeAlert())}>
                    <CloseIcon fontSize="inherit" style={type==='error'? alertErrorIcon : alertSuccessIcon} />
                    </IconButton>
                }>
                {message}
                </Alert>
        </Collapse>
      </div>
    )
}