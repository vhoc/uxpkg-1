"use strict";
exports.__esModule = true;
exports.Unselected = exports.Selected = exports.Unssigned = exports.Assigned = exports.Default = void 0;
var ActionBar_1 = require("../../components/elements/ActionBar");
exports["default"] = {
    title: 'composite/PickList Elements/ActionBar',
    component: ActionBar_1.ActionBar
};
exports.Default = {
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
exports.Assigned = {
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
exports.Unssigned = {
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
exports.Selected = {
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
exports.Unselected = {
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
