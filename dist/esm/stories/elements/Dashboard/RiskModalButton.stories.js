import { RiskModalButton } from "../../../components/elements/Dashboard/RiskModalButton";
import { CloudIcon } from "../../../components/graphical/CloudIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/pro-regular-svg-icons";
import React from "react";
export default {
    title: 'dashboard/RiskModalButton',
    component: RiskModalButton
};
export var Default = {
    args: {
        icon: React.createElement(CloudIcon, { type: 'private' }),
        title: 'Identity Summary',
        riskLevel: 'high'
    }
};
export var Private = {
    args: {
        icon: React.createElement(CloudIcon, { type: 'private' }),
        title: 'Identity Summary',
        riskLevel: 'high'
    }
};
export var AWS = {
    args: {
        icon: React.createElement(CloudIcon, { type: 'aws' }),
        title: 'AWS account',
        riskLevel: 'low'
    }
};
export var GCP = {
    args: {
        icon: React.createElement(CloudIcon, { type: 'gcp' }),
        title: 'GCP account',
        riskLevel: 'medium'
    }
};
export var Azure = {
    args: {
        icon: React.createElement(CloudIcon, { type: 'azure' }),
        title: 'Azure account',
        riskLevel: 'critical'
    }
};
export var FontAwesome = {
    args: {
        icon: React.createElement(FontAwesomeIcon, { icon: faYinYang }),
        title: 'Custom',
        riskLevel: 'high'
    }
};
