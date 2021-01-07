import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {TextField, Button} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { commonStyle } from "styles";
import { strings } from 'constant';
import {Loader} from "components";
const { common } = strings;

let uploadRef={};
export default ({ onImage=()=>{}, value=[],displayImages=[], multiple=false, label, error }) => {
    const classes = commonStyle();
    const dispatch = useDispatch();
    const {imgloader=false} = useSelector(({app})=>app)
    const [images, setImages] = useState([]);
    const [dispOldImags, setDisplImages] = useState(displayImages?displayImages:[]);
    const [oldImages, setOldImages] = useState(value?value:[]);
    const onFile = ({ target: { files = [] } }) => {
        // setName([...names, ...files.map(file=>file.name)]);
        setImages([...images, ...files]);
        onImage([...images, ...files],oldImages);
    }
    useEffect(()=>{setOldImages(value); setImages(value);},[value])
    const onRemove = (i)=>{
        let imgs = [...images];
        imgs.splice(i,1);
        setImages(imgs);
        onImage(imgs, oldImages, dispOldImags);
    }
    const onRemoveOld = (i)=>{
        let imgs = [...oldImages];
        let dispImg = [...dispOldImags];
        imgs.splice(i,1);
        dispImg.splice(i,1);
        setOldImages(imgs);
        onImage(images, imgs, dispImg);
        setDisplImages(dispImg);
    }
    return (
        <div className={classes.inputFieldsV}>
            {/* <Typography component={'span'}>
                <Box className={classes.inputFLabelT}>{label}</Box>
            </Typography> */}
            <label>
                <div className={classes.browseBV}  htmlFor="upload-photo">
                <input
                    ref={ref => uploadRef[label] = ref}
                    style={{ display: "none" }}
                    id="upload-photo"
                    name={label}
                    multiple={multiple}
                    accept="image/png, image/jpeg, video/mp4,video/x-m4v,video/*"
                    onChange={onFile}
                    type="file" />
                    <TextField
                        className={classes.fileInputFields}
                        variant="outlined"
                        label={label}
                        error={!!error}
                        value={images.map(file=>file.name).toString()}
                        disabled
                        helperText={error}
                        onClick={() => uploadRef[label] && uploadRef[label].click()} />
                    <Button variant="outlined" size="large" color='primary'
                        className={classes.browseButton} onClick={() => uploadRef[label] && uploadRef[label].click()} >
                        {common.Browse}
                    </Button>
                </div>
            </label>
            {images&&images.length||value&&value.length?<Preview data={images} loader={imgloader} oldImages={dispOldImags} onRemoveOld={onRemoveOld} onRemove={onRemove}/>:null}
        </div>
    )
}

const Preview = ({ data = [],oldImages=[], onRemove=()=>{},onRemoveOld=()=>{}, loader=false }) => {
    const classes = commonStyle();
    return (
        <div className={classes.previewListV}>
            {loader? <Loader/> :oldImages.map((tile, ind) => (
                <div className={classes.preImageV} key={Math.random()+ind}>
                    <img src={tile} alt={''} className={classes.prevImg} />
                    <div className={classes.prevIcV}>
                        <Cancel className={classes.prevTitle} onClick={()=>onRemoveOld(ind)}/>
                    </div>
                </div>
            ))}
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