import { __assign, __rest } from "tslib";
import React from "react";
import { theme } from '../../theme';
export var View = function (_a) {
    var children = _a.children, _b = _a.radius, radius = _b === void 0 ? style.view.borderRadius : _b, borderColor = _a.borderColor, borderWidth = _a.borderWidth, borderStyle = _a.borderStyle, _c = _a.padding, padding = _c === void 0 ? style.view.padding : _c, backgroundColor = _a.backgroundColor, _d = _a.width, width = _d === void 0 ? style.view.width : _d, _e = _a.height, height = _e === void 0 ? 'auto' : _e, display = _a.display, flexDirection = _a.flexDirection, ViewProps = __rest(_a, ["children", "radius", "borderColor", "borderWidth", "borderStyle", "padding", "backgroundColor", "width", "height", "display", "flexDirection"]);
    return (React.createElement("div", __assign({ style: __assign(__assign({}, style.view), { borderRadius: radius, borderColor: borderColor, borderWidth: borderWidth, borderStyle: borderStyle, padding: padding, backgroundColor: backgroundColor, width: width, height: height, display: display, flexDirection: flexDirection }) }, ViewProps), children));
};
var style = {
    view: __assign(__assign({}, theme.font.body.regular), { padding: '16px', borderRadius: '4px', minWidth: '304px', width: '304px', display: 'flex', flexDirection: 'column' })
};
