import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
export const vendorStyle =  makeStyles((theme) => ({
    frontImage : {
        width: '100%',
        height: '100%',
        position : 'relative',
        backgroundSize : 'cover',
        backgroundColor: colors.black,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: 200
          },
    },
    frontImageView:{
      [theme.breakpoints.down("xl")]: {
        width: '100%',
        height: 650,
        position : 'relative',
      },
      [theme.breakpoints.down("lg")]: {
        width: '100%',
        height: 450,
      },
      [theme.breakpoints.down("sm")]: {
        width: '100%',
        height: 200
      },
    },
    frontImageTextView : {
      width: '32%',
      height: '80%',
      borderRadius : 10,
      top : '5%',
      left : '56%',
      background : colors.white,
      display : 'flex',
      justifyContent : 'flex-end',
      position : 'absolute',
      padding : 20
     
    },
    headingImageText1 : {
        fontSize : 36,
        color : colors.main,
        width : '70%'
    },
    formControl:{
        minWidth : 120,
        width : '100%',
    },
    formControlV : {
        paddingBottom : 15,
    },
    buttonV : {
        width : '100%',
        display : 'flex',
        justifyContent : 'flex-end'
    }
}))