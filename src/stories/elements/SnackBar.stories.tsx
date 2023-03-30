import { Meta } from "@storybook/react/types-6-0";
import { SnackBar } from "../../components/elements/SnackBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faCheck, faHexagonExclamation, faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons';

export default {
    title: 'Elements/Feedback/SnackBar',
    component: SnackBar,
} as Meta

export const Primary = {
    args: {
        variant: 'primary',
        //leftIcon: faRightToBracket,
        showDropDownButton: true,
        textMessage: '1 Access request on queue',
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

export const CustomIcon = {
    args: {
        variant: 'primary',
        leftIcon: faRightToBracket,
        showDropDownButton: true,
        textMessage: '1 Access request on queue',
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

export const Success = {
    args: {
        variant: 'success',
        //leftIcon: faCheck,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: () => alert(`Continue button clicked.`),
    }
}

export const Warning = {
    args: {
        variant: 'warning',
        //leftIcon: faHexagonExclamation,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: () => alert(`Continue button clicked.`),
    }
}

export const Danger = {
    args: {
        variant: 'danger',
        showExtraButton: true,
        extraButtonLabel: 'Log',
        extraButtonOnClick: () => alert(`Log button clicked.`),
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: () => alert(`Continue button clicked.`),
    }
}

library.add(
    faRightToBracket,
    faCheck,
    faHexagonExclamation,
    faTriangleExclamation
)