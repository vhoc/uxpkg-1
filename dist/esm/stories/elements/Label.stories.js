import { Label } from '../../components/elements/Label';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleMinus } from '@fortawesome/sharp-solid-svg-icons';
export default {
    title: 'Elements/Labels/Label',
    component: Label
};
export var GrayBlue = {
    args: {
        variant: 'grayBlue',
        text: 'Label'
    }
};
export var Gray = {
    args: {
        variant: 'gray',
        text: 'Label'
    }
};
export var Success = {
    args: {
        variant: 'success',
        text: 'Label'
    }
};
export var Danger = {
    args: {
        variant: 'danger',
        text: 'Label'
    }
};
export var Warning = {
    args: {
        variant: 'warning',
        text: 'Label'
    }
};
export var WithIcon = {
    args: {
        variant: 'grayBlue',
        text: 'Label with a button',
        iconButton: faCircleMinus,
        onClick: function () { alert('Label button pressed!'); }
    }
};
library.add(faCircleMinus);
