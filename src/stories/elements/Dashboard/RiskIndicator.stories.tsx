import { Meta } from "@storybook/react/types-6-0";
import { RiskIndicator } from "../../../components/elements/Dashboard/RiskIndicator";

export default {
    title: 'dashboard/AccountRiskItems/RiskIndicator',
    component: RiskIndicator,
} as Meta

export const Low = {
    args: {
        level: 'low',
    }
}

export const Medium = {
    args: {
        level: 'medium',
    }
}

export const High = {
    args: {
        level: 'high',
    }
}

export const Critical = {
    args: {
        level: 'critical',
    }
}