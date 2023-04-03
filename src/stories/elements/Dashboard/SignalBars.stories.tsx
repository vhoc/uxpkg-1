import { Meta } from "@storybook/react/types-6-0";
import { SignalBars } from "../../../components/elements/Dashboard/SignalBars";

export default {
    title: 'dashboard/AccountRiskItems/SignalBars',
    component: SignalBars,
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