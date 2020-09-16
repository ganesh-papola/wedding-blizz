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
        padding : 20,
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
        marginBottom : 10
      },
      
}))