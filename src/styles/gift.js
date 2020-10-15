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
        paddingTop : 80,
        [theme.breakpoints.down("md")]: {
            padding : 10,

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
    boxGuestWrapper:{
        width : '100%',
        paddingTop : 20,
        paddingBottom : 20,
        alignSelf: 'baseline',
        display : 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
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
    },
    giftDetailDialogMain:{
        width : '100%',
    },
    giftDetailModalBodyMainV:{
        minWidth : 300
    },
    dialogTitleV:{
        width : '100%',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems: 'center',
    },
    cancelIcon : {
        cursor : 'pointer',
        opacity : .5,
        paddingRight : 20
    },
    detailModalTitleHT : {
        fontSize : 24,
        // paddingRight : 100,
        color : colors.primary
    },
    dialogTitleT :{
        color : colors.main5,
        fontSize : 12,
        paddingTop:10

    },
    contentHV:{
        display : 'flex',
        width : '100%',
        justifyContent : 'flex-start'
    },
    dialogIcon:{
        paddingRight : 10
    },
    giftNameT:{
        fontSize : 17
    },
    dialogDetailT:{
        fontSize : 12,
        color : colors.dark,
        paddingTop : 5
    },
    giftDetailModalBody : {
        paddingBottom : 10
    },
}) )