import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const privacyStyle =  makeStyles((theme) => ({
    privacyMain : {
        paddingTop:80,
        paddingBottom : 50,
        flexDirection : 'column',
        ...center
    },
    privacyHT:{
        fontSize : 33,
        color : colors.main,
        [theme.breakpoints.down("md")]: {
            fontSize : 20
        }
    },
    privacymainV:{
        padding : 20,
        paddingLeft : 100,
        paddingRight : 100,
        [theme.breakpoints.down("md")]: {
            padding : 30
        }
    },
    privacyCHT:{
        paddingTop : 30,
        paddingBottom : 5,
        color : colors.dark,
        fontSize : 15,
        textTransform:'uppercase',
        [theme.breakpoints.down("md")]: {
            fontSize : 12
        }
    },
    privacyCT:{
        paddingTop : 5,
        paddingBottom : 5,
        color : colors.dark,
        fontSize : 15,
        lineHeight : 1.3,
        // textTransform:'capitalize',
        [theme.breakpoints.down("md")]: {
            fontSize : 12
        }
    }
}))