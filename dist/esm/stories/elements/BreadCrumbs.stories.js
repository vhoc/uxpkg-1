import { BreadCrumbs } from "../../components/elements/BreadCrumbs";
import { BreadCrumbLink } from "../../components/elements/BreadCrumbLink";
import React from "react";
export default {
    title: 'elements/Labels/BreadCrumbs',
    component: BreadCrumbs
};
export var Default = {
    args: {
        maxItems: 2,
        children: [
            React.createElement(BreadCrumbLink, { key: 1, label: "Link 1", href: '/' }),
            React.createElement(BreadCrumbLink, { key: 2, label: "Link 2", href: '/' }),
            React.createElement(BreadCrumbLink, { key: 3, label: "Link 3", href: '/' }),
        ]
    }
};
