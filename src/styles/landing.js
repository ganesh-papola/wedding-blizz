import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const landingStyle =  makeStyles((theme) => ({
  landingMain:{
    paddingTop : 80
  },
    frontImage : {
        width: '100%',
        height: '100%',
        position : 'relative',
        backgroundSize : 'cover',
        backgroundColor: colors.black,

    },
    frontImageView:{
      width: '100%',
    },
    frontImageTextView : {
      width: '100%',
      paddingTop : 30,
      paddingBottom : 50,
      bottom : 0,
      color : colors.white,
      ...center,
      flexDirection : 'column',
      position : 'absolute',
      [theme.breakpoints.down("md")]: {
        paddingTop : 10,
        paddingBottom : 10,
      }
    },
    headingBox:{

    },
    headingImageText1 : {
      fontFamily : 'CormorantBold',
      fontSize : 150,
      lineHeight : 0.7,
      color : colors.white,
      marginLeft : 30,
      [theme.breakpoints.down("md")]: {
        fontSize : 30,
        marginLeft : 10,
        marginTop : 0
      }
    },
    headingImageText2 : {
      fontFamily : 'CormorantBold',
      fontSize : 150,
      lineHeight : 0.7,
      color : colors.white,
      [theme.breakpoints.down("md")]: {
        fontSize : 30,
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
      marginTop : 100,
      [theme.breakpoints.down("md")]: {
        marginTop : -10,
      }
    },
    downloadImage : {
      
      cursor : 'pointer',
      marginLeft : 20,
      [theme.breakpoints.down("md")]: {
        width: 40,
        height: 20,
        marginLeft : 10,
      },
      [theme.breakpoints.down("lg")]: {
        width: 80,
        height: 40,
        marginLeft : 10,
      },
      [theme.breakpoints.up("lg")]: {
        width: 159,
        height: 50,
        marginLeft : 20,
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
      paddingBottom : 20
    },
    tipsNIdeasMain:{
      ...center,
      padding : 10,
      flexDirection : 'column'
    },
    IdeasNTipsTopV:{
      paddingTop : 40
    },
    imagesGridV : {
      background: colors.white,
      padding: 50,
      paddingLeft: 100,
      paddingRight: 100,
      // paddingBottom : 30,
      [theme.breakpoints.down("md")]: {
          marginTop: 0,
          paddingLeft: 0,
          paddingRight: 0
      }
    },
    ideaTipImgV : {
      paddingTop: 10,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    categoryImageV:{
      width: 390,
      height: 240,
      overflow : 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      "&:hover > img": {
        transform: 'scale(1.15)',
        transition: 'transform .2s'
    },
      [theme.breakpoints.down("md")]: {
        width: 220,
        height: 120,
    }
    },
    ideaTipImg : {
      width: 390,
      height: 240,
      marginTop: 10,
      background: colors.black,
      transform: 'scale(1)',
      transition: 'transform .2s',
      cursor : 'pointer',
      [theme.breakpoints.down("md")]: {
          width: 220,
          height: 120,
      },
    },
    imageGridTV: {
      position: 'absolute',
      top: '50%',
      textAlign: 'center'
  },
  imageGridT: {
      textAlign: 'center',
      color: colors.white,
      fontSize: 16,
      cursor : 'pointer',
  },
    weddingVenderV : {
      width : '100%',
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
      width : 1,
      [theme.breakpoints.down("md")]: {
        marginLeft : 20,
        marginRight : 20,
      }
    },
    weddingAppView : {  
      paddingTop:50,
      paddingBottom:50,
    },
    weddingAppImageV : {
      display : 'flex',
      justifyContent :' center',
      alignItems : 'center',
      width : '100%',
      
      [theme.breakpoints.down("lg")]: {
        paddingTop : 80,
      },
      [theme.breakpoints.down("xl")]: {
        paddingTop : 100,
      },
      [theme.breakpoints.down("md")]: {
        paddingTop : 20,
    },
    },
    weddingAppTV : {
        width : '100%',
        ...center,
        flexDirection : 'column',
        [theme.breakpoints.down("md")]: {
        }
    },
    weddingAppT : {
        fontSize : 40,
        color : colors.primary,
        [theme.breakpoints.down("md")]: {
          fontSize : 16
        },
        [theme.breakpoints.up("md")]: {
          fontSize : 40
        },
    }

  }));