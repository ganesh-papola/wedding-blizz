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
        paddingBottom : 20,
        paddingTop : 10
      },
      textAreaTV : {
        width : '100%',
        [theme.breakpoints.down("md")]: {
        }
      },
      dateFieldsV:{
        paddingBottom : 20,
        paddingTop : 10
      },
      inputFields : {
        width : '100%',
        height : 60,
        [theme.breakpoints.down("md")]: {
        }
      },
      phoneInputFieldV:{
        width : '100%',
        paddingBottom : 20,
        paddingTop : 10,
        fontStyle: 'GothamBook',
        fontWeight:'bold',
        color:colors.primary
      },
      phoneInputFieldVErr:{
        width : '100%',
        paddingBottom : 20,
        paddingTop : 10,
        fontStyle: 'GothamBook',
        fontWeight:'bold',
        color:colors.red
      },
      phoneInputError:{
        marginLeft: 15,
        color: colors.red
      },
      phoneInputField:{
        width : '100% !important',
        fontFamily:'GothamBook',
        fontWeight:'600',
        '&:focus':{
          border: `2px solid ${colors.primary}! important`,
          boxShadow: `0 0 0 0 !important`
        }
      },
      phoneInputFieldEr:{
        width : '100% !important',
        fontFamily:'GothamBook',
        fontWeight:'600',
        border: `1px solid ${colors.red}! important`,
        boxShadow: `0 0 0 0 !important`,
        '&:focus':{
          border: `1px solid ${colors.red}! important`,
          boxShadow: `0 0 0 0 !important`
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
      paddingBottom : 20,
        paddingTop : 10,
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
      cursor : 'pointer',
      [theme.breakpoints.down("md")]: {
        fontSize : 8
      }
    },
    breadCrumbLT :{
      ...center,
      fontSize : 13,
      color : colors.grey5,
      fontWeight : 'bold',
      textTransform : 'capitalize',
      [theme.breakpoints.down("md")]: {
        fontSize : 8
      }
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
    paddingRight : 20
  },
  alertShowV:{
    position : 'fixed',
    zIndex : 1000,
    top : 80,
    width : '100%'
  },
  alertHideV:{
    marginTop : 0
  },
  notFoundMain:{
    ...center,
    flex : 1,
    flexDirection : 'column',
    padding : 20,
    paddingTop : 80,
    paddingBottom : 100
  },
  notFoundT : {
    fontSize : 150,
    color : colors.main,
    paddingTop : 40,
    paddingBottom : 40,
    [theme.breakpoints.down("md")]: {
      fontSize : 60,
      color : colors.main,
      paddingTop : 20,
      paddingBottom : 20,
    }
  },
  notFoundTT : {
    fontSize : 50,
    color : colors.main,
    paddingTop : 40,
    paddingBottom : 40,
    [theme.breakpoints.down("md")]: {
      fontSize : 14,
      color : colors.main,
      paddingTop : 20,
      paddingBottom : 20,
    }
  },
  noReordT:{
    ...center,
    fontSize : 16,
    color : colors.main
  },
  alertButtonV:{
    ...center
  },
  googlePlacesTV : {
     position:'relative'
  },
  googlePlacesSuggestionV : {
    position : 'absolute',
    background : colors.white,
    border : ``,
    zIndex:10000,
    width : '100%',
    borderRadius : 8,
    paddingBottom : 10,
    border : `1px solid ${colors.main}`
  },
  googlePlacesSuggestionT : {
    paddingLeft : 10,
    cursor : 'pointer',
    height:50,
    display:'flex',
    alignItems:'center',
    color : colors.dark1,
    borderBottom : `1px solid ${colors.grey7}`,
    '&:hover' : {
      borderBottom : `1px solid ${colors.blue3}`,
      color : colors.blue3,
    }
  },
  addressCrossIconV : {
    display:'flex',
    justifyContent:'flex-end',
    padding : 5
  }
      
}));

export const commonButtonStyle = {
  margin : 10,
  width: 150,
  height: 45
}
export const commonButtonSmStyle = {
  margin : 5,
  marginLeft:0,
  marginBottom:0,
  marginTop: 20,
  // width: 100,
  height: 30
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
export const mainBorderDtBotton = {
  margin : 10,
  // marginLeft : 5,
  width: 200,
  height: 45,
  border : `1px dashed ${colors.main1}`,
  background : colors.white,
  color : colors.main,
  boxShadow : '0 0 black'
}
export const mainBorderDelBotton = {
  margin : 10,
  width: 200,
  height: 45,
  border : `1px dashed ${colors.red}`,
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
  marginRight : 20,
  marginLeft : 20,
  cursor : 'pointer'
}
export const alertSuccessIcon = {
  color : colors.white,
  fontSize : 15,
  marginRight : 20,
  marginLeft : 20,
  cursor : 'pointer'
}
export const groupCheck = {
  cursor : 'pointer',
  marginRight : 8,
  color : colors.dark,
  fontSize : 17
}
export const guestCheck = {
  cursor : 'pointer',
  color : colors.dark,
  fontSize : 17
}
export const groupDelete = {
  cursor : 'pointer',
  marginRight : 8,
  color : colors.red,
  fontSize : 17
}
export const groupEditIcon = {
  cursor : 'pointer',
  fontSize : 17,
  color : colors.dark
}
export const flex1 = {
  display:'flex',
  width :'100%',
 flex:1
}
export const clearAddressStyle = {
  color : colors.main,
  fontSize : 20,
  cursor : 'pointer'
}
export const btLoaderStyle = {
  color : colors.white
}