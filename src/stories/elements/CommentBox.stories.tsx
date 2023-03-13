import { Meta } from "@storybook/react/types-6-0";
import { CommentBox } from "../../components/elements/CommentBox";

export default {
    title: 'elements/Feedback/CommentBox',
    component: CommentBox,
} as Meta

export const Default = {
    args: {
        title: 'Suman',
        timestamp: 'Dec 12, 2022 2:05 PM',
        comment: 'I need access to these resources for database configuration',
        style: {
            width: '583px',
        }
    }
}