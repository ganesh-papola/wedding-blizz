import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const aboutStyle = makeStyles((theme) => ({
    aboutMain :{
        paddingTop : 80
    },
    weddingServicesMain : {
        padding : 50,
        [theme.breakpoints.down("md")]: {
            padding : 20,
        }
    },
    weddingServicesV:{

    },
    weddingServicesTV : {
    },
    weddingServicesIV : {
        ...center,
        padding : 10
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
            width: 180,
            height: 190,
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
        background : colors.black,
        [theme.breakpoints.down("md")]: {
            height : 150
        }
    },
    frontCoverTMV:{
        position : 'absolute',
        width : '100%',
        height: 350,
        [theme.breakpoints.down("md")]: {
            height : 150
        }
    },
    frontCoverTMSV:{
        ...center
    },
    frontCoverTV:{},
    frontCoverHT:{
        color : colors.white,
        fontSize : 50,
        [theme.breakpoints.down("md")]: {
            fontSize : 20,
        }
    },
    frontCoverHST:{
        color : colors.white,
        fontSize : 15,
        [theme.breakpoints.down("md")]: {
            fontSize : 8,
        }
    },
    planBookWedMain:{
        padding : 50,
        background : colors.main3,
        [theme.breakpoints.down("md")]: {
            padding : 20,
        }
    },
    planBookWedI:{
        width: 500,
        height: 400,
        [theme.breakpoints.down("md")]: {
            width: 180,
            height: 190,
        }
    },
    planBookWedIV:{
        padding : 10,
        ...center
    },
    planBookWedV:{},
    planBookWedTV:{},
    planBookWedHT:{
        width:'70%',
        fontSize : 45,
        [theme.breakpoints.down("md")]: {
            fontSize : 20,
        }
    },
    attentionDetailI:{
        width: 490,
        height: 390,
        [theme.breakpoints.down("md")]: {
            width: 180,
            height: 180,
        }
    },
    attentionDetailMain :{
        padding : 50,
        paddingTop:80,
        paddingBottom:80,
        [theme.breakpoints.down("md")]: {
            padding : 20,
            paddingTop:30,
            paddingBottom:30,
        }
    }

}) )