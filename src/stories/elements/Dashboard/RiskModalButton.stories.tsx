import { Meta } from "@storybook/react/types-6-0";
import { RiskModalButton } from "../../../components/elements/Dashboard/RiskModalButton";
import { CloudIcon } from "../../../components/graphical/CloudIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/pro-regular-svg-icons";
import React from "react";

export default {
    title: 'dashboard/RiskModalButton',
    component: RiskModalButton,
} as Meta

export const Default = {
    args: {
        icon: <CloudIcon type={'private'}/>,
        title: 'Identity Summary',
        riskLevel: 'high',
    }
}

export const Private = {
    args: {
        icon: <CloudIcon type={'private'}/>,
        title: 'Identity Summary',
        riskLevel: 'high',
    }
}

export const AWS = {
    args: {
        icon: <CloudIcon type={'aws'}/>,
        title: 'AWS account',
        riskLevel: 'low',
    }
}

export const GCP = {
    args: {
        icon: <CloudIcon type={'gcp'}/>,
        title: 'GCP account',
        riskLevel: 'medium',
    }
}

export const Azure = {
    args: {
        icon: <CloudIcon type={'azure'}/>,
        title: 'Azure account',
        riskLevel: 'critical',
    }
}

export const FontAwesome = {
    args: {
        icon: <FontAwesomeIcon icon={faYinYang}/>,
        title: 'Custom',
        riskLevel: 'high',
    }
}