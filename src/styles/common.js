import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

export const commonStyle =  makeStyles(() => ({
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

    inputFieldsV : {
        width : '100%',
        paddingBottom : 15,
        paddingTop : 5
      },
      dateFieldsV:{
        paddingBottom : 15,
        paddingTop : 5
      },
      inputFields : {
        width : '100%',
        height : 60,
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
    },
    dropdownV:{
      paddingBottom : 15,
      paddingTop : 5,
      width: '100%',
    }
      
}))