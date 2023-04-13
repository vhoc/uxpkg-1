import { PaginationBar } from "../../components/elements/PaginationBar";
import { Paginator } from "../../components/elements/Paginator";
import React from "react";
export default {
    title: 'composite/PaginationBar',
    component: PaginationBar
};
export var Default = {
    args: {
        caption: '1-50 of 1234 Total resources',
        style: {
            width: '800px'
        },
        children: React.createElement(Paginator, { count: 10, page: 2, onChange: function () { return alert("Change page event."); }, boundaryCount: 1 })
    }
};
