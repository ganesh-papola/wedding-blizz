import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';


export const authModalStyle = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:'scroll',
      // width : '100%',
      [theme.breakpoints.down("md")]: {
        // height : '80%'
      }
      
    },
    headerIconV : {
      width : '100%',
      display : 'flex',
      justifyContent : 'flex-end',
      
    },
    modalBody: {
      width : 500,
      background : colors.white,
      minHeight : '30%',
      borderRadius : 10,
      padding : 10,
      outline: 'none',
      [theme.breakpoints.down("md")]: {
        width : 400,
        // height:'70%'
      }
    },
    inputFLabelT : {
      fontSize : 14,
      color : colors.dark,
      marginBottom : 10
    },
    inputFieldsV : {
      padding : 20,
      paddingBottom : 10,
      paddingTop : 5,
    },
    inputFields : {
      width : '100%',
      height : 60,
    },
    modalHeadingT : {
      color : colors.main,
      fontSize : 35,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    headingV:{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    },
    buttonV : {
      padding : 20,
      
    },
    button : {
      width : '100%',
      height : 50,
      fontSize : 18
    },
    alreadyAcV :{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center', 
      paddingTop : 20,
      paddingBottom : 10
    },
    alreadyAcT:{
      fontSize : 15,
      color : colors.black
    },
    alreadyAcSignInT:{
      fontSize : 15,
      color : colors.blue3,
      marginLeft : 10,
      cursor : 'pointer'
    },
    forgotPassV : {
      display:'flex',
      justifyContent:'center',
      alignItems : 'center'
    },
    forgotPassT : {
      paddingTop : 20,
      paddingBottom : 20,
      color : colors.blue3,
      cursor : 'pointer'
    },
    ForgotMessageT:{
      fontSize : 14,
      color : colors.dark,
      paddingTop : 10,
      paddingBottom : 10
    }
      
  }))

  export const clearIconStyle = { fontSize: 18, color : colors.grey2, cursor : 'pointer' };
  export const loaderStyle = { color : colors.main }
  export const primaryLoaderStyle = { color : colors.main }
  export const whiteLoaderStyle = { color : colors.white }