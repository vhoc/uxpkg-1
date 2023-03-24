import { CountersCard } from "../../../components/elements/Dashboard/CountersCard";
import { faCloud, faUser } from "@fortawesome/pro-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { CloudIcon } from "../../../components/graphical/CloudIcon";
import React from "react";
export default {
    title: 'dashboard/CountersCard/CountersCard',
    component: CountersCard
};
export var Accounts = {
    args: {
        type: 'simple',
        icon: faCloud,
        title: 'Accounts',
        counterItems: [
            {
                element: React.createElement(CloudIcon, { type: 'aws' }),
                count: 3
            },
            {
                element: React.createElement(CloudIcon, { type: 'gcp' }),
                count: 3
            },
            {
                element: React.createElement(CloudIcon, { type: 'azure' }),
                count: 3
            },
        ]
    }
};
export var Users = {
    args: {
        type: 'percent-bar',
        icon: faCloud,
        title: 'Users',
        data: [
            {
                risk: '24',
                'Users': 'Users',
                value: 24
            },
            {
                risk: '40',
                'Users': 'Users',
                value: 40
            },
            {
                risk: '27',
                'Users': 'Users',
                value: 27
            },
            {
                risk: '3',
                'Users': 'Users',
                value: 3
            },
        ]
    }
};
export var Mini = {
    args: {
        type: 'mini',
        icon: faUser,
        title: '123',
        content: 'Service Identities'
    }
};
library.add(faCloud);
library.add(faUser);
