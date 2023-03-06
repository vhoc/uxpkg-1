import { Meta } from '@storybook/react/types-6-0'
import { ImageDropDownButton } from '../../components/elements/ImageDropDownButton'
import { menu3Items } from '../../util/sample-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/pro-regular-svg-icons'
import React from 'react'

export default {
    title: 'Elements/Buttons/ImageDropDownButton',
    component: ImageDropDownButton
} as Meta

export const Clear = {
    args: {
        variant: 'clear',
        size: 'sm',
        menuItems: menu3Items,
    }
}

export const WithIconAndNoDownArrow = {
    args: {
        variant: 'gray',
        size: 'sm',
        hasDownArrow: false,
        mode: 'icon',
        menuItems: [
            {
                title: <FontAwesomeIcon icon={faEllipsisV}/>,
                submenu: [
                    {
                        title: 'Option 1',
                    },
                    {
                        title: 'Option 2',
                        action: () => alert('Action example'),
                    },
                    {
                        title: 'Option 3',
                    },
                ],
            }
        ]
    }
}

library.add(faEllipsisV)