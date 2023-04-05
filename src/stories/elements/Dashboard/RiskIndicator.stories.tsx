import { Meta } from "@storybook/react/types-6-0";
import { RiskIndicator } from "../../../components/elements/Dashboard/RiskIndicator";

export default {
    title: 'dashboard/AccountRiskItems/RiskIndicator',
    component: RiskIndicator,
} as Meta

export const Low = {
    args: {
        variant: 'low',
    }
}

export const Medium = {
    args: {
        variant: 'medium',
    }
}

export const High = {
    args: {
        variant: 'high',
    }
}

export const Critical = {
    args: {
        variant: 'critical',
    }
}

export const Online = {
    args: {
        variant: 'online',
    }
}

export const Offline = {
    args: {
        variant: 'offline',
    }
}