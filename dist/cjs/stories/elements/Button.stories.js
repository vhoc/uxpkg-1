"use strict";
exports.__esModule = true;
exports.GrayRed = exports.GrayBlue = exports.Gray = exports.Primary = void 0;
var Button_1 = require("../../components/elements/Button");
/*
const meta: Meta = {
    title: 'Elements/Buttons/Button',
    component: Button,
}*/
exports["default"] = {
    title: 'Elements/Buttons/Button',
    component: Button_1.Button
};
//const Template: Story<Props> = (args) => <Button {...args} />
//export const Default = Template.bind({})
//export const Primary = Template.bind({})
//export const Gray = Template.bind({})
//export const GrayBlue = Template.bind({})
//export const GrayRed = Template.bind({})
exports.Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Default button'
    }
};
exports.Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        children: 'Gray button'
    }
};
exports.GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button'
    }
};
exports.GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        children: 'GrayRed button'
    }
};
