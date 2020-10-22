import { makeStyles } from '@material-ui/styles';
import { colors } from 'constant';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const eventStyle = makeStyles((theme) => ({
    eventMain: {
        paddingTop: 80,
        paddingBottom: 80,
        ...center,
        // justifyContent: 'flex-start',
        [theme.breakpoints.down("md")]: {
            paddingTop: 90,
            paddingBottom: 90,
        }
    },
    eventTV: {
        width: '100%',
        ...center,
        paddingTop: 10,
        paddingBottom: 30
    },
    eventT: {
        fontSize: 35,
        color: colors.main,
        padding: 10,
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        }
    },
    addNewEventV: {
        width: '100%',
        ...center,
    },
    addNewEventBox: {
        border: 1,
        borderColor: colors.grey4,
        borderStyle: 'dashed',
        borderRadius: 6,
        opacity: 0.8,
        height: 150,
        width: 280,
        color: colors.grey5,
        fontSize: 15,
        ...center,
        flexDirection: 'column',
        cursor: 'pointer'
    },
    plusIcon: {
        height: 25,
        width: 25,
        paddingBottom: 10
    },
    addNewEventFormV: {
        width: '60%',
        ...center,
        [theme.breakpoints.down("md")]: {
            width: '100%'
        }
    },
    addNewEventFormGV: {
        position: 'relative',
        paddingRight: 20,
        paddingLeft: 20
    },
    mapTV: {
        position: 'absolute',
        display: 'flex',
        right: 20,
        color: colors.blue4,
        cursor: 'pointer'
    },
    mapT: {
        color: colors.blue4,
        fontSize: 13
    },
    spaceH20: {
        width: 20
    },
    addNewEventFormGBtV: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    cancelButton: {
        marginLeft: 50
    },

    eventDetailsCRImge: {
        //height: 500,
        width : '100%', 
        borderRadius : 5, 
        height: 300,
        [theme.breakpoints.down("md")]: {
            height: 250,
            height: 150,
        }
    },
    eventVendDetailsCRImge:{
        //height: 500,
        height: 300,
        width : '100%',
        borderRadius:5,
        [theme.breakpoints.down("md")]: {
            height: 250,
            height: 150,
        }
    },
    eventInfoV: {
        paddingTop: 20,
        width: '100%'
    },
    eventInfoVendV :{
        paddingTop: 20,
        width: '50%',
        [theme.breakpoints.down("md")]: {
            width : '100%'
        }
    },
    eventVendorInfoVendV:{
        paddingTop: 20,
        width: '40%',
        [theme.breakpoints.down("md")]: {
            width : '100%'
        }
    },
    eventInfoHT: {
        fontSize: 14
    },
    eventInfoIT: {
        fontSize: 14
    },
    eventInfoGV: {
        paddingTop: 30,
        paddingBottom: 30,
        [theme.breakpoints.down("md")]: {
            paddingTop: 20,
            paddingBottom: 20,
        }
    },
    crEventMain: {
        ...center,
        width: '35%',
        paddingLeft : 10,
        paddingRight : 10,
        [theme.breakpoints.down("md")]: {
            width: '100%',
        }
    },
    crImageV: {
        ...center
    },
    eventVendorsV: {
        ...center,
        alignItems: 'center',
        flexDirection: 'column',
        paddingRight: 25,
    },
    vendorImg: {
        height: 80,
        width: 80
    },
    centWid100: {
        ...center,
        width: '100%'
    },
    vendorImgAlt: {
        color: colors.dark,
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
    },
    vendorHorV: {
        ...center,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: '35%',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            justifyContent: 'center'
        }
    },
    roundVenV: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.grey4,
        borderStyle: 'dashed',
        opacity: 0.8,
        background: colors.main3,
        ...center,
        flexDirection: 'column',
        cursor: 'pointer',
        marginBottom: 25
    },
    plusIcon1: {
        height: 25,
        width: 25,
    },
    eventStatBox: {
        width: '50%',
        height: 50,
        borderRadius: 5,
        background: colors.main4,
        cursor : 'pointer',
        ...center
    },
    eventstatsT: {
        fontSize: 14,
        paddingLeft: 10
    },
    eventFrMain: {
        paddingTop: 100,
        paddingBottom: 100
    },
    eventFrHeadV: {
        width: '100%',
        minHeight: 100,
        background: colors.main3,
        ...center
    },
    eventVendorListMain:{
        ...center,
        paddingTop: 20,
        paddingBottom: 20,
    },
    eventVendorDetailMain:{
        ...center,
        paddingTop: 20,
        paddingBottom: 20,
    },
    eventFrListMain: {
        ...center,
        paddingTop: 20,
        paddingBottom: 20
    },
    eventFrListV: {
        borderRadius: 10,
        border: `1px solid ${colors.grey2}`,
        minHeight: 100,
        width: '60%',
        padding: 20,
        cursor:'pointer'
    },
    eventFrListContainer: {
        width: '85%'
    },
    eventFrHT: {
        fontSize: 15,
        color: colors.dark,
        paddingTop: 7
    },
    eventFrCT: {
        fontSize: 13,
        color: colors.dark,
        paddingTop: 10,
        display: 'flex'
    },
    eventFrIcons: {
        paddingRight: 10
    },
    eventFrNameHT: {
        fontSize: 14
    },
    eventFrNameHT: {
        fontSize: 13,
        paddingLeft: 15,
        marginTop: -5
    },
    eventFRheadingTV: {

    },
    eventFrReviewHT: {
        fontSize: 10,
        paddingLeft: 15,
        paddingTop: 5,
        ...center,
        justifyContent: 'flex-start',
    },
    eventVendDetailHT: {
        fontSize: 10,
        paddingTop: 5,
        ...center,
        justifyContent: 'flex-start',
    },
    smallDot: {
        height: 3,
        width: 3,
        background: colors.dark,
        borderRadius: 100,
        marginLeft: 5,
        marginRight: 5
    },
    categoriesV: {
        // paddingLeft: 100,
        // paddingRight: 50,
        width : '80% !important',
        ...center,
        justifyContent: 'flex-start',
        [theme.breakpoints.down("md")]: {
            paddingLeft: 50,
            paddingRight: 20
        }
    },
    allCategoryV: {
        width: '100%',
        display: 'flex',
        paddingTop: 30,
        paddingLeft: 0
    },
    allCatRoundImgV: {
        display: 'flex',
        borderRadius: 100
    },
    allCatRoundImg: {
        width: 90,
        height: 90,
        borderRadius: 100,
        cursor: 'pointer',
        position: 'relative',
        [theme.breakpoints.down("md")]: {
            width: 50,
            height: 50
        }
    },
    allCatSelectedImg: {
        width: 89,
        height: 89,
        borderRadius: 100,
        cursor: 'pointer',
        position: 'relative',
        border: `2px solid ${colors.green}`,
        [theme.breakpoints.down("md")]: {
            width: 50,
            height: 50
        }
    },
    allCatRoundT: {
        fontSize: 15,
        color: colors.dark,
        cursor: 'pointer',
        ...center,
        paddingLeft: 20,
        [theme.breakpoints.down("md")]: {
            paddingLeft: 10,
            fontSize: 12
        }
    },
    categoryCheckIcon: {
        color: colors.green,
        marginTop: 53,
        marginLeft: -16,
        background: colors.white,
        borderRadius: 100,
        border: `1px solid ${colors.white}`,
        zIndex: 1,
        [theme.breakpoints.down("md")]: {
            marginTop: 30,
            marginLeft: -16,
        }
    },
    categoryButonV: {
        ...center,
        paddingTop: 50  
    },
    eventVendorDetailTV : {
        ...center,
        width : '50%',
        paddingLeft :20,
        paddingRight :20,
        [theme.breakpoints.down("md")]: {
            paddingLeft :20,
            paddingRight :20,
        }
    },
    detailParentV : {
        width : '70%',
        ...center
    },
    vendorDetailParentV:{
        width : '40%',
        ...center
    },
    eventSubV : {
        ...center,
        paddingBottom : 20
    },
    eventSubT : {
        color : colors.main,
        fontSize : 25,
        [theme.breakpoints.down("md")]: {
            fontSize : 20
        }
    },
    vendorDetailBLV:{
        ...center,
        justifyContent: 'flex-end',
        [theme.breakpoints.down("md")]: {
            justifyContent: 'flex-start',
        }
    },
    chatButtonV : {
        background : colors.main4,
        height : 60,
        width : 184,
        borderRadius : 5,
        cursor : 'pointer',
        ...center
    },
    vendorDetailBRV:{
        ...center,
        paddingLeft : 30,
        justifyContent: 'flex-start',
        [theme.breakpoints.down("md")]: {
            paddingLeft : 0,
            paddingTop : 10
        }
    }, 
    vendorDetButT: {
        ...center,
        color : colors.dark1,
        fontSize : 15
    },
    vendorCategoryV:{
        display : 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
    }

}));
export const btSmallIcon = {
    color : colors.main,
    fontSize : 15,
    padding: 5,
    paddingBottom : 0
}