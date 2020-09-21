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
    }
      
}))