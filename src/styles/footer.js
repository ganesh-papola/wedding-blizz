import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

export const footerStyle =  makeStyles((theme) => ({
    logoImage : {

    },
    footerView :{
        height: 300,
        width : '100%',
        background : colors.dark,
        [theme.breakpoints.down("md")]: {
            height : 700,
            paddingLeft : 20,
            paddingRight : 10
        }
    },
    footerLogo : {
        width: 138,
        height: 47
    },
    logoView : {
        paddingTop : 100,
        display : 'flex',
        justifyContent : 'center',
    },
    footerCopyRightV : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        paddingTop : 30
    },
    footerCopyRightT : {
        fontSize : 10,
        color:colors.white
    },
    footerLinksT : {
        color : colors.grey,
        fontSize : 13,
        lineHeight : 2.2,
        cursor : 'pointer'
    },
    footerLinksT0:{
        color : colors.white,
        fontSize : 13,
        lineHeight : 2.2
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
        display : 'flex'
    }
}) )