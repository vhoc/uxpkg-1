"use strict";
exports.__esModule = true;
exports.Group = exports.User = exports.Unselected = exports.Selected = exports.Unssigned = exports.Assigned = exports.Default = void 0;
var UserGroupBar_1 = require("../../components/elements/UserGroupBar");
exports["default"] = {
    title: 'composite/UserGroupBar',
    component: UserGroupBar_1.UserGroupBar
};
exports.Default = {
    args: {
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        //selected: false,
        //assigned: false,
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
exports.Assigned = {
    args: {
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
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
        type: 'user',
        name: 'Bill Murray',
        //: faUser,
        caption: 'bill@company.com',
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
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
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
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        selected: false,
        assigned: false,
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
exports.User = {
    args: {
        type: 'user',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        selected: false,
        assigned: false,
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
exports.Group = {
    args: {
        type: 'group',
        name: 'Bill Murray',
        //leftIcon: faUser,
        caption: 'bill@company.com',
        selected: false,
        assigned: false,
        addButtonOnClick: function () { return alert("Add user/group"); },
        removeButtonOnClick: function () { return alert("Remove user/group"); },
        style: {
            width: '394px'
        }
    }
};
