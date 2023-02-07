"use strict";
exports.__esModule = true;
exports.View = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var View = function (_a) {
    var children = _a.children, _b = _a.radius, radius = _b === void 0 ? style.view.borderRadius : _b, borderColor = _a.borderColor, borderWidth = _a.borderWidth, borderStyle = _a.borderStyle, _c = _a.padding, padding = _c === void 0 ? style.view.padding : _c, backgroundColor = _a.backgroundColor, _d = _a.width, width = _d === void 0 ? style.view.width : _d, _e = _a.height, height = _e === void 0 ? 'auto' : _e, display = _a.display, flexDirection = _a.flexDirection, ViewProps = tslib_1.__rest(_a, ["children", "radius", "borderColor", "borderWidth", "borderStyle", "padding", "backgroundColor", "width", "height", "display", "flexDirection"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: tslib_1.__assign(tslib_1.__assign({}, style.view), { borderRadius: radius, borderColor: borderColor, borderWidth: borderWidth, borderStyle: borderStyle, padding: padding, backgroundColor: backgroundColor, width: width, height: height, display: display, flexDirection: flexDirection }) }, ViewProps), children));
};
exports.View = View;
var style = {
    view: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.regular), { padding: '16px', borderRadius: '4px', minWidth: '304px', width: '304px', display: 'flex', flexDirection: 'column' })
};
