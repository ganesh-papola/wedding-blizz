import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
export const landingStyle =  makeStyles((theme) => ({
    frontImage : {
        // opacity: 0.5,
        width: '100%',
        height: 630,
        position : 'relative',
        backgroundSize : 'cover',
        backgroundColor: colors.black,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: 200
          }
    },
    frontImageTextView : {
      width: '100%',
      height: 630,
      top : 0,
      color : colors.white,
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      position : 'absolute',
      [theme.breakpoints.down("sm")]: {
          width: '100%',
          height: 200
        }
    },
    headingImageText1 : {
      fontFamily : 'CormorantBold',
      fontSize : 150,
      lineHeight : 0.7,
      color : colors.white,
      marginLeft : 30,
      [theme.breakpoints.down("sm")]: {
        fontSize : 40,
        marginLeft : 10,
        marginTop : 20
      }
    },
    headingImageText2 : {
      fontFamily : 'CormorantBold',
      fontSize : 150,
      lineHeight : 0.7,
      color : colors.white,
      [theme.breakpoints.down("sm")]: {
        fontSize : 40,
      }
    },
    imageQuoteText : {
      fontFamily : 'Gotham',
      textTransform: 'uppercase',
      fontSize : 13,
      color : colors.white,
      lineHeight : 5,
      textAlign : 'center',
      [theme.breakpoints.down("sm")]: {
        fontSize : 8,
      }
    },
    downloadImageView:{
      display : 'flex',
      marginTop : 50,
      [theme.breakpoints.down("sm")]: {
        marginTop : 25
      }
    },
    downloadImage : {
      width: 150,
      height: 55,
      marginLeft : 20,
      [theme.breakpoints.down("sm")]: {
        width: 60,
      height: 30,
      marginLeft : 10,
      }
    },
    serviceView:{
      padding : 50
    },
    wpdecorView : {
      paddingLeft : 30,
      paddingRight : 30
    },
    wpdecorText : {
      fontSize : 13,
      color : colors.grey,
      lineHeight : 8,
      textTransform: 'uppercase',
      [theme.breakpoints.down("sm")]: {
        fontSize : 8,
        lineHeight : 1
      }
    },
    wpdecorContentText : {
      fontSize : 24,
      color : colors.dark1,
      [theme.breakpoints.down("sm")]: {
        fontSize : 12
      }
    },
    serviceListViewWrapper : {
      marginTop : 80,
      // paddingTop : 1
    },
    serviceListView : {
      paddingLeft : 50,
      paddingRight : 50
    },
    serviceListBox : {
      display : 'flex',
      marginTop : 20
    },
    listImages : {
      width : 25,
      height : 23,
      marginRight : 20,
      marginTop : 5,
    },
    listTitle : {
      fontSize : 18,
      color : colors.black,
      lineHeight : 2,
      [theme.breakpoints.down("md")]: {
        fontSize : 11,
        lineHeight : 3
      }
    },
    listMessage : {
      fontSize : 14,
      color : colors.grey,
      lineHeight : 2,
      [theme.breakpoints.down("md")]: {
        fontSize : 10,
        lineHeight : 1.2
      }
    },
    pLetsPlanView : {
      width : '100%',
      height : 600,
      [theme.breakpoints.down("md")]: {
        height : 300
      },
      backgroundColor : colors.main
    },
    sLetsPlanView : {
      width : '100%',
      height : 600,
      [theme.breakpoints.down("md")]: {
        height : 300
      },
      backgroundColor : colors.blue1
    }

  }));