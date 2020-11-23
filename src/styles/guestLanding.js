import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
export const guestLandStyle =  makeStyles((theme) => ({
    container:{
        padding: 20,
        paddingTop: 80
    },
    headerImage:{
        height: 500,
        width: '90%',
        borderRadius: 8,
        background: colors.black
    },
    headerImageV:{
        width : '100%',
        ...center
    },
    subImagesV:{
        padding : 20
    }
}))