import { Meta } from "@storybook/react/types-6-0";
import { ResourceDropDownItem } from "../../components/elements/ResourceDropDownItem";

export default {
    title: 'composite/ResourceDropDownItem',
    component: ResourceDropDownItem
} as Meta

export const Default = {
    args: {
        icon: '[i]',
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface',
    }
}