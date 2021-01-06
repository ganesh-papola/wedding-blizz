import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@material-ui/core';
import { commonStyle } from "styles"
import { Loader } from "components";

export default props => {
    const { onClick, onClose, open = false, title, content, button, loader=false } = props
    const classes = commonStyle();
    const onAction = () =>{
        onClose();
        onClick();
    }
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="draggable-dialog-title">
            <DialogTitle id="draggable-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <Box fontFamily="Gotham" className={classes.dialogContentT}>
                    {content}
                </Box>
            </DialogContent>
            <div className={classes.dialogButtonV}>
                <DialogActions>
                    <Button variant="outlined" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={onAction} color="primary">
                        {loader?<Loader/>:button}
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    )
}