import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import FilterBarResources from '../../components/elements/FilterBarResources'
import FilterBarCategory from '../../components/elements/FilterBarCategory'
import FilterBarItem from '../../components/elements/FilterBarItem'

export default {
    title: 'Composite/FilterBarResources',
    component: FilterBarResources,
} as Meta

export const Default = {
    args: {
        children: <>
            <FilterBarCategory name='Access Status'>
                <FilterBarItem name={'Granted'} amount={2} />
                <FilterBarItem name={'No Access'} amount={234} checked />
                <FilterBarItem name={'Bookmarked'} amount={3} />
            </FilterBarCategory>
            <FilterBarCategory name='resource types'>
                <FilterBarItem name={'EC2 EBS Volume'} />
                <FilterBarItem name={'EC2 Elastic IP'} />
                <FilterBarItem name={'EC2 Instance'} />
                <FilterBarItem name={'EC2 Key Pair'} />
                <FilterBarItem name={'EC2 Load Balancer'} />
                <FilterBarItem name={'EKS'} />
                <FilterBarItem name={'KMS'} />
                <FilterBarItem name={'LAMBDA'} />
            </FilterBarCategory>
        </>
    }
}