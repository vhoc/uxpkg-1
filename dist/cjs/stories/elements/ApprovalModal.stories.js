"use strict";
exports.__esModule = true;
exports.AutoApprove = exports.NoAutoApprove = void 0;
var ApprovalModal_1 = require("../../components/elements/ApprovalModal");
exports["default"] = {
    title: 'elements/Feedback/ApprovalModal',
    component: ApprovalModal_1.ApprovalModal
};
exports.NoAutoApprove = {
    args: {
        title: 'Are you sure you want to approve Request 12312313?',
        autoApprove: false,
        endDateOptions: [
            {
                label: 'Time Range: Months',
                value: 'months'
            },
            {
                label: 'Time Range: Years',
                value: 'years'
            }
        ],
        endDateValue: 'months',
        timeOptions: [
            {
                label: '1 Month',
                value: '1-month'
            },
            {
                label: '3 Months',
                value: '3-months'
            },
            {
                label: '6 Months',
                value: '6-months'
            }
        ],
        timeValue: '6-months',
        onClickCancel: function () { return alert("Cancelling..."); },
        onClickApprove: function () { return alert("Approving..."); }
    }
};
exports.AutoApprove = {
    args: {
        title: 'Are you sure you want to approve Request 12312313?',
        autoApprove: true,
        endDateOptions: [
            {
                label: 'Time Range: Months',
                value: 'months'
            },
            {
                label: 'Time Range: Years',
                value: 'years'
            }
        ],
        endDateValue: 'months',
        timeOptions: [
            {
                label: '1 Month',
                value: '1-month'
            },
            {
                label: '3 Months',
                value: '3-months'
            },
            {
                label: '6 Months',
                value: '6-months'
            }
        ],
        timeValue: '6-months',
        onClickCancel: function () { return alert("Cancelling..."); },
        onClickApprove: function () { return alert("Approving..."); }
    }
};
