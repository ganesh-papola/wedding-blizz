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
        fontSize : 35,
        color : colors.main,
        padding:10,
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
        width : '60%',
        ...center,
        [theme.breakpoints.down("md")]: {
            width : '100%'
        }
    },
    addNewEventFormGV : {
        position : 'relative',
        paddingRight :20,
        paddingLeft : 20
    },
    mapTV:{
        position : 'absolute',
        display : 'flex',
        right : 20,
        color : colors.blue4,
        cursor:'pointer'
    },
    mapT:{
        color:colors.blue4,
        fontSize : 13
    },
    spaceH20:{
        width : 20
    },
    addNewEventFormGBtV:{
        width : '100%', 
        display:'flex',
        justifyContent : 'space-between',
        paddingRight :20,
        paddingLeft : 20,
        paddingTop : 20,
        paddingBottom : 20
    },
    cancelButton : {
        marginLeft : 50
    },

    eventDetailsCRImge:{
        height : 500,
        height : 300,
        [theme.breakpoints.down("md")]: {
            height : 250,
            height : 150,
        }
    },
    eventInfoV : {
        paddingTop : 20,
        width : '50%'
    },
    eventInfoHT:{
        fontSize : 14
    },
    eventInfoIT:{
        fontSize : 14
    },
    eventInfoGV:{
        paddingTop : 30,
        paddingBottom : 30,
        [theme.breakpoints.down("md")]: {
            paddingTop : 20,
            paddingBottom : 20,
        }
    },
    crEventMain:{
        ...center,
        width : '35%',
        [theme.breakpoints.down("md")]: {
            width : '100%'
        }
    },
    crImageV:{
        ...center
    },
    eventVendorsV:{
        ...center,
        flexDirection : 'column',
        paddingRight : 20,
        paddingLeft : 20,
    },
    vendorImg :{
        height : 80,
        width : 80
    },
    centWid100:{
        ...center,
        width :'100%'
    },
    vendorImgAlt:{
        color:colors.dark,
        fontSize : 14,
        paddingTop : 10,
        paddingBottom : 10,
    },
    vendorHorV:{
        ...center,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width : '35%',
        [theme.breakpoints.down("md")]: {
            width : '100%',
            justifyContent: 'center'
        }
    },
    roundVenV:{
        width: 80,
        height: 80,
        borderRadius : 100,
        borderWidth:1,
        borderColor : colors.grey4,
        borderStyle : 'dashed',
        opacity : 0.8,
        background : colors.main3,
        ...center,
        flexDirection : 'column',
        cursor : 'pointer',
        marginBottom : 25
    },
    plusIcon1:{
        height : 25,
        width : 25,
    },
    eventStatBox:{
        width : '50%',
        height: 50,
        borderRadius : 5,
        background : colors.main4,
        ...center
    },
    eventstatsT:{
       fontSize : 14,
       paddingLeft:10 
    },
    
}));
