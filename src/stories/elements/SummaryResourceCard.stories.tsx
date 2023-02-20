import { Meta } from "@storybook/react/types-6-0";
import { SummaryResourceCard } from "../../components/elements/SummaryResourceCard";
import { Label } from "../../components/elements/Label";
import React from "react";

export default {
    title: 'composite/SummaryResourceCard',
    component: SummaryResourceCard,
} as Meta


export const Default = {
    args: {
        resourceIcon: '[Icon]',
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        children: <>
            <Label variant={'grayBlue'} text={'AdministratorAccess-Amplify'} />
            <Label variant={'grayBlue'} text={'AmazonAugmentedAIIntegratedAPIAccess'} />
        </>,
        isEditButtonEnabled: false,
        isDeleteButtonEnabled: true,
        onClickEditButton: () => alert(`Edit button clicked!`),
        onClickDeleteButton: () => alert(`Delete button clicked!`),
    }
}