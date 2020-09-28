import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const commonStyle =  makeStyles((theme) => ({
    loaderV : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    space50 : {
        height : 50
    },
    space100 : {
        height : 100
    },
    fileInputFields:{
      width : '70%',
      height : 60,
      [theme.breakpoints.down("md")]: {
      }
    }
    ,
    inputFieldsV : {
        width : '100%',
        paddingBottom : 15,
        paddingTop : 5
      },
      textAreaTV : {
        width : '100%',
        [theme.breakpoints.down("md")]: {
        }
      },
      dateFieldsV:{
        paddingBottom : 15,
        paddingTop : 5
      },
      inputFields : {
        width : '100%',
        height : 60,
        [theme.breakpoints.down("md")]: {
        }
      },
      inputFLabelT : {
        fontSize : 14,
        color : colors.dark,
        paddingBottom : 10
      },

      formControlDropD: {
        minWidth: 120,
        minWidth : '96%',
        width: '100%',
        height: 60,
        [theme.breakpoints.down("md")]: {
          // height : 40
        }
    },
    dropdownV:{
      paddingBottom : 15,
      paddingTop : 5,
      width: '100%',
    },
    radioPv:{
      ...center,
      justifyContent : 'flex-start',
      width : '100%',
    },
    radioV : {
      ...center,
      justifyContent : 'flex-start',
      width : '100%'
    },
    radioT:{
      fontSize : 15,
      textTransform : 'capitalize',
      cursor : 'pointer'
    },
    browseButton : {
        minWidth : 150,
        height : 55,
        [theme.breakpoints.down("md")]: {
          // height : 35
        }
    },
    browseBV:{
      display : 'flex',
      justifyContent : 'space-between'
    },

    previewListV:{
      display: 'flex',
      overflowX: 'scroll',
      overflowY: 'hidden'
    },
    prevGridList:{
      transform: 'translateZ(0)',
    },
    prevImg:{
      height : 80,
      width : 80,
      borderRadius : 2
    },
    prevTitleBar:{},
    preImageV:{
      height : 80,
      width : 90,
      paddingLeft:10,
      paddingRight :10
    },
    prevIcV:{
      marginTop : -85,
      marginRight :80
    },
    prevTitle:{
      cursor : 'pointer'
    },


    hairline:{
      width : '100%',
      height : 1,
      background : colors.grey5,
      marginTop:30,
      marginBottom :30,
      opacity : 0.4
    },
    center :{
      width:'100%',
      ...center
    },
    breadCrumbMain:{
      height : 80,
      background : colors.main3,
      ...center,
      width : '100%'
    },
    breadCrumbT:{
      ...center,
      fontSize : 13,
      color : colors.grey5,
      textTransform : 'capitalize',
      cursor : 'pointer'
    },
    breadCrumbLT :{
      ...center,
      fontSize : 13,
      color : colors.grey5,
      textTransform : 'capitalize',
    },
    breadcrumbV:{
      ...center
    },
    smallDot:{
      height : 3,
      width : 3,
      background : colors.grey5,
      borderRadius : 100,
      marginLeft : 10,
      marginRight : 10
  },
  dialogContentT:{
    fontSize : 15,
    padding :10,
    paddingLeft : 20,
    paddingRight : 20
  },
  dialogButtonV:{

  },
  alertShowV:{
    position : 'fixed',
    zIndex : 1000,
    top : 80,
    width : '100%'
  },
  alertHideV:{
    marginTop : 0
  }
      
}));

export const commonButtonStyle = {
  margin : 10,
  width: 150,
  height: 45
}
export const deleteButtonStyle = {
  margin : 10,
  // marginLeft : 5,
  width: 150,
  height: 45,
  border : `1px solid ${colors.red}`,
  background : colors.white,
  color : colors.red,
  boxShadow : '0 0 black'
}
export const navButtons = {
  height : 40,
  width : 90,
  marginLeft : 10,
  marginRight : 10
}
export const alertErrorIcon = {
  color : colors.white,
  fontSize : 15,
  marginRight : 20
}
export const alertSuccessIcon = {
  color : colors.white,
  fontSize : 15,
  marginRight : 20
}
