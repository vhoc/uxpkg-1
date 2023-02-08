import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import FilterBarCategory from '../../components/elements/FilterBarCategory'
import FilterBarItem from '../../components/elements/FilterBarItem'

export default {
    title: 'Elements/FilterBarResources/FilterBarCategory',
    component: FilterBarCategory,
} as Meta

export const Default = {
    args: {
        name: 'Access Status',
        children: <>
            <FilterBarItem name={'Granted'} amount={2} />
            <FilterBarItem name={'No Access'} amount={234} checked />
            <FilterBarItem name={'Bookmarked'} amount={3} />
        </>
    }
}