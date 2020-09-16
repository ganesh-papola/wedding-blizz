import React from "react";
import WeddingServices from './weddingServices';
import FrontCover from './frontCover';
import PlannBookWed from './planBookWedding';
import AttentionDetail from './attentionDetail';
import InvestorRelation from './investorRelation';
import AmazingValues from './amazingValues';
export default () => {
    return (
        <div>
            <WeddingServices />
            <FrontCover />
            <PlannBookWed />
            <AttentionDetail />
            <AmazingValues />
            <InvestorRelation />
        </div>
    )
}