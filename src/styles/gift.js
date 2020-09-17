import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const giftStyle = makeStyles((theme) => ({
    giftMain :{
        width : '100%',
        ...center,
        padding : 20,
        [theme.breakpoints.down("md")]: {
            padding : 10
        }
    },
    giftListV:{
        ...center,
        width : '100%'
    },
    boxWrapper:{
        ...center,
        width : '100%',
        paddingTop : 20,
        paddingBottom : 20
    },
    headV:{
        ...center,
        width : '100%',
        position : 'relative'
    },
    giftT:{
        fontSize : 35,
        color : colors.main,
        padding:10,
        [theme.breakpoints.down("md")]: {
            fontSize : 16,
        }
    },
    addButtonV:{
        position : 'absolute',
        right : 50,
        [theme.breakpoints.down("md")]: {
            right:10
        }
    },
    giftBox:{
        width : '80%',
        height: 80,
        borderRadius : 5,
        background : colors.main4,
        ...center
    },
    giftstatsT:{
        fontSize : 15,
        paddingBottom : 10,
        [theme.breakpoints.down("md")]: {
            fontSize : 12,
        }
    },
    centerTV:{
        padding : 20,
        width : '90%'
    },
    viewDetailT : {
        color :  colors.blue3,
        fontSize : 12,
        cursor : 'pointer',
        [theme.breakpoints.down("md")]: {
            fontSize : 10,
        }
    },
    giftTotalT:{
        fontSize : 14,
        paddingLeft : 20,
        paddingRight : 20,
        [theme.breakpoints.down("md")]: {
            fontSize : 12,
        }
    },
    icon:{
        paddingLeft : 20
    }
}) )