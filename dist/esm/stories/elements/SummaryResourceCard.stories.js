import { SummaryResourceCard } from "../../components/elements/SummaryResourceCard";
import { Label } from "../../components/elements/Label";
import React from "react";
export default {
    title: 'composite/SummaryResourceCard',
    component: SummaryResourceCard
};
export var Default = {
    args: {
        resourceIcon: '[Icon]',
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        children: React.createElement(React.Fragment, null,
            React.createElement(Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' }),
            React.createElement(Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' })),
        isEditButtonEnabled: false,
        isDeleteButtonEnabled: true,
        onClickEditButton: function () { return alert("Edit button clicked!"); },
        onClickDeleteButton: function () { return alert("Delete button clicked!"); }
    }
};
