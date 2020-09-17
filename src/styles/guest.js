import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const guestStyle = makeStyles((theme) => ({
    guestMain :{
        padding : 50,
        ...center,
        [theme.breakpoints.down("md")]: {
            padding : 30
        }
    }
}) )