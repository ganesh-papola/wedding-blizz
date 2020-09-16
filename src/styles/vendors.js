import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const vendorStyle = makeStyles((theme) => ({
    frontImage: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundColor: colors.black,
        [theme.breakpoints.down("xl")]: {
            width: '100%',
            height: 650
        },
        [theme.breakpoints.down("lg")]: {
            width: '100%',
            height: 500,
        },
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: 200
        },
        [theme.breakpoints.down("md")]: {
            width: '100%',
            height: 150
        }
    },
    frontImageView: {
        position: 'relative',

        [theme.breakpoints.up("md")]: {
            width: '100%',
            height: 550,
        },
        [theme.breakpoints.down("md")]: {
            width: '100%',
            height: 150
        }
    },
    frontImageTextView: {
        width: '32%',
        height: '80%',
        borderRadius: 10,
        padding: 20,
        background: colors.white,
        display: 'flex',
        [theme.breakpoints.up("md")]: {
            height: 450,
            position: 'absolute',
            top: '5%',
            left: '56%',
            justifyContent: 'flex-end',
        },
        [theme.breakpoints.down("md")]: {
            height: 400,
            width: '100%',
            left: 0,
            position: 'relative',
            justifyContent: 'center',
        }

    },
    headingImageText1: {
        fontSize: 36,
        color: colors.main,
        width: '70%',
        [theme.breakpoints.down("md")]: {
            fontSize: 25,
            paddingBottom: 10
        }
    },
    formControl: {
        minWidth: 120,
        width: '100%',
        height: 55,
        [theme.breakpoints.down("md")]: {
            height: 30,
        },
        [theme.breakpoints.down("lg")]: {
            height: 50,
        }
    },
    formControlV: {
        paddingBottom: 15,
        // [theme.breakpoints.down("md")]: {
        //     paddingBottom : 15
        //   }
    },
    buttonV: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down("md")]: {
            paddingTop: 20
        }
    },

    imagesGridV: {
        background: colors.white,
        padding: 50,
        paddingLeft: 100,
        paddingRight: 100,
        // paddingBottom : 30,
        [theme.breakpoints.down("md")]: {
            marginTop: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    },
    ideaTipImgV: {
        paddingTop: 10,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'scale(1)',
        transition: 'transform .2s',
        "&:hover": {
            transform: 'scale(1.15)',
            transition: 'transform .2s'
        },
    },
    ideaTipImg: {
        width: 390,
        height: 240,
        marginTop: 10,
        background: colors.black,
        [theme.breakpoints.down("md")]: {
            width: 220,
            height: 120,
            marginTop: 10,
        },

    },
    imageGridTV: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center'
    },
    imageGridT: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 16,

    },

    IdeasNTipsTopV: {
        position: 'relative',
        height: 'auto',
        [theme.breakpoints.down("md")]: {
            paddingTop: 450,
        }
    },
    IdeasNTipsHT: {
    },
    IdeasNTipsText: {
        fontSize: 40,
        color: colors.black,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    },
    catButtonV: {
        width: '100%',
        ...center
    },
    catButton: {
        width: '35%',
        [theme.breakpoints.down("md")]: {
            width: '50%',
        }
    },
    findVendorMain: {
        background: colors.main3,
        padding: 30
    },
    findVendorHV: {
        ...center,
        width: '100%',
        flexDirection: 'column',
        padding: 30
    },
    findVendorHT: {
        fontSize: 40,
        [theme.breakpoints.down("md")]: {
            fontSize: 20
        }
    },
    findVendorHST: {
        fontSize: 13,
        color: colors.grey3,
    },
    findVendorSubGV: {
        padding: 25
    },
    findVendorSubT: {
        fontSize: 33,
        lineHeight: 2,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
            lineHeight: 1.5
        }
    },
    findVendorSubInfoT: {
        fontSize: 16,
        color: colors.grey3
    },
    subImage: {
        width: 55,
        height: 50
    },
    allCategoryMain: {
        padding: 30,
        paddingLeft: 100,
        [theme.breakpoints.down("md")]: {
            paddingLeft: 30  
        }
    },
    allCategoryV: {
        width : '100%',
        display : 'flex',
        paddingTop : 30,
        paddingLeft : 0
    },
    allCatRoundImgV : {
        display : 'flex',
    },
    allCatRoundImg: {
        width: 90,
        height: 90
    },
    allCatRoundT: {
        fontSize: 15,
        color: colors.dark
    },
    allCatRoundTV : {
        paddingLeft : 20,
        display : 'flex',
        alignItems : 'center',
    },
    allStateVendMain : {
        padding: 30,
        paddingLeft: 100,
        background : colors.main3,
        [theme.breakpoints.down("md")]: {
            paddingLeft: 30  
        }
    },
    allVendorStateT : {
        fontSize: 15,
        color : colors.blue3
    },
    allVendorStateV:{
        width : '100%',
        display : 'flex',
        paddingTop : 20
    }
}))