import React from "react";
import SegmentedControl from "../../components/elements/SegmentedControl";
import SegmentedControlButton from "../../components/elements/SegmentedControlButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl
};
export var Default = {
    args: {
        multiSelect: false,
        ariaLabel: 'cloud-service',
        children: React.createElement(React.Fragment, null,
            React.createElement(SegmentedControlButton, { value: "aws", ariaLabel: "cloud-service-aws" },
                React.createElement(FontAwesomeIcon, { icon: 'fa-brands fa-react' })))
    }
};
