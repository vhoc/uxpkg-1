import { Meta } from "@storybook/react/types-6-0";
import { AccountRiskModal } from "../../../components/elements/Dashboard/AccountRiskModal";

export default {
    title: 'dashboard/AccountRiskItems/AccountRiskModal',
    component: AccountRiskModal,
} as Meta

export const Default = {
    args: {
        items: [
            {
                accountProvider: 'aws',
                title: 'AWS Account 1',
                caption: '9203180298130',
                riskLevel: 'high',
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 2',
                caption: '9203180298130',
                riskLevel: 'high',
                onClick: () => alert(`AWS Account 2`),
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 3',
                caption: '9203180298136',
                riskLevel: 'high',
                onClick: () => alert(`AWS Account 3`),
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 4',
                caption: '9203180298130',
                riskLevel: 'high',
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 5',
                caption: '9203180298130',
                riskLevel: 'high',
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 6',
                caption: '9203180298130',
                riskLevel: 'high',
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 7',
                caption: '9203180298130',
                riskLevel: 'high',
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 8',
                caption: '9203180298130',
                riskLevel: 'high',
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 9',
                caption: '9203180298130',
                riskLevel: 'high',
            },
        ]
    }
}