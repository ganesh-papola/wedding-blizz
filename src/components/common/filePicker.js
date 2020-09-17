import React, { useState } from 'react';
import {
    Typography, Box, TextField, Button, GridListTile,
    GridList, GridListTileBar, IconButton
} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { commonStyle } from "styles";
import { strings } from 'constant';
const { common } = strings;

let uploadRef;
export default ({ onImage = () => { }, multiple = false, label, error }) => {
    const classes = commonStyle();
    const [images, setImages] = useState([]);

    const onFile = ({ target: { files = [] } }) => {
        setImages([...images, ...files]);
        onImage([...images, ...files]);
    }
    const onRemove = (i)=>{
        let imgs = [...images];
        imgs.splice(i,1);
        setImages(imgs);
        onImage(imgs);
    }
    return (
        <div className={classes.inputFieldsV}>
            <Typography component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography>
            <label htmlFor="upload-photo">
                <input
                    ref={ref => uploadRef = ref}
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    multiple={multiple}
                    accept="image/png, image/jpeg"
                    onChange={onFile}
                    type="file" />
                <div className={classes.browseBV}>
                    <TextField
                        className={classes.fileInputFields}
                        variant="outlined"
                        id={label} label={label}
                        error={!!error}
                        helperText={error}
                        onClick={() => uploadRef && uploadRef.click()} />
                    <Button variant="outlined" size="large" color='primary'
                        className={classes.browseButton}>
                        {common.Browse}
                    </Button>
                </div>
            </label>
            {images&&images.length?<Preview data={images} onRemove={onRemove}/>:null}
        </div>
    )
}

const Preview = ({ data = [], onRemove=()=>{} }) => {
    const classes = commonStyle();
    return (
        <div className={classes.previewListV}>
            {data.map((tile, ind) => (
                <div className={classes.preImageV} key={Math.random()+ind}>
                    <img src={URL.createObjectURL(tile)} alt={''} className={classes.prevImg} />
                    <div className={classes.prevIcV}>
                        <Cancel className={classes.prevTitle} onClick={()=>onRemove(ind)}/>
                    </div>
                </div>
            ))}
        </div>
    )
}