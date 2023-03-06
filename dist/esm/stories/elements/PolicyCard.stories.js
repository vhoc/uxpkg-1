import { PolicyCard } from "../../components/elements/PolicyCard";
import { faEllipsisV } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
export default {
    title: 'Composite/PolicyCard',
    component: PolicyCard
};
export var Default = {
    args: {
        policyName: 'AWSTestPol',
        accountName: 'StagingAWSAcc',
        accountNumber: '581726338340',
        expirationTime: 'Ends in 23 days',
        onClickResources: function () { return alert("Resources button clicked!"); },
        onClickIdentities: function () { return alert("Identities button clicked!"); },
        resourcesAmount: 3,
        identitiesAmount: 4,
        menuItems: [
            {
                title: React.createElement(FontAwesomeIcon, { icon: faEllipsisV }),
                submenu: [
                    {
                        title: 'Option 1'
                    },
                    {
                        title: 'Option 2',
                        action: function () { return alert('Action example'); }
                    },
                    {
                        title: 'Option 3'
                    },
                ]
            }
        ]
    }
};
library.add(faEllipsisV);
