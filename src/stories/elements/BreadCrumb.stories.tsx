import { Meta } from "@storybook/react/types-6-0";
import { BreadCrumb } from "../../components/elements/BreadCrumb";

export default {
    title: 'elements/Labels/BreadCrumb',
    component: BreadCrumb,
} as Meta

export const Default = {
    args: {
        items: [
            {
                label: "Resource Catalog",
                onClick: () => alert(`Clicked on Resource Catalog`)
            },
            {
                label: "Access Request Submission",
                onClick: () => alert(`Clicked on Access Request Submission`)
            },

            {
                label: "A third, non clickable element",
                //onClick: () => alert(`Clicked on Access Request Submission`)
            },
        ]
    }
}