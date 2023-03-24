import { Meta } from "@storybook/react/types-6-0";
import { CountersCard } from "../../../components/elements/Dashboard/CountersCard";
import { faCloud } from "@fortawesome/pro-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { CloudIcon } from "../../../components/graphical/CloudIcon";
import React from "react";

export default {
    title: 'dashboard/CountersCard/CountersCard',
    component: CountersCard,
} as Meta

export const Accounts = {
    args: {
        type: 'simple',
        icon: faCloud,
        title: 'Accounts',
        counterItems: [
            {
                element: <CloudIcon type={'aws'}/>,
                count: 3,
            },
            {
                element: <CloudIcon type={'gcp'}/>,
                count: 3,
            },
            {
                element: <CloudIcon type={'azure'}/>,
                count: 3,
            },
        ]
    }
}

export const Users = {
    args: {
        type: 'percent-bar',
        icon: faCloud,
        title: 'Users',
        data: [
            {// LOW
              risk: '24',
              'Users': 'Users',
              value: 24,
            },
            {// MEDIUM
              risk: '40',
              'Users': 'Users',
              value: 40,
            },
            {// HIGH
              risk: '27',
              'Users': 'Users',
              value: 27,
            },
            {// CRITICAL
              risk: '3',
              'Users': 'Users',
              value: 3,
            },
        ]
    }
}

library.add(faCloud)