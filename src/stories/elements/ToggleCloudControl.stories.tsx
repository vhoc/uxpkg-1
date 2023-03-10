import { Meta } from "@storybook/react/types-6-0";
import { ToggleCloudControl } from "../../components/elements/ToggleCloudControl";

export default {
    title: 'Composite/ToggleCloudControl',
    component: ToggleCloudControl,
} as Meta

export const AWS = {
    args: {
        value: 'AWS',
        ariaLabel: 'cloud-select',
    }
}

export const Google = {
    args: {
        value: 'GCP',
        ariaLabel: 'cloud-select',
    }
}

export const Azure = {
    args: {
        value: 'AZURE',
        ariaLabel: 'cloud-select',
    }
}