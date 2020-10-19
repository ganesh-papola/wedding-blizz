import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const guestStyle = makeStyles((theme) => ({
    guestMain :{
        padding : 50,
        paddingTop : 80,
        paddingBottom : 80,
        ...center,
        [theme.breakpoints.down("md")]: {
            // padding : 30
        }
    },
    headV:{
        ...center,
        width : '100%',
        position : 'relative'
    },
    spaceH20:{
        paddingLeft:10,
        paddingRight  : 10
    },
    addButtonV:{
        position : 'absolute',
        display : 'flex',
        right : 50,
        [theme.breakpoints.down("md")]: {
            // right:10,
            display : 'none'
        }
    },
    addButtonMenuV : {
        display : 'none',
        [theme.breakpoints.down("md")]: {
            display: 'block',
            // position: 'absolute',
            right: 150,
            // width : 'inherit'
        }
    },

    giftHeadingT:{
        fontSize : 35,
        color : colors.main,
        padding:10,
        [theme.breakpoints.down("md")]: {
            fontSize : 16,
        }
    },
    listV:{
        background : colors.main4,
        width : '70%',
        borderRadius : 5,
        padding : 20,
    },
    listHT : {
        fontSize : 16,
        display : 'flex',
        alignItems : 'center',
        [theme.breakpoints.down("md")]: {
            fontSize : 11
        }
    },
    guestListV:{
        ...center,
        justifyContent: 'flex-start',
        cursor : 'pointer',
        paddingTop : 10,
        paddingBottom : 10
    },
    guestNameT:{
        fontSize : 14,
        paddingLeft : 10,
        [theme.breakpoints.down("md")]: {
            fontSize : 10
        }
    },
    guestInviteButtonV:{
        width : '100%',
        padding : 20,
        ...center
    },
    groupActionIconsV : {
        display : 'flex',
        flex:1,
        justifyContent: 'flex-end',
    }

}) )