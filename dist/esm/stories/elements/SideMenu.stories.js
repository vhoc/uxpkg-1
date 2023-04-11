import { SideMenu } from '../../components/elements/SideMenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTasks, faGauge, faUser, faLaptop, faCloud, faLayerGroup, faWindowMaximize, faTh } from '@fortawesome/sharp-solid-svg-icons';
//import { faUsers } from '@fortawesome/sharp-solid-svg-icons'
//import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/pro-regular-svg-icons';
//import { faIdCard } from '@fortawesome/pro-regular-svg-icons'
//import { faIdCard } from '@fortawesome/pro-solid-svg-icons'
//import { faIdCard } from '@fortawesome/free-solid-svg-icons'
//import { faIdCard } from '@fortawesome/pro-duotone-svg-icons'
//import { faIdCard } from '@fortawesome/pro-light-svg-icons'
import { faIdCard } from '@fortawesome/pro-regular-svg-icons';
import { faCodePullRequestClosed } from '@fortawesome/pro-regular-svg-icons';
import { faChartNetwork } from '@fortawesome/pro-regular-svg-icons';
export default {
    title: 'Composite/SideMenu',
    component: SideMenu
};
export var Collapsed = {
    args: {
        style: {
            height: '1000px'
        },
        variant: 'primary',
        menuItems: [
            {
                icon: faTasks,
                label: 'Getting started',
                variant: 'primary'
            },
            {
                icon: faGauge,
                label: 'dashboard',
                variant: 'primary',
                selected: true
            },
            {
                itemType: 'section',
                label: 'directory'
            },
            {
                icon: faUser,
                label: 'Users',
                variant: 'primary',
                onClick: function () { return alert('Users item clicked!'); }
            },
            {
                icon: faUsers,
                label: 'User groups',
                variant: 'primary'
            },
            {
                icon: faLaptop,
                label: 'devices',
                variant: 'primary'
            },
            {
                icon: faIdCard,
                label: 'identity providers',
                variant: 'primary'
            },
            {
                itemType: 'section',
                label: 'cloud'
            },
            {
                icon: faCodePullRequestClosed,
                label: 'Filters',
                variant: 'primary'
            },
            {
                icon: faChartNetwork,
                label: 'Integrations',
                variant: 'primary'
            },
            {
                icon: faWindowMaximize,
                label: 'resources',
                variant: 'primary'
            },
            {
                icon: faTh,
                label: 'applications',
                variant: 'primary'
            },
        ]
    }
};
export var Expanded = {
    args: {
        variant: 'primary',
        collapsed: false,
        menuItems: [
            {
                icon: faTasks,
                label: 'Getting started',
                variant: 'primary'
            },
            {
                icon: faGauge,
                label: 'dashboard',
                variant: 'primary',
                selected: true
            },
            {
                itemType: 'section',
                label: 'directory'
            },
            {
                icon: faUser,
                label: 'Users',
                variant: 'primary',
                onClick: function () { return alert('Users item clicked!'); }
            },
            {
                icon: faUsers,
                label: 'User groups',
                variant: 'primary'
            },
            {
                icon: faLaptop,
                label: 'devices',
                variant: 'primary'
            },
            {
                icon: faIdCard,
                label: 'identity providers',
                variant: 'primary'
            },
            {
                itemType: 'section',
                label: 'cloud'
            },
            {
                icon: faCodePullRequestClosed,
                label: 'Filters',
                variant: 'primary'
            },
            {
                icon: faChartNetwork,
                label: 'Integrations',
                variant: 'primary'
            },
            {
                icon: faWindowMaximize,
                label: 'resources',
                variant: 'primary'
            },
            {
                icon: faTh,
                label: 'applications',
                variant: 'primary'
            },
        ]
    }
};
library.add(faTasks, faGauge, faUser, faUsers, faLaptop, faIdCard, faCloud, faLayerGroup, faWindowMaximize, faTh, faChartNetwork);
