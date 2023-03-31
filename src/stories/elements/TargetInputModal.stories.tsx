import { Meta } from "@storybook/react/types-6-0";
import { TargetInputModal } from "../../components/elements/TargetInputModal";
import { DisplayTypeToIconMap } from "../../components/graphical/ResourceTypesIcons";

export default {
    title: 'elements/Feedback/TargetInputModal',
    component: TargetInputModal,
} as Meta

export const Default = {
    args: {
        icon: DisplayTypeToIconMap.AWS_LAMBDA,
        title: 'AWS Lambda',
        confirmButtonLabel: 'Add to queue',
    }
}