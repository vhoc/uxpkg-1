"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var material_1 = require("@mui/material");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var addon_docs_1 = require("@storybook/addon-docs");
exports["default"] = {
    title: 'elements/Inputs/MenuItem',
    component: material_1.MenuItem,
    parameters: {
        docs: {
            page: function () { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(addon_docs_1.Title, null),
                react_1["default"].createElement(addon_docs_1.Subtitle, null),
                react_1["default"].createElement(addon_docs_1.Description, null, "This component shares the same properties as MUI's MenuItem component. Futher documentation here: https://mui.com/material-ui/api/menu-item/"),
                react_1["default"].createElement(addon_docs_1.Primary, null),
                react_1["default"].createElement(addon_docs_1.ArgsTable, { story: addon_docs_1.PRIMARY_STORY }),
                react_1["default"].createElement(addon_docs_1.Stories, null))); }
        }
    }
};
exports.Default = {
    args: {
        autofocus: false,
        value: "1",
        children: react_1["default"].createElement("span", null, "First item"),
        sx: {
            backgroundColor: 'white',
            height: '40px',
            width: '150px',
            color: theme_1.colors.gray[90],
            fontFamily: 'IBM Plex Sans'
        },
        classes: {},
        component: null,
        dense: false,
        disableGutters: false,
        divider: false,
        focusVisibleClassName: '',
        selected: false
    }
};
