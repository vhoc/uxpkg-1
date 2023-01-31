import { Meta } from '@storybook/react/types-6-0'
import { IconButton } from '../../components/elements/IconButton'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";


export default {
    title: 'Elements/Buttons/IconButton',
    component: IconButton,
} as Meta


export const Primary = {
    args: {
        icon: faBookmark,
        variant: 'primary',
        size: 'sm',
    }
}

export const Tertiary = {
    args: {
        icon: faBookmark,
        variant: 'tertiary',
        size: 'sm',
    }
}

export const Gray = {
    args: {
        icon: faBookmark,
        variant: 'gray',
        size: 'sm',
    }
}

export const GrayBlue = {
    args: {
        icon: faBookmark,
        variant: 'grayBlue',
        size: 'sm',
    }
}

export const GrayRed = {
    args:{
        icon: faBookmark,
        variant: 'grayRed',
        size: 'sm',
    }
}

library.add(faBookmark)