import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

export const commonStyle =  makeStyles(() => ({
    loaderV : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    space50 : {
        height : 50
    },
    space100 : {
        height : 100
    },
}))