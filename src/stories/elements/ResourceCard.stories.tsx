import { Meta } from '@storybook/react/types-6-0'
import { ResourceCard } from '../../components/elements/ResourceCard'
import { menuItems, menu2Items, menu4Items } from '../../util/sample-data'

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
        onClickBookmark: () => alert('Bookmark button triggered.'),
        onClickMoreInfo: () => alert('More Info button triggered.'),
        onClickSingleSignIn: () => alert(`Single sign in function.`),
        //onClickAccess: () => alert('Access button triggered.')
    }
}

export const SingleItemButton = {
    args: {
        variant: 'primary',
        accessState: 'access',
        bookmarked: false,
        resourceName: 'vol-00g7cadc84aa19292',
        resourceType: 'AWS EC2 EBS Volume',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        dropDownItems: menu4Items,
        dotMenuItems: menu2Items,
        onClickBookmark: () => alert('Bookmark button triggered.'),
        onClickMoreInfo: () => alert('More Info button triggered.'),
        //onClickAccess: () => alert('Access button triggered.')
    }
}