import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const shadow = {
    'box-shadow': `0px 4px 3px 2px ${colors.grey6}`,
}
export const chatStyle =  makeStyles((theme) => ({
        chatMain:{
            position : 'fixed',
            height : '70%',
            width : '35%',
            bottom : 100,
            right : 30,
            minHeight : 400,
            zIndex : 1000,
            ...shadow,
            borderRadius : 10,
            background : colors.white,
            [theme.breakpoints.down("md")]: {
                width : '80%', 
            }
        },
        chatCloseMain:{
            position : 'fixed',
            bottom : 50,
            right : 30,
            ...center,
            borderRadius : 100,
            background : colors.main,
            cursor : 'pointer',
            padding : 15
        },
        chatHeaderMain : {
            background : colors.main,
            marginTop : 0,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            padding: 15,
            height : '15%',
            ...shadow
        },
        chatBodyMain : {
            background : colors.white,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            padding:15,
            // paddingBottom: 10,
            height : '60%',
            overflowY:'scroll',
            display:'flex',
            flexDirection : 'column',
            flex:1
        },
        closeMain:{
            display : 'flex',
            justifyContent: 'flex-end',
        },
        closeV : {
            display : 'flex'
        },
        chatHeaderV:{
            ...center,
            flexDirection : 'column'
        },
        chatHeaderTT:{
            fontSize : 18,
            color : colors.white,
            textTransform : 'capitalize',
            paddingTop:5,
            paddingBottom:5
        },
        chatHeaderST:{
            fontSize : 16,
            color : colors.white,
            textTransform : 'capitalize',
            paddingTop:5,
            paddingBottom:5
        },
        inputV:{
            ...center,
            position:'fixed',
            bottom:95,
            width:'35%',
            background:colors.white,
            paddingTop:5,
            paddingBottom:10,
            borderRadius:3,
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            border : `1px solid ${colors.grey7}`
            
        },
        input:{
            display:'flex',
            flexDirection:'column',
            flex:1,
            paddingLeft:10,
            // width : '90%'
        }
}));
export const navIconStyle = {
    fontSize : 19,
    color : colors.white,
    marginLeft : 10,
    cursor : 'pointer'
}
export const msgIconStyle = {
    fontSize : 25,
    color : colors.white
}
export const sendIconStyle = {
    marginRight : 10,
    color:colors.grey,
    cursor : 'pointer'
}
export const sendIconActiveStyle = {
    marginRight : 10,
    color:colors.main,
    cursor : 'pointer'
}