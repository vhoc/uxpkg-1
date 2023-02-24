"use strict";
exports.__esModule = true;
exports.Default = void 0;
var BreadCrumb_1 = require("../../components/elements/BreadCrumb");
exports["default"] = {
    title: 'elements/Labels/BreadCrumb',
    component: BreadCrumb_1.BreadCrumb
};
exports.Default = {
    args: {
        items: [
            {
                label: "Resource Catalog",
                onClick: function () { return alert("Clicked on Resource Catalog"); }
            },
            {
                label: "Access Request Submission",
                onClick: function () { return alert("Clicked on Access Request Submission"); }
            },
            {
                label: "A third, non clickable element"
            },
        ]
    }
};
