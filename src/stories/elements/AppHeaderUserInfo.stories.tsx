import { Meta } from '@storybook/react/types-6-0'
import AppHeaderUserInfo from '../../components/elements/AppHeaderUserInfo'

export default {
    title: 'Elements/AppHeader/AppHeaderUserInfo',
    component: AppHeaderUserInfo,
} as Meta

export const Default = {
    args: {
        userName: 'John Doe',
        userRole: 'coke/admin',
    }
}