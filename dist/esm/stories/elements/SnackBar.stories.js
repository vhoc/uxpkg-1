import { SnackBar } from "../../components/elements/SnackBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faCheck, faHexagonExclamation, faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons';
export default {
    title: 'Elements/Feedback/SnackBar',
    component: SnackBar
};
export var Primary = {
    args: {
        variant: 'primary',
        //leftIcon: faRightToBracket,
        showDropDownButton: true,
        textMessage: '1 Access request on queue',
        continueButtonOnClick: function () { return alert("Continue button clicked."); },
        menuItems: [
            {
                value: "first-item",
                label: 'First item',
                onClick: function () { return alert("First option clicked"); }
            },
            {
                value: "second-item",
                label: 'Second item',
                onClick: function () { return alert("Second option clicked"); }
            },
            {
                value: "third-item",
                label: 'Third item',
                onClick: function () { return alert("Third option clicked"); }
            },
        ]
    }
};
export var CustomIcon = {
    args: {
        variant: 'primary',
        leftIcon: faRightToBracket,
        showDropDownButton: true,
        textMessage: '1 Access request on queue',
        continueButtonOnClick: function () { return alert("Continue button clicked."); },
        menuItems: [
            {
                value: "first-item",
                label: 'First item',
                onClick: function () { return alert("First option clicked"); }
            },
            {
                value: "second-item",
                label: 'Second item',
                onClick: function () { return alert("Second option clicked"); }
            },
            {
                value: "third-item",
                label: 'Third item',
                onClick: function () { return alert("Third option clicked"); }
            },
        ]
    }
};
export var Success = {
    args: {
        variant: 'success',
        //leftIcon: faCheck,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
export var Warning = {
    args: {
        variant: 'warning',
        //leftIcon: faHexagonExclamation,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
export var Danger = {
    args: {
        variant: 'danger',
        showExtraButton: true,
        extraButtonLabel: 'Log',
        extraButtonOnClick: function () { return alert("Log button clicked."); },
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
library.add(faRightToBracket, faCheck, faHexagonExclamation, faTriangleExclamation);
