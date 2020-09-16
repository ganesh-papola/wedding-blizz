import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const eventStyle = makeStyles((theme) => ({
    eventMain : {
        padding : 50,
        ...center,
        [theme.breakpoints.down("md")]: {
            padding : 30
        }
    },
    eventTV : {
        width : '100%',
        ...center,
        paddingTop:10,
        paddingBottom : 30
    },
    eventT:{
        fontSize : 30,
        color : colors.main,
        [theme.breakpoints.down("md")]: {
            fontSize : 16,
        }
    },
    addNewEventV : {
        width : '100%',
        ...center,
    },
    addNewEventBox: {
        border : 1,
        borderColor : colors.grey4,
        borderStyle : 'dashed',
        borderRadius : 6,
        opacity : 0.8,
        height: 150,
        width : 280,
        color : colors.grey5,
        fontSize : 15,
        ...center,
        flexDirection : 'column',
        cursor : 'pointer'
    },
    plusIcon:{
        height : 25,
        width : 25,
        paddingBottom : 10
    },
    addNewEventFormV : {
        width : '70%',
        ...center
    },
    addNewEventFormGV : {
        
    }
}))