import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const galleryStyle = makeStyles((theme) => ({

    container: {
        paddingTop: 80,
        paddingBottom: 80,
        // ...center,
        // justifyContent: 'flex-start',
        [theme.breakpoints.down("md")]: {
            paddingTop: 90,
            paddingBottom: 90,
        }
    },
    main: {
        paddingLeft: 40,
        paddingRight: 40
    },
    fileMenu: {
        // display: 'flex',
        // alignItems: 'center'
        // ...center
    },
    buttonV: {
        padding:15,
        paddingTop: 5
    },
    imagesSV:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap'
    },
    imagesThumb:{
        height: 200,
        width: 250,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 5,
        cursor:'pointer'
    }


}))

