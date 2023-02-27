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
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
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
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
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
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
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
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
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
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}
