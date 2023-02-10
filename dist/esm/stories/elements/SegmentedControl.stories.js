import SegmentedControl from "../../components/elements/SegmentedControl";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook, faTable, faGrid } from "@fortawesome/sharp-solid-svg-icons";
import { faAmazon, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
export default {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl
};
export var Default = {
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
        ]
    }
};
library.add(faAddressBook, faTable, faGrid);
library.add(faAmazon, faGoogle, faMicrosoft);
