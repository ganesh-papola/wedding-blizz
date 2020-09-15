import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

export const footerStyle =  makeStyles((theme) => ({
    logoImage : {

    },
    footerView :{
        marginTop : 10,
        width:'100%',
        background : colors.dark,
        [theme.breakpoints.down("md")]: {
            marginTop:550,
            paddingLeft : 10,
            paddingRight : 10
        },
        [theme.breakpoints.down("sm")]: {
            marginTop:650,
            paddingLeft : 10,
            paddingRight : 10
        },
        [theme.breakpoints.down("xs")]: {
            marginTop:650,
            paddingLeft : 10,
            paddingRight : 10
        },
        [theme.breakpoints.down("xl")]: {
            marginTop:350,
            paddingLeft : 10,
            paddingRight : 10
        },
        [theme.breakpoints.down("lg")]: {
            marginTop:550,
            paddingLeft : 10,
            paddingRight : 10
        },
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
        display : 'flex',
        [theme.breakpoints.down("md")]: {
            fontSize : 11,
        }
    }
}) )