import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { TabGroup } from '../../components/elements/TabGroup'
import { ResourceDropDownItem } from '../../components/elements/ResourceDropDownItem'

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

export const WithResourceItem = {
    args: {
        tabContentHeight: '200px',
        tabs: [
            {
                label: "First tab",
                tabContent: <>
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
                        <ResourceDropDownItem
                            icon="[i]"
                            onClick={() => console.log(`Action triggered.`)}
                            resourceName="eni-03a9ab07d4c9111c5"
                            resourceType="AWS EC2 Network Interface"
                        />
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