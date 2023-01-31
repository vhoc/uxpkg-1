import { Meta } from '@storybook/react/types-6-0'
import { ResourceCard } from '../../components/elements/ResourceCard'
import { menuItems, menu2Items } from '../../util/sample-data'

export default {
    title: 'Composite/ResourceCard',
    component: ResourceCard
} as Meta

export const Primary = {
    args: {
        variant: 'primary',
        accessState: 'access',
        bookmarked: false,
        resourceName: 'vol-00g7cadc84aa19292',
        resourceType: 'AWS EC2 EBS Volume',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        dropDownItems: menuItems,
        dotMenuItems: menu2Items,
        onBookmarkClick: () => alert('Bookmark button triggered.'),
        onMoreInfoClick: () => alert('More Info button triggered.'),
        onAccessClick: () => alert('Access button triggered.')
    }
}