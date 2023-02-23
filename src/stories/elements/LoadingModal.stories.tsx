import { Meta } from "@storybook/react/types-6-0";
import { LoadingModal } from "../../components/elements/LoadingModal";

export default {
    title: 'elements/Feedback/LoadingModal',
    component: LoadingModal,
} as Meta

export const Default = {
    args: {
        message: 'Creating policy...',
        caption: 'Please wait a few seconds.'
    }
}