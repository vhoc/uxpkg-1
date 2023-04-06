import { ServiceCard } from '../../components/elements/ServiceCard';
import { menu2Items, } from '../../util/sample-data';
export default {
    title: 'Composite/ServiceCard',
    component: ServiceCard
};
export var Default = {
    args: {
        serviceType: 'server',
        accessState: 'granted',
        bookmarked: false,
        resourceName: 'Server name',
        resourceType: 'Server type',
        accountName: 'Account',
        region: 'us-west',
        dotMenuItems: menu2Items,
        onBookmarkClick: function () { return alert('Bookmark button triggered.'); },
        onMoreInfoClick: function () { return alert('More Info button triggered.'); }
    }
};
export var WithMoreInfoButton = {
    args: {
        serviceType: 'database',
        accessState: 'granted',
        bookmarked: false,
        showMoreInfoButton: true,
        resourceName: 'Server name',
        resourceType: 'Server type',
        accountName: 'Account',
        region: 'us-east',
        dotMenuItems: menu2Items,
        onBookmarkClick: function () { return alert('Bookmark button triggered.'); },
        onMoreInfoClick: function () { return alert('More Info button triggered.'); }
    }
};
