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
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
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
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
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
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
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
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
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
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
