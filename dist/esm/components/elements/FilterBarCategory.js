import { __assign, __rest } from "tslib";
import React from "react";
import { theme } from "../../theme";
export var FilterBarCategory = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["name", "children"]);
    return (React.createElement("div", __assign({ style: {
            width: '279px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '16px'
        } }, props),
        React.createElement("div", { style: __assign(__assign({}, theme.font.body.semiBold), { textTransform: 'capitalize' }) }, name),
        children));
};
