import { ResourceCard } from '../../components/elements/ResourceCard';
import { menuItems, menu2Items, menu4Items } from '../../util/sample-data';
export default {
    title: 'Composite/ResourceCard',
    component: ResourceCard
};
export var Primary = {
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
        onClickBookmark: function () { return alert('Bookmark button triggered.'); },
        onClickMoreInfo: function () { return alert('More Info button triggered.'); }
    }
};
export var SingleItemButton = {
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
        onClickBookmark: function () { return alert('Bookmark button triggered.'); },
        onClickMoreInfo: function () { return alert('More Info button triggered.'); }
    }
};
