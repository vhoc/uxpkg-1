import { Meta } from '@storybook/react/types-6-0'
import { ServiceCard } from '../../components/elements/ServiceCard'
import { menu2Items, } from '../../util/sample-data'

export default {
    title: 'Composite/ServiceCard',
    component: ServiceCard
} as Meta

export const Default = {
    args: {
        serviceType: 'SERVER_PRIVATE',
        accessState: 'access',
        bookmarked: false,
        resourceName: 'Server name',
        resourceType: 'Server type',
        accountName: 'Account',
        region: 'us-west',
        dotMenuItems: menu2Items,
        onClickBookmark: () => alert('Bookmark button triggered.'),
        onClickMoreInfo: () => alert('More Info button triggered.'),
    }
}


export const WithMoreInfoButton = {
    args: {
        serviceType: 'DATABASE',
        accessState: 'access',
        bookmarked: false,
        showMoreInfoButton: true,
        resourceName: 'Server name',
        resourceType: 'Server type',
        accountName: 'Account',
        region: 'us-east',
        dotMenuItems: menu2Items,
        onClickBookmark: () => alert('Bookmark button triggered.'),
        onClickMoreInfo: () => alert('More Info button triggered.'),
    }
}

