import { Meta } from "@storybook/react/types-6-0"
import { CounterItem } from "../../../components/elements/Dashboard/CounterItem"
import React from "react"
import { CloudIcon } from "../../../components/graphical/CloudIcon"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud } from "@fortawesome/pro-regular-svg-icons"

export default {
    title: 'dashboard/CountersCard/CounterItem',
    component: CounterItem,
} as Meta

export const AWS = {
    args: {
        element: <CloudIcon type={'aws'}/>,
        count: 3,
    }
}

export const GCP = {
    args: {
        element: <CloudIcon type={'gcp'}/>,
        count: 4,
    }
}

export const Azure = {
    args: {
        element: <CloudIcon type={'azure'}/>,
        count: 5,
    }
}

export const FontAwesome = {
    args: {
        element: <FontAwesomeIcon icon={faCloud}/>,
        count: 3,
    }
}

library.add(faCloud)