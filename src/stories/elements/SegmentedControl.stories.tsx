import { Meta } from "@storybook/react/types-6-0";
import SegmentedControl from "../../components/elements/SegmentedControl";
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook, faTable, faGrid } from "@fortawesome/sharp-solid-svg-icons";
import { faAmazon, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
//import React from "react";

export default {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl,
} as Meta

export const Default = {
    args: {
        multiSelect: false,
        ariaLabel: 'cloud-service',
        items: [
            {
                value: 'amazon',
                ariaLabel: 'cloud-service-amazon',
                icon: faAmazon
            },
            {
                value: 'google',
                ariaLabel: 'cloud-service-google',
                icon: faGoogle
            },
            {
                value: 'azure',
                ariaLabel: 'cloud-service-azure',
                icon: faMicrosoft
            },
        ],
    }
}

library.add(faAddressBook, faTable, faGrid)
//@ts-ignore
library.add(faAmazon, faGoogle, faMicrosoft as IconDefinition)