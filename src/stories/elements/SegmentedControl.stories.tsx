import { Meta } from "@storybook/react/types-6-0";
import { SegmentedControl } from "../../components/elements/SegmentedControl";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGrid, faTable } from "@fortawesome/pro-solid-svg-icons";

export default {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl,
} as Meta

export const Default = {
    args: {
        multiSelect: false,
        ariaLabel: 'grid',
        items: [
            {
                value: 'table',
                ariaLabel: 'mode-table',
                icon: faTable,
                selected: true
            },
            {
                value: 'grid',
                ariaLabel: 'mode-grid',
                icon: faGrid,
                selected: false,
            },
        ],
    }
}

library.add(faTable, faGrid)