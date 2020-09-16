import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const aboutStyle = makeStyles((theme) => ({
    weddingServicesMain : {
        padding : 50,
        [theme.breakpoints.down("md")]: {
            padding : 20,
        }
    },
    weddingServicesV:{

    },
    weddingServicesTV : {
        paddingLeft : 40,
        paddingRight : 40,
    },
    weddingServicesIV : {
        ...center,
    },
    weddingServicesT : {
        fontSize : 48,
        [theme.breakpoints.down("md")]: {
            fontSize : 25
        }
    },
    weddingServicesST : {
        fontSize : 15,
        paddingTop : 30,
        [theme.breakpoints.down("md")]: {
            fontSize : 12
        }
    },
    weddingServicesI:{
        width: 420,
        height: 420,
        [theme.breakpoints.down("md")]: {
            width: 250,
            height: 250,
        }
    },
    frontCoverMain:{
        paddingTop : 20
    },
    frontCoverV:{
        position : 'relative'
    },
    frontCoverI:{
        height: 350,
        width : '100%',
        background : colors.black
    },
    frontCoverTMV:{
        position : 'absolute',
        width : '100%',
        background : 'red'
    },
    frontCoverTMSV:{},
    frontCoverTV:{},
    frontCoverHT:{},
    frontCoverHST:{}

}) )