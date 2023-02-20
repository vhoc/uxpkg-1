import { Meta } from "@storybook/react/types-6-0";
import { AccessRequestModal } from "../../components/elements/AccessRequestModal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faCheck } from "@fortawesome/sharp-solid-svg-icons";

export default {
    title: 'Elements/Feedback/AccessRequestModal',
    component: AccessRequestModal,
} as Meta

export const AccessRequestQueued = {
    args: {
        variant: 'queued',
        requestCount: 1,
        leftIcon: faRightToBracket,
        textMessage: 'Access request on queue',
        continueButtonOnClick: () => alert(`Continue button clicked.`),
        menuItems: [
            {
                value: "first-item",
                label: 'First item',
                onClick: () => alert(`First option clicked`)
            },
            {
                value: "second-item",
                label: 'Second item',
                onClick: () => alert(`Second option clicked`)
            },
            {
                value: "third-item",
                label: 'Third item',
                onClick: () => alert(`Third option clicked`)
            },
        ],
    }
}

export const AccessRequestSubmitted = {
    args: {
        variant: 'submitted',
        leftIcon: faCheck,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: () => alert(`Continue button clicked.`),
    }
}

library.add(
    faRightToBracket,
    faCheck
)