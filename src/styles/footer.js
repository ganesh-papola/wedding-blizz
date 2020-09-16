import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

export const footerStyle =  makeStyles((theme) => ({
    logoImage : {

    },
    footerView :{
        width:'100%',
        background : colors.dark,
        paddingLeft:5
    },
    footerLogo : {
        width: 138,
        height: 47,
        [theme.breakpoints.down("md")]: {
            width: 100,
            height: 37,
        }
    },
    logoView : {
        paddingTop : 100,
        display : 'flex',
        justifyContent : 'center',
        [theme.breakpoints.down("md")]: {
            paddingTop : 50
        }
    },
    footerCopyRightV : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
    },
    footerCopyRightT : {
        fontSize : 10,
        color:colors.white,
        [theme.breakpoints.down("md")]: {
            fontSize : 8,
        }
    },
    footerLinksT : {
        color : colors.grey,
        fontSize : 13,
        lineHeight : 2.2,
        cursor : 'pointer',
        [theme.breakpoints.down("md")]: {
            fontSize : 8,
        }
    },
    footerLinksT0:{
        color : colors.white,
        fontSize : 13,
        lineHeight : 2.2,
        [theme.breakpoints.down("md")]: {
            fontSize : 8,
        }
    },
    ListView : {
        display : 'flex',
        paddingTop : 20
    },
    footerList : {
        width : '50%'
    },
    footerLinksTCU : {
        color : colors.grey,
        fontSize : 13,
        lineHeight : 2.2,
        cursor : 'pointer',
        display : 'flex',
        [theme.breakpoints.down("md")]: {
            fontSize : 8,
        }
    }
}) )