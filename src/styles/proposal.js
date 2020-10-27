
import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const proposalStyle =  makeStyles((theme) => ({ 
    proposalMain : {
        paddingTop: 80,
        paddingBottom: 80
    },
    mainBody:{
        ...center,
        flexDirection : 'column',
        paddingTop : 50
    },
    mainDetailBody:{
        ...center,
        width : '50%',
        justifyContent : 'flex-start',
        flexDirection : 'column',
        paddingTop : 50
    },
    listCard:{
        width : '40%',
        borderRadius : 10,
        minHeight : 100,
        'box-shadow': `0px 1px 4px 1px ${colors.grey6}`,
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems: 'flex-start',
        flexDirection : 'column',
        padding : 20,
        marginTop : 5,
        marginBottom : 15,
        cursor : 'pointer',
        [theme.breakpoints.down("md")]: {
            width : '80%', 
        }
    },
    prosposalNameT:{
        color : colors.main,
        fontSize : 16,
        textTransform : 'capitalize',
        overflowWrap : 'break-word'
    },
    prosposalDateT:{
        color : colors.main,
        fontSize : 13,
        marginTop : 7,
        overflowWrap : 'break-word',
        display : 'flex'
    },
    proposeMT:{
        fontSize: 13,
        color: colors.dark,
        paddingTop: 10,
        display: 'flex'
    },
    sendProposeBV : {
        width : '100%'
    },
    proposalAccepted:{
        color : colors.green,
        fontSize:13,
        marginTop : 5,
        display : 'flex'
    }
}));
export const proposeDetailStyle = {
    backgroundColor : colors.main6,
    width : '60%'
}
export const rightSideBubble = {
    display : 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
}
export const leftSideBubble = {
    display : 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
}
export const acceptedIcon = {
    colors : colors.green,
    fontSize : 16,
    marginLeft : 10
}
