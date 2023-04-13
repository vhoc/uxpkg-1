import { Meta } from "@storybook/react/types-6-0";
import { Paginator } from "../../components/elements/Paginator";

export default {
    title: 'elements/Paginator',
    component: Paginator,
} as Meta

export const Detault = {
    args: {
        count: 10,
        page: 4,
        onChange: () => alert(`Changed the page.`),
        boundaryCount: 1
    }
}