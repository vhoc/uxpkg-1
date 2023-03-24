import { Meta } from "@storybook/react/types-6-0";
import { CloudIcon } from "../../components/graphical/CloudIcon";

export default {
    title: 'elements/Graphical/CloudIcon',
    component: CloudIcon,
} as Meta

export const AWS = {
    args: {
        type: 'aws'
    }
}

export const GCP = {
    args: {
        type: 'gcp'
    }
}

export const Azure = {
    args: {
        type: 'azure'
    }
}