import { Meta } from "@storybook/react/types-6-0";
import { PickListRowHeading } from "../../components/elements/PickListRowHeading";

export default {
    title: 'composite/PickList Elements/PickListRowHeading',
    component: PickListRowHeading
} as Meta

export const ButtonAdd = {
    args: {
        title: 'eks:AccessKubernetesAPI',
        button: 'add',
        onClickAddAll: () => alert(`Pressed the Add all button`),
        onClickRemoveAll: () => alert(`Pressed the Remove all button`),
    }
}

export const ButtonRemove = {
    args: {
        title: 'eks:AccessKubernetesAPI',
        button: 'remove',
        onClickAddAll: () => alert(`Pressed the Add all button`),
        onClickRemoveAll: () => alert(`Pressed the Remove all button`),
    }
}