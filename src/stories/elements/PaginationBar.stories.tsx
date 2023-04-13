import { Meta } from "@storybook/react/types-6-0";
import { PaginationBar } from "../../components/elements/PaginationBar"
import { Paginator } from "../../components/elements/Paginator";
import React from "react";

export default {
    title: 'composite/PaginationBar',
    component: PaginationBar,
} as Meta

export const Default = {
    args: {
        caption: '1-50 of 1234 Total resources',
        style: {
            width: '800px',
        },
        children: <Paginator count={10} page={2} onChange={() => alert(`Change page event.`)} boundaryCount={1} />
    }
}