import AccessRequestModal from "../../components/elements/AccessRequestModal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faCheck } from "@fortawesome/sharp-solid-svg-icons";
export default {
    title: 'Elements/Feedback/AccessRequestModal',
    component: AccessRequestModal
};
export var AccessRequestQueued = {
    args: {
        variant: 'queued',
        requestCount: 1,
        leftIcon: faRightToBracket,
        textMessage: 'Access request on queue',
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
export var AccessRequestSubmitted = {
    args: {
        variant: 'submitted',
        leftIcon: faCheck,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
library.add(faRightToBracket, faCheck);
