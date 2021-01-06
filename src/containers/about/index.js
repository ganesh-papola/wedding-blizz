import React from "react";
import WeddingServices from './weddingServices';
import FrontCover from './frontCover';
import PlannBookWed from './planBookWedding';
import AttentionDetail from './attentionDetail';
import InvestorRelation from './investorRelation';
import AmazingValues from './amazingValues';
import { BreadCrumb } from "components";
import { aboutStyle } from "styles";
import { strings } from 'constant';
const { about, common } = strings;

export default () => {
    const classes = aboutStyle();
    const breads = [
        { title : common.Home, path : '/' }
    ]
    return (
        <div className={classes.aboutMain}>
            <BreadCrumb current={about.AboutCompany} breads={breads} />
            <WeddingServices />
            <FrontCover />
            <PlannBookWed />
            <AttentionDetail />
            <AmazingValues />
            <InvestorRelation />
        </div>
    )
}