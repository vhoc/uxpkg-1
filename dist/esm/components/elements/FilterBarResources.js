import { __assign, __rest } from "tslib";
import React from "react";
import { theme, colors } from "../../theme";
export var FilterBarResources = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ style: {
            width: '336px',
            height: '100%',
            paddingTop: '28px',
            paddingBottom: '28px',
            paddingLeft: '32px',
            paddingRight: '25px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.gray[5]
        } }, props),
        React.createElement("div", { style: __assign(__assign({}, theme.font.h2.medium), { marginBottom: '24px', color: '#222945' }) }, "Resource Catalog"),
        React.createElement("div", { style: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '18px',
                fontWeight: '400',
                color: '#545B71',
                marginBottom: '3px'
            } }, "Filters"),
        children));
};
