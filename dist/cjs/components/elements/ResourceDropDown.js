"use strict";
exports.__esModule = true;
exports.ResourceDropDown = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var SelectUnstyled_1 = tslib_1.__importDefault(require("@mui/base/SelectUnstyled"));
var base_1 = require("@mui/base");
var ResourceDropDown = function () {
    /*
    return (
        <SelectUnstyled>
            <OptionUnstyled component={() => <ResourceDropDownItem icon={'i'} resourceName='a' resourceType='b'/>} value={'1'}>Option 1</OptionUnstyled>
            <OptionUnstyled component={() => <ResourceDropDownItem icon={'i'} resourceName='d' resourceType='e'/>} value={'2'}>Option 2</OptionUnstyled>
        </SelectUnstyled>
    )*/
    return (react_1["default"].createElement(SelectUnstyled_1["default"], null,
        react_1["default"].createElement(base_1.OptionUnstyled, { value: '1' }, "Option 1"),
        react_1["default"].createElement(base_1.OptionUnstyled, { value: '2' }, "Option 2")));
};
exports.ResourceDropDown = ResourceDropDown;
