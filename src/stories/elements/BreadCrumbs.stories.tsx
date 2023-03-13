import { Meta } from "@storybook/react/types-6-0";
import { BreadCrumbs } from "../../components/elements/BreadCrumbs";
import { BreadCrumbLink } from "../../components/elements/BreadCrumbLink";
import React from "react";

export default {
    title: 'elements/Labels/BreadCrumbs',
    component: BreadCrumbs,
} as Meta

export const Default = {
    args: {
        maxItems: 2,
        children: [
            <BreadCrumbLink key={1} label="Link 1" href='/'/>,
            <BreadCrumbLink key={2} label="Link 2" href='/'/>,
            <BreadCrumbLink key={3} label="Link 3" href='/'/>,
        ]
    }   
}