import { Meta } from '@storybook/react/types-6-0'
import { Label } from '../../components/elements/Label'

export default {
    title: 'Elements/Labels/Label',
    component: Label
} as Meta

export const GrayBlue = {
    args: {
        variant: 'grayBlue',
        text: 'Label',
    }
}

export const Gray = {
    args: {
        variant: 'gray',
        text: 'Label',
    }
}

export const Success = {
    args: {
        variant: 'success',
        text: 'Label',
    }
}

export const Danger = {
    args: {
        variant: 'danger',
        text: 'Label',
    }
}

export const Warning = {
    args: {
        variant: 'warning',
        text: 'Label',
    }
}