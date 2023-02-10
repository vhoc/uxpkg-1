import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import TabGroup from '../../components/elements/TabGroup'

export default {
    title: 'Composite/TabGroup',
    component: TabGroup,
} as Meta

export const Default = {
    args: {
        tabs: [
            {
                label: "First tab",
                tabContent: <>
                        <h1>Tab 1</h1>
                        <p>This is Tab 1&apos;s content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires.</p>
                    </>
            },
            {
                label: "second tab",
                tabContent: <>
                        <h1>Tab 2</h1>
                        <p>This is Tab 2&apos;s content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires.</p>
                    </>
            },
            {
                label: "third tab",
                tabContent: <>
                        <h1>Tab 3</h1>
                        <p>This is Tab 3&apos;s content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires.</p>
                    </>
            },
        ]
    }
}