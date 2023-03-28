import { Meta } from '@storybook/react/types-6-0'
import { SideMenu } from '../../components/elements/SideMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faGauge, faUser, faUsers, faLaptop, faAddressCard, faCloud, faLayerGroup, faWindowMaximize, faTh } from '@fortawesome/sharp-solid-svg-icons'

export default {
    title: 'Composite/SideMenu',
    component: SideMenu,
} as Meta

export const Collapsed = {
    args: {
        style: {
            height: '1000px',
        },
        variant: 'primary',
        menuItems: [
            {
                icon: faTasks,
                label: 'Getting started',
                variant: 'primary',
            },
            {
                icon: faGauge,
                label: 'dashboard',
                variant: 'primary',
                selected: true,
            },
            {
                itemType: 'section',
                label: 'directory',
            },
            {
                icon: faUser,
                label: 'Users',
                variant: 'primary',
                onClick: () => alert('Users item clicked!'),
            },
            {
                icon: faUsers,
                label: 'User groups',
                variant: 'primary',
            },
            {
                icon: faLaptop,
                label: 'devices',
                variant: 'primary',
            },
            {
                icon: faAddressCard,
                label: 'identity providers',
                variant: 'primary',
            },
            {
                itemType: 'section',
                label: 'cloud',
            },
            {
                icon: faCloud,
                label: 'clouds',
                variant: 'primary',
            },
            {
                icon: faLayerGroup,
                label: 'Targets',
                variant: 'primary',
            },
            {
                icon: faWindowMaximize,
                label: 'resources',
                variant: 'primary',
            },
            {
                icon: faTh,
                label: 'applications',
                variant: 'primary',
            },
        ]
    }
}

export const Expanded = {
    args: {
        variant: 'primary',
        collapsed: false,
        menuItems: [
            {
                icon: faTasks,
                label: 'Getting started',
                variant: 'primary',
            },
            {
                icon: faGauge,
                label: 'dashboard',
                variant: 'primary',
                selected: true,
            },
            {
                itemType: 'section',
                label: 'directory',
            },
            {
                icon: faUser,
                label: 'Users',
                variant: 'primary',
                onClick: () => alert('Users item clicked!'),
            },
            {
                icon: faUsers,
                label: 'User groups',
                variant: 'primary',
            },
            {
                icon: faLaptop,
                label: 'devices',
                variant: 'primary',
            },
            {
                icon: faAddressCard,
                label: 'identity providers',
                variant: 'primary',
            },
            {
                itemType: 'section',
                label: 'cloud',
            },
            {
                icon: faCloud,
                label: 'clouds',
                variant: 'primary',
            },
            {
                icon: faLayerGroup,
                label: 'Targets',
                variant: 'primary',
            },
            {
                icon: faWindowMaximize,
                label: 'resources',
                variant: 'primary',
            },
            {
                icon: faTh,
                label: 'applications',
                variant: 'primary',
            },
        ]
    }
}

library.add(
    faTasks,
    faGauge,
    faUser,
    faUsers,
    faLaptop,
    faAddressCard,
    faCloud,
    faLayerGroup,
    faWindowMaximize,
    faTh
)