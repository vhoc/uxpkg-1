import { AppHeader } from "../../components/elements/AppHeader";
import { menu3Items } from '../../util/sample-data';
export default {
    title: 'Composite/AppHeader',
    component: AppHeader
};
export var Default = {
    args: {
        variant: 'default',
        imgUrl: 'https://uxneighbor.com/customer-files/procyon/procyon-logo.png',
        userName: 'John Doe',
        userRole: 'coke/admin',
        dropDownMenuItems: menu3Items,
        onClickNotificationButton: function () { return alert("Some action triggered."); }
    }
};
