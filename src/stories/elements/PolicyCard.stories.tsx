import { Meta } from "@storybook/react/types-6-0";
import { PolicyCard } from "../../components/elements/PolicyCard";
import { faEllipsisV } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export default {
    title: 'Composite/PolicyCard',
    component: PolicyCard,
} as Meta

export const Default = {
    args: {
        policyName: 'AWSTestPol',
        accountName: 'StagingAWSAcc',
        accountNumber: '581726338340',
        expirationTime: 'Ends in 23 days',
        onClickResources: () => alert(`Resources button clicked!`),
        onClickIdentities: () => alert(`Identities button clicked!`),
        resourcesAmount: 3,
        identitiesAmount: 4,
        menuItems: [
            {
                title: <FontAwesomeIcon icon={faEllipsisV}/>,
                submenu: [
                    {
                        title: 'Option 1',
                    },
                    {
                        title: 'Option 2',
                        action: () => alert('Action example'),
                    },
                    {
                        title: 'Option 3',
                    },
                ],
            }
        ]
    }
}

library.add(faEllipsisV)
