"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TabGroup_1 = tslib_1.__importDefault(require("../../components/elements/TabGroup"));
exports["default"] = {
    title: 'Composite/TabGroup',
    component: TabGroup_1["default"]
};
exports.Default = {
    args: {
        tabs: [
            {
                label: "First tabg",
                tabContent: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("h1", null, "Tab 1"),
                    react_1["default"].createElement("p", null, "This is Tab 1's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
            {
                label: "second tab",
                tabContent: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("h1", null, "Tab 2"),
                    react_1["default"].createElement("p", null, "This is Tab 2's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
            {
                label: "third tab",
                tabContent: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("h1", null, "Tab 3"),
                    react_1["default"].createElement("p", null, "This is Tab 3's content. You can insert any kind of React components here as long as they have only one parent. This container can be styled freely as the application requires."))
            },
        ]
    }
};
