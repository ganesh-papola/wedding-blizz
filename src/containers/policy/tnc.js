import React from "react";
import { Menu, MenuItem, Grid, Box, Button } from '@material-ui/core'
import { privacyStyle } from "styles";
import { strings } from 'constant';

const { tnc, common } = strings;
export default () => {
    const classes = privacyStyle();
    return (
        <div className={classes.privacyMain}>
                <Box fontFamily='CormorantBold' className={classes.privacyHT}>
                    {tnc.TermsNConditions}
                </Box>
                <div className={classes.privacymainV}>
                    {/* <Box fontFamily='Gotham' className={classes.privacyCHT}>
                        {tnc.WBTermsNConditions}
                    </Box> */}
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.General}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.GeneralTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Acceptance}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.AcceptanceTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Eligibility}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.EligibilityTerms}
                    </Box>


                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.YourAccount}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.YourAccountTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.ModifyingServiceAndtermnats}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.ModifyingServiceAndtermnatsTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.RegistrationObligations}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RegistrationObligationsTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Safety}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.SafetyTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Rights}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RightsTerms}
                    </Box>

                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.RulesConductForPosting}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RulesConductForPostingTerms}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RulesConductForPostingTerms1}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RulesConductForPostingTerms2}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RulesConductForPostingTerms3}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RulesConductForPostingTerms4}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.RulesConductForPostingTerms5}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.InAppPurchases}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.InAppPurchasesTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.CopyRight}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.CopyRightTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Disclaimers}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.DisclaimersTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.LimitationOfLiability}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.LimitationOfLiabilityTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Changes}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.ChangesTerms}
                    </Box>

                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Arbitration}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.ArbitrationTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.Indemnity}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.IndemnityTerms}
                    </Box>
                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.DisclaimerWarrantiesLimitationLiability}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.DisclaimerWarrantiesLimitationLiabilityTerms}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.DisclaimerWarrantiesLimitationLiabilityTerms1}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.DisclaimerWarrantiesLimitationLiabilityTerms2}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.DisclaimerWarrantiesLimitationLiabilityTerms3}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.DisclaimerWarrantiesLimitationLiabilityTerms4}
                    </Box>

                    <Box fontFamily='GothamBold' className={classes.privacyCHT}>
                        {tnc.GoverningLawVenue}
                    </Box>
                    <Box fontFamily='GothamBook' className={classes.privacyCT}>
                        {tnc.GoverningLawVenueTerms}
                    </Box>
                    
                </div>
        </div>
    )
}