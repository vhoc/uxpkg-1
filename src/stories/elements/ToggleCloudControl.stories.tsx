import { Meta } from "@storybook/react/types-6-0";
import { ToggleCloudControl } from "../../components/elements/ToggleCloudControl";

export default {
    title: 'Composite/ToggleCloudControl',
    component: ToggleCloudControl,
} as Meta

export const AWS = {
    args: {
        value: 'aws',
        ariaLabel: 'cloud-select',
    }
}

export const Google = {
    args: {
        value: 'google',
        ariaLabel: 'cloud-select',
    }
}

export const Azure = {
    args: {
        value: 'azure',
        ariaLabel: 'cloud-select',
    }
}