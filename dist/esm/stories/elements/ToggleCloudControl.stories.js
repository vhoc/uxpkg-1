import { ToggleCloudControl } from "../../components/elements/ToggleCloudControl";
export default {
    title: 'Composite/ToggleCloudControl',
    component: ToggleCloudControl
};
export var AWS = {
    args: {
        value: 'AWS',
        ariaLabel: 'cloud-select'
    }
};
export var Google = {
    args: {
        value: 'GCP',
        ariaLabel: 'cloud-select'
    }
};
export var Azure = {
    args: {
        value: 'AZURE',
        ariaLabel: 'cloud-select'
    }
};
export var Private = {
    args: {
        value: 'PRIVATE',
        ariaLabel: 'cloud-select'
    }
};
