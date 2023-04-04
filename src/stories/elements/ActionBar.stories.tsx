import { Meta } from "@storybook/react/types-6-0";
import { ActionBar } from "../../components/elements/ActionBar";

export default {
    title: 'composite/PickList Elements/ActionBar',
    component: ActionBar,
} as Meta

export const Default = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        onClickAddButton: () => alert(`Add user/group`),
        onClickRemoveButton: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const Assigned = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: false,
        assigned: true,
        onClickAddButton: () => alert(`Add user/group`),
        onClickRemoveButton: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const Unssigned = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: false,
        assigned: false,
        onClickAddButton: () => alert(`Add user/group`),
        onClickRemoveButton: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const Selected = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: true,
        assigned: false,
        onClickAddButton: () => alert(`Add user/group`),
        onClickRemoveButton: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const Unselected = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: false,
        assigned: false,
        onClickAddButton: () => alert(`Add user/group`),
        onClickRemoveButton: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}
