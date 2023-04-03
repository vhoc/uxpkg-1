import { AccountRiskItem } from "../../../components/elements/Dashboard/AccountRiskItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAcorn } from "@fortawesome/pro-regular-svg-icons";
import React from "react";
export default {
    title: 'dashboard/AccountRiskItems/AccountRiskItem',
    component: AccountRiskItem
};
export var Default = {
    args: {
        accountProvider: 'aws',
        title: 'AWS Account 1',
        caption: '9203180298130',
        riskLevel: 'high',
        style: {
            width: '326px'
        }
    }
};
export var CustomIcon = {
    args: {
        //accountProvider: 'aws',
        icon: React.createElement(FontAwesomeIcon, { icon: faAcorn }),
        title: 'AWS Account 1',
        caption: '9203180298130',
        riskLevel: 'high',
        style: {
            width: '326px'
        }
    }
};
library.add(faAcorn);
