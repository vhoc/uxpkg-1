import { ToggleCloudControl } from "../../components/elements/ToggleCloudControl";
export default {
    title: 'Composite/ToggleCloudControl',
    component: ToggleCloudControl
};
export var AWS = {
    args: {
        value: 'aws',
        ariaLabel: 'cloud-select'
    }
};
export var Google = {
    args: {
        value: 'google',
        ariaLabel: 'cloud-select'
    }
};
export var Azure = {
    args: {
        value: 'azure',
        ariaLabel: 'cloud-select'
    }
};
