import { CounterItem } from "../../../components/elements/Dashboard/CounterItem";
import React from "react";
import { CloudIcon } from "../../../components/graphical/CloudIcon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/pro-regular-svg-icons";
export default {
    title: 'dashboard/CountersCard/CounterItem',
    component: CounterItem
};
export var AWS = {
    args: {
        element: React.createElement(CloudIcon, { type: 'aws' }),
        count: 3
    }
};
export var GCP = {
    args: {
        element: React.createElement(CloudIcon, { type: 'gcp' }),
        count: 4
    }
};
export var Azure = {
    args: {
        element: React.createElement(CloudIcon, { type: 'azure' }),
        count: 5
    }
};
export var FontAwesome = {
    args: {
        element: React.createElement(FontAwesomeIcon, { icon: faCloud }),
        count: 3
    }
};
library.add(faCloud);
