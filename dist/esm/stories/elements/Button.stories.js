import { Button } from '../../components/elements/Button';
import { faUsers } from '@fortawesome/pro-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
export default {
    title: 'Elements/Buttons/Button',
    component: Button
};
export var Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Default button'
    }
};
export var Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        children: 'Gray button'
    }
};
export var GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button'
    }
};
export var GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        children: 'GrayRed button'
    }
};
export var Success = {
    args: {
        variant: 'success',
        size: 'sm',
        children: 'Success button'
    }
};
export var WithLeftIcon = {
    args: {
        icon: faUsers,
        iconPosition: 'start',
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button',
        iconColor: '#A6ABB6'
    }
};
export var WithRightIcon = {
    args: {
        icon: faUsers,
        iconPosition: 'end',
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button',
        iconColor: '#A6ABB6'
    }
};
library.add(faUsers);
