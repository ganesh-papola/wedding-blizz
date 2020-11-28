import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
export const guestLandStyle =  makeStyles((theme) => ({
    container:{
        padding: 20,
        paddingTop: 80
    },
    headerImage:{
        height: 500,
        width: '90%',
        borderRadius: 8,
        background: colors.black
    },
    headerImageV:{
        width : '100%',
        ...center
    },
    subImagesV:{
        padding : 20
    },
    inviteHeader:{
        paddingLeft: 20
    },
    invitesV:{
        ...center
    },
    eventsLisCardV:{
        width: '50%'
    },
    eventsLisCardV:{
        width:'50%',
        borderRadius: 10,
        marginBottom: 30,
        padding: 30,
        'box-shadow': `0px 0px 4px 0px ${colors.grey6}`,
        cursor: 'pointer'
    },
    giftsLisCardV:{
        borderRadius: 10,
        marginBottom: 30,
        padding: 10,
        width:'100%',
        'box-shadow': `0px 0px 4px 0px ${colors.grey6}`,
        cursor: 'pointer'
    },
    eventsLisCard:{
        width:'50%',
    },
    eventT:{

    }
}))