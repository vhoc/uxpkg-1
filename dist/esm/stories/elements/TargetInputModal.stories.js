import React from "react";
import { TargetInputModal } from "../../components/elements/TargetInputModal";
import { DisplayTypeToIconMap } from "../../components/graphical/ResourceTypesIcons";
export default {
    title: 'elements/Feedback/TargetInputModal',
    component: TargetInputModal
};
export var Default = {
    args: {
        icon: React.createElement("img", { src: DisplayTypeToIconMap.AWS_LAMBDA, alt: 'AWS Lambda', style: {
                width: '34px',
                height: '34px',
                borderRadius: '4px'
            } }),
        title: 'AWS Lambda',
        confirmButtonLabel: 'Add to queue'
    }
};
