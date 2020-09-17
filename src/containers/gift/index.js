import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { giftStyle, commonStyle } from 'styles';
import { strings } from 'constant';
import { useSelector } from "react-redux";
import { giftIcon, usersIcon } from "assets";

const { gift, common } = strings;

const dummy = [
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
    { gift: 'Whiskey Decanter Box', giftTotal: '1/3' },
]
export default props => {
    const classes = giftStyle();
    const comclasses = commonStyle();
    const { gifts = dummy } = useSelector(({ gift }) => gift);
    return (
        <Grid container className={classes.giftMain}>
            <div className={classes.headV}>
                <Box fontFamily='CormorantBold' className={classes.giftT}>
                    {gift.GiftList}
                </Box>
                <div className={classes.addButtonV}>
                    <Button onClick={() => alert("n progress ...")} variant="outlined" size="large" color='primary'>
                        {gift.AddGift}
                    </Button>
                </div>
            </div>
            <div className={classes.giftListV}>
            <Grid justify='center' container >
                {dummy.map((item, index) => (
                    <Grid item  sm={12} xs={12} md={12} lg={4} className={classes.boxWrapper} key={Math.random() + index + 'gift-list'}>
                        <div className={classes.giftBox}>
                            <img src={giftIcon} className={classes.icon} />
                            <div className={classes.centerTV}>
                                <Box fontFamily='GothamBook' className={classes.giftstatsT}>
                                    {item.gift}
                                </Box>
                                <Box fontFamily='GothamBook' className={classes.viewDetailT}>
                                    {common.ViewDetails}
                                </Box>
                            </div>
                            <Box fontFamily='Gotham' className={classes.giftTotalT}>
                                {item.giftTotal}
                            </Box>
                        </div>
                    </Grid>
                ))
                }
                </Grid>
            </div>
            
        </Grid>
    )
}