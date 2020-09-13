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
        marginTop : 25,
      }
    },
    downloadImage : {
      width: 150,
      height: 55,
      cursor : 'pointer',
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
      padding : 100,
      width : '100%',
      height : 600,
      [theme.breakpoints.down("md")]: {
        padding : 50,
        height : 300
      },
      backgroundColor : colors.main
    },
    sLetsPlanView : {
      padding : 100,
      width : '100%',
      height : 620,
      [theme.breakpoints.down("md")]: {
        padding : 50,
        height : 300
      },
      backgroundColor : colors.blue1
    },
    letsPlanImageV : {
      paddingBottom : 50
    },
    letsPlanDesc : {
      paddingLeft : 50,
      paddingRight : 50,
    },
    letsPlanImage : {
      width: 590,
      height: 420,
      [theme.breakpoints.down("md")]: {
        width: 260,
        height: 200,
      }
    },
    LetsPlanHeading:{
      fontSize : 48,
      lineHeight : 1,
      color : colors.white,
      [theme.breakpoints.down("md")]: {
        fontSize : 20,
        lineHeight : 2
      }
    },
    LetsPlanHeading1 :{
      fontSize : 48,
      lineHeight : 1,
      color : colors.main2,
      [theme.breakpoints.down("md")]: {
        fontSize : 20,
        lineHeight : 2
      }
    },
    LetsPlanMessage1:{
      lineHeight : 2,
      fontSize : 16,
      marginTop :20,
      [theme.breakpoints.down("md")]: {
        fontSize : 12,
      }
    },
    LetsPlanMessage2:{
      marginTop :30,
      fontSize : 16,
      [theme.breakpoints.down("md")]: {
        fontSize : 12,
      }
    },
    LetsPlanMessage3:{
      marginTop :30,
      fontSize : 16,
      [theme.breakpoints.down("md")]: {
        fontSize : 12,
      }
    },
    letsPlanTexts : {
      color : colors.white,
    },
    IdeasNTipsText:{
      fontSize :40,
      color:colors.black,
      [theme.breakpoints.down("md")]: {
        fontSize : 20,
      }
    },
    IdeasNTipsMsgText : {
      fontSize :16,
      color : colors.dark1,
      [theme.breakpoints.down("md")]: {
        fontSize : 12,
      }
    },
    IdeasNTipsHT : {

    },
    IdeasNTipsTopV:{
      padding : 40,
      marginTop:50,
      [theme.breakpoints.down("md")]: {
        padding : 20,
        marginTop: 25
      }
    },
    imagesGridV : {
      background : colors.white,
      marginTop : 40,
      [theme.breakpoints.down("md")]: {
        marginTop : 0,
      }
    },
    ideaTipImgV : {
        padding : 0,
        position : 'relative',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
      transform: 'scale(1)',
      transition: 'transform .2s',
        "&:hover": {
          transform: 'scale(1.15)',
          transition: 'transform .2s'
        },
    },
    ideaTipImg : {
      width: 380,
      height: 230,
      background : colors.black,
      [theme.breakpoints.down("md")]: {
        width: 220,
        height: 120,
        marginTop : 10,
      },
 
    },
    imageGridTV : {
      position : 'absolute',
      top : '50%',
      textAlign : 'center'
    },
    imageGridT : {
      textAlign : 'center',
      color : colors.white,
      fontSize : 16,
      
    },
    weddingVenderV : {
      height: 600,
      width : '100%',
      marginTop : 100
    },
    weddingVenderVL : {
      background : colors.blue1
    },
    weddingVenderVR : {
      position : 'relative',
      background : colors.grey1,
      display : 'flex',
      justifyContent : 'flex-end',
      alignItems : 'flex-end'
    },
    weddingVendImg : {
      width: 550,
      height: 520,
      [theme.breakpoints.down("md")]: {
        width: 300,
        height: 280,
      }
    },
    weddingVRTV : {
      position : 'absolute',
      width: '40%',
      top : 100,
      left : 50,
   
    },
    weddingVRT : {
        fontSize : 60,
        color : colors.main1,
        [theme.breakpoints.down("md")]: {
          fontSize : 30
        }
    },
    weddingVLTV : {
      padding : 100
    },
    weddingVLHeadInfoT : {
      fontSize : 14,
      marginTop :30,
      color : colors.white,
      [theme.breakpoints.down("md")]: { 
        fontSize : 10,
        marginTop :15,
    }
    },
    weddingVLHeadT : {
      fontSize : 38,
      lineHeight : 1,
      color : colors.main2,
         [theme.breakpoints.down("md")]: { 
          fontSize : 25
      }
    },
    weddingVLHeadT : {
      fontSize : 60,
        color : colors.main1,
        [theme.breakpoints.down("md")]: {
          fontSize : 30
        }
    },
    WVLListView : {
      display : 'flex',
       marginTop : 80
    },
    weddingVLListT : {
      color : colors.white,
      lineHeight : 2.2,
      textTransform: 'uppercase',
      fontSize : 12
    }, 
    WVLListSubView : {

    },
    WVLVDevider : {
      marginLeft : 50,
      marginRight : 50,
      background : colors.blue2,
      width : 1
    },
    weddingAppView : {
      height : 550
    },
    weddingAppImageV : {
      display : 'flex',
      // marginTop : 50,
      [theme.breakpoints.down("md")]: {
        marginTop : 25
      }
    },
    weddingAppTV : {
        // marginTop : 100,
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    weddingAppT : {
        fontSize : 40,
        [theme.breakpoints.down("md")]: {
          fontSize : 25
        }
    }

  }));