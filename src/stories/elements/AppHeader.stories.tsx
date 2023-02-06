import { Meta } from "@storybook/react/types-6-0";
import AppHeader from "../../components/elements/AppHeader";
import { menu3Items } from '../../util/sample-data'

export default {
    title: 'Composite/AppHeader',
    component: AppHeader,
} as Meta

export const Default = {
    args: {
        variant: 'default',
        imgUrl: 'https://uxneighbor.com/customer-files/procyon/procyon-logo.png',
        userName: 'John Doe',
        userRole: 'coke/admin',
        dropDownMenuItems: menu3Items,
        onClickNotificationButton: () => alert(`Some action triggered.`),
    }
}