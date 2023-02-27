import { UserGroupBar } from "../../components/elements/UserGroupBar";
export default {
    title: 'composite/PickList Elements/UserGroupBar',
    component: UserGroupBar
};
export var Default = {
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
export var Assigned = {
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
export var Unssigned = {
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
export var Selected = {
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
export var Unselected = {
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
export var User = {
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
export var Group = {
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
