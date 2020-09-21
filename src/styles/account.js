import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const accountStyle = makeStyles((theme) => ({
    accountMain : {
        padding : 50,
        paddingTop : 100,
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
            width : '80%'
        }
    },
    renderAcMainHeadT : {
        fontSize : 35,
        color : colors.main,
        padding:10,
        [theme.breakpoints.down("md")]: {
            fontSize : 16,
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
    }

}))