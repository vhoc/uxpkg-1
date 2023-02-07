import { DropDownButton } from '../../components/elements/DropDownButton';
import { menuItems } from '../../util/sample-data';
export default {
    title: 'Elements/Buttons/DropDownButton',
    component: DropDownButton
};
export var Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        menuItems: menuItems
    }
};
export var Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        menuItems: menuItems
    }
};
export var GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        menuItems: menuItems
    }
};
export var GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        menuItems: menuItems
    }
};
