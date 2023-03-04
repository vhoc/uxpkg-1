import React from 'react';
import { TabGroup } from '../../components/elements/TabGroup';
import { ResourceDropDownItem } from '../../components/elements/ResourceDropDownItem';
export default {
    title: 'Composite/TabGroup',
    component: TabGroup
};
export var Default = {
    args: {
        tabs: [
            {
                label: "First tab",
                tabContent: React.createElement(React.Fragment, null,
                    React.createElement("h1", null, "Tab 1"),
                    React.createElement("p", null, "This is Tab 1's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
            {
                label: "second tab",
                tabContent: React.createElement(React.Fragment, null,
                    React.createElement("h1", null, "Tab 2"),
                    React.createElement("p", null, "This is Tab 2's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
            {
                label: "third tab",
                tabContent: React.createElement(React.Fragment, null,
                    React.createElement("h1", null, "Tab 3"),
                    React.createElement("p", null, "This is Tab 3's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
        ]
    }
};
export var WithResourceItem = {
    args: {
        tabContentHeight: '200px',
        tabs: [
            {
                label: "First tab",
                tabContent: React.createElement(React.Fragment, null,
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    React.createElement(ResourceDropDownItem, { icon: "[i]", onClick: function () { return console.log("Action triggered."); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }))
            },
            {
                label: "second tab",
                tabContent: React.createElement(React.Fragment, null,
                    React.createElement("h1", null, "Tab 2"),
                    React.createElement("p", null, "This is Tab 2's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
            {
                label: "third tab",
                tabContent: React.createElement(React.Fragment, null,
                    React.createElement("h1", null, "Tab 3"),
                    React.createElement("p", null, "This is Tab 3's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
        ]
    }
};
