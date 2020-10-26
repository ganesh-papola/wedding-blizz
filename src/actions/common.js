
import { imagePathToUrl } from "helpers";
import { ACTION_TYPES } from 'constant';

export const closeAlert = () => dispatch => {
    dispatch({ type : ACTION_TYPES.CLOSE_ALERT })
}
export const createAlert = ({message, type, duration=8000, extra={}}) => dispatch => {
    dispatch({ type : ACTION_TYPES.CREATE_ALERT, payload : message, typ:type, extra });
    setTimeout(() => {
        dispatch({ type : ACTION_TYPES.CLOSE_ALERT })
    }, duration);
}
export const imagesToUrl = (images=[]) => async dispatch => {
    try {
        if(images&&images.length){
            dispatch({ type: ACTION_TYPES.IMAGE_URL_REQUEST });
            const urls =  await Promise.all(images.map(async image => await imagePathToUrl(image) ));
            dispatch({ type: ACTION_TYPES.IMAGE_URL_COMPLETE});
            return new Promise(res=>res(urls))
        }else
        return new Promise(res=>res([]))
    } catch (error) {
        console.log("images url catch error ", error);
        dispatch({ type: ACTION_TYPES.IMAGE_URL_FAILED });
        return new Promise(res=>res([]))
    }
}