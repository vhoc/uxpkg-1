import { Meta } from '@storybook/react/types-6-0'
import { Button } from '../../components/elements/Button'

/*
const meta: Meta = {
    title: 'Elements/Buttons/Button',
    component: Button,
}*/

export default {
    title: 'Elements/Buttons/Button',
    component: Button,
} as Meta

//const Template: Story<Props> = (args) => <Button {...args} />

//export const Default = Template.bind({})
//export const Primary = Template.bind({})
//export const Gray = Template.bind({})
//export const GrayBlue = Template.bind({})
//export const GrayRed = Template.bind({})

export const Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Default button'
    }
}

export const Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        children: 'Gray button'
    }
}

export const GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button'
    }
}

export const GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        children: 'GrayRed button'
    }
}