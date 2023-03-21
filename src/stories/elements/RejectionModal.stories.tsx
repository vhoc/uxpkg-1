import { Meta } from "@storybook/react/types-6-0";
import { RejectionModal } from "../../components/elements/RejectionModal";

export default {
    title: 'elements/Feedback/RejectionModal',
    component: RejectionModal,
} as Meta

export const Default = {
    args: {
        title: 'Are you sure you want to reject Request 12312313?',
       
        onClickCancel: () => alert(`Cancelling...`),
        onClickReject: () => alert(`Rejecting...`),
    }
}