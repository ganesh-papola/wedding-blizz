import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "actions";
import { commonStyle, alertErrorIcon, alertSuccessIcon  } from 'styles';
export default () => {
    const classes = commonStyle();
const {show=false, type='error', message='', extra={}} = useSelector(({app})=>app);
const dispatch = useDispatch();

    return (
        <div className={classes.alertShowV}>
            <Collapse in={show}>
                <Alert variant="filled" severity={type} action={
                    <div className={classes.alertButtonV}>
                        {extra&&Object.keys(extra).length>0&&
                            <Button color="inherit" size="small" onClick={()=>{ dispatch(closeAlert()); extra&&extra.action()}}>
                            {extra?.label}
                            </Button>}
                        <CloseIcon fontSize="inherit" style={type==='error'? alertErrorIcon : alertSuccessIcon} onClick={() => dispatch(closeAlert())}/>
                    </div>
                }>
                {message}
                </Alert>
        </Collapse>
      </div>
    )
}