import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const accountStyle = makeStyles((theme) => ({
    accountMain : {
        paddingTop : 80,
        paddingBottom : 50,
        width : '100%',
        ...center,
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        [theme.breakpoints.down("md")]: {
            padding : 0
        }
    },
    sidemenuMain : {
     width : '25%',
    ...center,
    justifyContent : 'flex-end',
     paddingTop : 30,
     minHeight : 200,
     [theme.breakpoints.down("md")]: {
        display : 'none'
    }
    },
    sidemenuBoxV : {
        borderRadius : 10,
        border: `1px solid ${colors.main6}`,
        background : colors.main3,
        width : '80%'
    },
    sideMenuHeadTV : {
        ...center,
        borderBottom : `1px solid ${colors.main6}`,
    },
    sideMenuHeadT : {
        paddingTop : 20,
        paddingBottom : 20,
        fontSize : 30
    },
    menuT: {
        fontSize : 15,
        paddingTop : 17,
        paddingBottom : 17,
    },
    sideMenuBordTV:{
        ...center,
        justifyContent : 'flex-start',
        borderBottom : `1px solid ${colors.main6}`,
        cursor : 'pointer',
        paddingLeft : 20,
        "&:hover": {
            background : colors.main7
        }
    },
    dropIcon:{
        display : 'none !important',
        [theme.breakpoints.down("md")]: {
            display : 'block !important',
            paddingLeft : 10
        }
    },
    sideMenuNonBordTV:{
        ...center,
        justifyContent : 'flex-start',
        cursor : 'pointer',
        paddingLeft : 20,
        "&:hover": {
            background : colors.main7
        }
    },
    sideMenuBordSlcTV:{
        ...center,
        justifyContent : 'flex-start',
        borderBottom : `1px solid ${colors.main6}`,
        cursor : 'pointer',
        paddingLeft : 20,
        background : colors.main7
    },
    sideMenuNonBordSlcTV:{
        ...center,
        justifyContent : 'flex-start',
        cursor : 'pointer',
        paddingLeft : 20,
        background : colors.main7
    },
    selectedmenuT : {
        color : colors.main,
        fontSize : 15,
        paddingTop : 17,
        paddingBottom : 17,
    },
    renderMain : {
        width : '70%',
        paddingLeft : 20,
        paddingTop : 10,
        [theme.breakpoints.down("md")]: {
            width : '90%',
            paddingTop : 100
        }
    },
    renderAcMainHeadT : {
        fontSize : 35,
        color : colors.main,
        padding:10,
        display : 'flex',
        [theme.breakpoints.down("md")]: {
            fontSize : 20,
        }
    },
    personalDetailTV : {
        paddingLeft : 10,
        paddingRight : 10,
        [theme.breakpoints.down("md")]: {
            padding : 0
        }
    },
    acManageEmText:{
        fontSize : 13,
        paddingTop : 10
    },
    accountManageV : {
        paddingTop : 10,
        paddingBottom : 20,
        borderBottom: `1px solid ${colors.grey7}`
    },
    editEmailT : {
        paddingTop : 10,
        color : colors.blue4,
        fontSize : 13,
        cursor : 'pointer',
        textDecoration : 'underline'
    },
    updatePassT : {
        fontSize : 20,
        paddingTop:10,
        paddingBottom : 10,
        [theme.breakpoints.down("md")]: {
            fontSize : 16
        }
    },
    updatePassV : {
        paddingTop : 5,
    },
    businessStatV:{
        display : 'flex',
        padding : 10
    },
    businessStatInV:{
        padding : 15,
        borderRadius : 6,
        border: `1px solid ${colors.main}`,
        ...center,
        flexDirection : 'column',
        marginRight : 20,
        minWidth : 70,
        [theme.breakpoints.down("md")]: {
            minWidth : 50,
            marginRight : 10,
            padding : 10
        }
    },
    busStatsValuT:{
        color : colors.main,
        fontSize : 30,
        [theme.breakpoints.down("md")]: {
            fontSize : 18
        }
    },
    busStatsTitleT : {
        fontSize : 13,
        color:colors.main,
        [theme.breakpoints.down("md")]: {
            fontSize : 9
        }
    },
    spaceV20:{
        height : 30,
        width : '80%'
    },
    buttonsV:{
        display : 'flex'
    },
    myBusinessFormV:{
        width: '100%',
        ...center,
        [theme.breakpoints.down("md")]: {
            width: '100%'
        }
    }

}))