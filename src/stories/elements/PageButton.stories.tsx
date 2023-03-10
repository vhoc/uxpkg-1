import { Meta } from "@storybook/react/types-6-0";
import { PageButton } from "../../components/elements/PageButton";

export default {
    title: 'elements/Buttons/PageButton',
    component: PageButton,
} as Meta

export const Default = {
    args: {
        pageNumber: 1,
        onClick: () => alert(`This is page number 1`)
    }
}

export const Selected = {
    args: {
        pageNumber: 1,
        onClick: () => alert(`This is page number 1`),
        selected: true,
    }
}