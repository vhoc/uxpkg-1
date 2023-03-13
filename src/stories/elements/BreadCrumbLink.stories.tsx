import { Meta } from "@storybook/react/types-6-0";
import { BreadCrumbLink } from "../../components/elements/BreadCrumbLink";

export default {
    title: 'elements/Labels/BreadCrumbLink',
    component: BreadCrumbLink,
} as Meta

export const Default = {
    args: {
        label: 'Link',
        href: 'http://uxneighbor.com/',
    }
}