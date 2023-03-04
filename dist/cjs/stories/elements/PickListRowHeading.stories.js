"use strict";
exports.__esModule = true;
exports.ButtonRemove = exports.ButtonAdd = void 0;
var PickListRowHeading_1 = require("../../components/elements/PickListRowHeading");
exports["default"] = {
    title: 'composite/PickList Elements/PickListRowHeading',
    component: PickListRowHeading_1.PickListRowHeading
};
exports.ButtonAdd = {
    args: {
        title: 'eks:AccessKubernetesAPI',
        button: 'add',
        onClickAddAll: function () { return alert("Pressed the Add all button"); },
        onClickRemoveAll: function () { return alert("Pressed the Remove all button"); }
    }
};
exports.ButtonRemove = {
    args: {
        title: 'eks:AccessKubernetesAPI',
        button: 'remove',
        onClickAddAll: function () { return alert("Pressed the Add all button"); },
        onClickRemoveAll: function () { return alert("Pressed the Remove all button"); }
    }
};
