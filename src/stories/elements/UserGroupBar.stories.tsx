import { Meta } from "@storybook/react/types-6-0";
import { UserGroupBar } from "../../components/elements/UserGroupBar";

export default {
    title: 'composite/PickList Elements/UserGroupBar',
    component: UserGroupBar,
} as Meta

export const Default = {
    args: {
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        //selected: false,
        //assigned: false,
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const Assigned = {
    args: {
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
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
        type: 'user',
        name: 'Bill Murray',
        //: faUser,
        caption: 'bill@company.com',
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
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
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
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        selected: false,
        assigned: false,
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const User = {
    args: {
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        selected: false,
        assigned: false,
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}

export const Group = {
    args: {
        type: 'group',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        selected: false,
        assigned: false,
        addButtonOnClick: () => alert(`Add user/group`),
        removeButtonOnClick: () => alert(`Remove user/group`),
        style: {
            width: '394px',
        }
    }
}