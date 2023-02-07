import { View } from '../../components/layout/View';
export default {
    title: 'Layout/View',
    component: View
};
//const Template: Story<Props> = (args) => <View {...args} />
//export const Default = Template.bind({})
export var Default = {
    args: {
        children: 'This is a Default View'
    }
};
