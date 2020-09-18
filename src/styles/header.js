import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
export const headerStyle =  makeStyles((theme) => ({
    headerView : {
        background : colors.white,
        display : 'flex',
        justifyContent : 'space-between',
        // position : 'fixed'
    },
    toolbar: {
        background : colors.white,
        display : 'flex',
        justifyContent : 'space-between'
    },
    headerLinks: {
        fontFamily : 'Gotham',
        fontSize : 13,
        cursor : 'pointer',
        color : colors.dark,
        textTransform : 'capitalize',
    },
    button : {
        height: 38,
        width : 100,
        margin : '0 20px',
        minWidth : '200px',
    },
    space20: {
        marginRight : '20px'
    },
    logoView:{
        width : '35%',
        cursor:'pointer',
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems: 'flex-start',
        [theme.breakpoints.down("md")]: {
          width : 'auto',
        }
    },
    linksView : {
        width : '50%',
        display : 'flex',
        color : colors.dark,
        textTransform : 'capitalize',
          [theme.breakpoints.down("md")]: {
            display: "none"
          }
    },
    buttonView : {
        width : '15%',
        justifyContent: 'space-between',
        display : 'flex',
          [theme.breakpoints.down("md")]: {
            display: "none"
          }
    },

    list : {
        display : 'flex',
    },
    widthp100:{
        width : '100%'
    },
    header : {
        width : '100%',
        display : 'flex',
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    drawerView : {
        display : 'none',
        [theme.breakpoints.down("md")]: {
            display: "block",
            display : 'flex',
            width : '100%',
            justifyContent : 'flex-end'
          }
    },
    list: {
        width: '100%'
      },
      fullList: {
        width: "auto"
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },

      logo1 : {
        width: 45,
        height: 40,
        [theme.breakpoints.down("md")]: {
          width: 30,
          height: 20,
        }
      },
      logo2 : {
        width: 227,
        height: 33,
        marginTop:10,
        [theme.breakpoints.down("md")]: {
          width: 100,
          height: 22,
          marginTop:0
        }
      }
  }));