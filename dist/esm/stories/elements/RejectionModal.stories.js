import { RejectionModal } from "../../components/elements/RejectionModal";
export default {
    title: 'elements/Feedback/RejectionModal',
    component: RejectionModal
};
export var Default = {
    args: {
        title: 'Are you sure you want to reject Request 12312313?',
        onClickCancel: function () { return alert("Cancelling..."); },
        onClickReject: function () { return alert("Rejecting..."); }
    }
};
