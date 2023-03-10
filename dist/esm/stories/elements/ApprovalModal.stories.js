import { ApprovalModal } from "../../components/elements/ApprovalModal";
export default {
    title: 'elements/Feedback/ApprovalModal',
    component: ApprovalModal
};
export var NoAutoApprove = {
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
export var AutoApprove = {
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
