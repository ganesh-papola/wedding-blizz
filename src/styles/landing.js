import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
export const landing =  makeStyles((theme) => ({
    headerView : {
        background : colors.white
    },
    toolbar: {
        background : colors.white,
    },
    headerLinks: {
        fontFamily : 'Gotham',
        fontSize : 13,
        cursor : 'pointer'
    },
    button : {
        height: 38,
        width : 100,
        margin : '0 20px',
        minWidth : '200px'
    },
    space20: {
        marginRight : '20px'
    },
    logoView:{
        width : '35%'
    },
    linksView : {
        width : '50%',
        display : 'flex',
        
    },
    buttonView : {
        width : '15%',
        justifyContent: 'space-between',
        display : 'flex'
    },
    list : {
        display : 'flex'
    },
    widthp100:{
        width : '100%'
    },
    header : {
        width : '100%',
        justifyContent: 'space-between',
        overflowX: 'auto',
    }
  }));