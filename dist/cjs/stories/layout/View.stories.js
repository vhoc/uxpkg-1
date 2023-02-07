"use strict";
exports.__esModule = true;
exports.Default = void 0;
var View_1 = require("../../components/layout/View");
exports["default"] = {
    title: 'Layout/View',
    component: View_1.View
};
//const Template: Story<Props> = (args) => <View {...args} />
//export const Default = Template.bind({})
exports.Default = {
    args: {
        children: 'This is a Default View'
    }
};
