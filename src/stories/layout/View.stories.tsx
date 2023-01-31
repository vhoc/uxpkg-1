import { Meta } from '@storybook/react/types-6-0'
import { View } from '../../components/layout/View'


export default {
    title: 'Layout/View',
    component: View,
} as Meta

//const Template: Story<Props> = (args) => <View {...args} />

//export const Default = Template.bind({})

export const Default = {
    args: {
        children: 'This is a Default View',
    }
}