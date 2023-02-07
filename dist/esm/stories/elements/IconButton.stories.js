import { IconButton } from '../../components/elements/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
export default {
    title: 'Elements/Buttons/IconButton',
    component: IconButton
};
export var Primary = {
    args: {
        icon: faBookmark,
        variant: 'primary',
        size: 'sm'
    }
};
export var Tertiary = {
    args: {
        icon: faBookmark,
        variant: 'tertiary',
        size: 'sm'
    }
};
export var Gray = {
    args: {
        icon: faBookmark,
        variant: 'gray',
        size: 'sm'
    }
};
export var GrayBlue = {
    args: {
        icon: faBookmark,
        variant: 'grayBlue',
        size: 'sm'
    }
};
export var GrayRed = {
    args: {
        icon: faBookmark,
        variant: 'grayRed',
        size: 'sm'
    }
};
library.add(faBookmark);
