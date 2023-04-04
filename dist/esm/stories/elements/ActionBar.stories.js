import { ActionBar } from "../../components/elements/ActionBar";
export default {
    title: 'composite/PickList Elements/ActionBar',
    component: ActionBar
};
export var Default = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        onClickAddButton: function () { return alert("Add user/group"); },
        onClickRemoveButton: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
export var Assigned = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: false,
        assigned: true,
        onClickAddButton: function () { return alert("Add user/group"); },
        onClickRemoveButton: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
export var Unssigned = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: false,
        assigned: false,
        onClickAddButton: function () { return alert("Add user/group"); },
        onClickRemoveButton: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
export var Selected = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: true,
        assigned: false,
        onClickAddButton: function () { return alert("Add user/group"); },
        onClickRemoveButton: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
export var Unselected = {
    args: {
        leftIcon: '[icon]',
        name: 'eks:AccessKubernetesAPI',
        selected: false,
        assigned: false,
        onClickAddButton: function () { return alert("Add user/group"); },
        onClickRemoveButton: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
