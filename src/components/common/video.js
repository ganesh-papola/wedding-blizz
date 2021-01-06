import React from "react";
import { Player } from 'video-react';
import {DialogContent, Dialog} from '@material-ui/core';
import { commonStyle, clearVideoModal } from "styles";
import { Clear } from '@material-ui/icons';

export default (props) => {

        const classes = commonStyle();
        const { open, toggleModal, url, type } = props;
        return (
            <div style={{height:'100%', width:'100%'}}>
            <Dialog open={open} onClose={toggleModal} className={classes.videoV}>
                <DialogContent className={classes.videoContentV}> 
                <div className={classes.closeV} onClick={toggleModal}>
                    <Clear style={clearVideoModal}  />
                </div>
                {type==='video'?
                <Player style={{height:'60%', width:'80%'}} >
                    <source src={url} />
                </Player>
                :
                <img src={url} style={{height:'60%', width:'80%'}} />}
                </DialogContent>
            </Dialog>
            </div>
        );
    
}

