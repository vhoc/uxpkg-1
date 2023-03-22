"use strict";
exports.__esModule = true;
exports.Default = void 0;
var RejectionModal_1 = require("../../components/elements/RejectionModal");
exports["default"] = {
    title: 'elements/Feedback/RejectionModal',
    component: RejectionModal_1.RejectionModal
};
exports.Default = {
    args: {
        title: 'Are you sure you want to reject Request 12312313?',
        onClickCancel: function () { return alert("Cancelling..."); },
        onClickReject: function () { return alert("Rejecting..."); }
    }
};
