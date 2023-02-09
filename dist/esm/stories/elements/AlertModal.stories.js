import AlertModal from "../../components/elements/AlertModal";
import { Button } from "../../components/elements/Button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTriangleExclamation } from "@fortawesome/sharp-solid-svg-icons";
import React from "react";
export default {
    title: 'Composite/AlertModal',
    component: AlertModal
};
export var Default = {
    args: {
        icon: faTriangleExclamation,
        title: 'Title',
        description: 'Description',
        children: React.createElement(React.Fragment, null,
            React.createElement(Button, { variant: 'gray' }, "Cancel"),
            React.createElement(Button, { variant: 'grayRed', onClick: function () { return alert('Some action triggered.'); } }, "Delete"))
    }
};
library.add(faTriangleExclamation);
