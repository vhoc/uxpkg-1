import React from "react";
import { ResourceDropDownItem } from "../../components/elements/ResourceDropDownItem";
import { DisplayTypeToIconMap } from "../../components/graphical/ResourceTypesIcons";
export default {
    title: 'composite/ResourceDropDownItem',
    component: ResourceDropDownItem
};
export var Default = {
    args: {
        icon: React.createElement("img", { src: DisplayTypeToIconMap.AWS_COMPUTE_EC2, alt: "icon" }),
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface'
    }
};
