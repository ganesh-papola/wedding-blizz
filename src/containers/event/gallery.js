import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { galleryStyle, commonStyle, primaryLoaderStyle, commonButtonStyle } from 'styles';
import { strings } from 'constant';
import { useSelector, useDispatch } from "react-redux";
// import Gallery from 'react-grid-gallery';
import { Confirm, FilePicker, Loader, Media } from "components";
import { addImage, fetchImages } from "actions";
import { videoPlaceholder } from "assets";


const { events, common } = strings;

export default props => {
    const classes = galleryStyle();
    const dispatch = useDispatch();
    const commClasses = commonStyle();
    const { images = [], loader = false } = useSelector(({ gallery }) => gallery);
    const { event = {} } = useSelector(({ event }) => event);
    const [imges, setImages] = useState([]);
    const [media, mediaToggle] = useState(false);
    const [mediaUrl, setMedia] = useState('');
    const [type, setType] = useState('image');

    useEffect(() => {
        dispatch(fetchImages())
    }, [])
    const [delDiag, setDelDiag] = useState(false)

    const handleDelete = () => {

    }
    const onSubmit = async () => {
       const res = await dispatch(addImage(imges, `event_gallery/${event.id}/`));
       if(res){
        setImages([])
       }
    }
    const viewerModal = ({ src, type = '' }) => {
        mediaToggle(true)
        setMedia(src);
        setType(type);
    }
    const handleToggle = () => {
        mediaToggle(false)
        setMedia('');
        setType('')
    }
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <Grid container className={classes.fileMenu}>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.addNewEventFormGV}>
                        <FilePicker multiple label={common.Media} value={imges} onImage={value => setImages([...imges, ...value])} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6} className={classes.buttonV}>
                        <Button variant="contained" disabled={loader} size="large" color='primary' style={commonButtonStyle} onClick={onSubmit}>
                            {loader ? <Loader style={primaryLoaderStyle} size={15} /> : common.Upload}
                        </Button>
                    </Grid>
                </Grid>
                <div className={classes.imagesSV}>
                    {
                        images.map(item => (
                            <img onClick={() => viewerModal(item)} src={item.type === "image" ? item.src : videoPlaceholder} className={classes.imagesThumb} />
                        ))
                    }
                </div>
                <Media open={media} toggleModal={handleToggle} url={mediaUrl} type={type}/>
            </div>
            <Confirm open={delDiag} onClose={() => setDelDiag(false)} title={common.DeleteFile}
                content={common.DeleteFileContent} onClick={handleDelete} button={common.Delete} loader={loader} />
        </div>
    )
}