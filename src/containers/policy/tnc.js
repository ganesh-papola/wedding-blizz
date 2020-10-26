import React from "react";
import { Menu, MenuItem, Grid, Box, Button } from '@material-ui/core'
import { privacyStyle } from "styles";
import { strings } from 'constant';

const { privacy, common } = strings;
export default () => {
    const classes = privacyStyle();
    return (
        <div className={classes.privacyMain}>
                <Box fontFamily='CormorantBold' className={classes.privacyHT}>
                    {privacy.TermsNConditions}
                </Box>
                <div className={classes.privacymainV}>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {privacy.PrivacyPolicyH}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {privacy.PrivacyPolicyC}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {privacy.PrivacyPolicyH}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {privacy.PrivacyPolicyC}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {privacy.PrivacyPolicyH}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {privacy.PrivacyPolicyC}
                    </Box>
                </div>
        </div>
    )
}