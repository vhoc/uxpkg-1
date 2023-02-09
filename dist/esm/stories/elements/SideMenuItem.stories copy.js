import { SideMenuItem } from '../../components/elements/SideMenuItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
export default {
    title: 'Elements/Menu Items/SideMenuItem',
    component: SideMenuItem
};
export var Primary = {
    args: {
        icon: faBookmark,
        itemType: 'item',
        variant: 'primary',
        collapsed: false,
        selected: false,
        disabled: false,
        label: 'Label'
    }
};
library.add(faBookmark);
