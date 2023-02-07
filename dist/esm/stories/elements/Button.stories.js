import { Button } from '../../components/elements/Button';
/*
const meta: Meta = {
    title: 'Elements/Buttons/Button',
    component: Button,
}*/
export default {
    title: 'Elements/Buttons/Button',
    component: Button
};
//const Template: Story<Props> = (args) => <Button {...args} />
//export const Default = Template.bind({})
//export const Primary = Template.bind({})
//export const Gray = Template.bind({})
//export const GrayBlue = Template.bind({})
//export const GrayRed = Template.bind({})
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
