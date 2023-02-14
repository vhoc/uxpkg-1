import { __assign, __rest } from "tslib";
import React from "react";
import { colors, theme } from "../../theme";
var IamRolesCard = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.expanded, expanded = _c === void 0 ? false : _c, title = _a.title, description = _a.description, onClickButtonTopRight = _a.onClickButtonTopRight, onClickButtonBottomLeft = _a.onClickButtonBottomLeft, style = _a.style, props = __rest(_a, ["selected", "expanded", "title", "description", "onClickButtonTopRight", "onClickButtonBottomLeft", "style"]);
    return (React.createElement("div", __assign({ style: __assign({ width: '605px', minHeight: '72px', backgroundColor: selected ? colors.blue[30] : colors.white, borderWidth: '1px', borderColor: colors.gray[20], borderRadius: '8px', paddingTop: '14px', paddingBottom: '22px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', justifyContent: 'space-between', fontFamily: theme.font.body.regular.fontFamily, fontSize: theme.font.body.regular.fontSize, fontWeight: theme.font.body.regular.fontWeight, color: theme.font.body.regular.color }, style) }, props), /** EXPANDED RENDER */ expanded ?
        React.createElement(React.Fragment, null,
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } }),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } }))
        :
            React.createElement("div", { style: {
                    width: '605px',
                    display: 'flex',
                    justifyContent: 'space-between'
                } },
                React.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column'
                    } },
                    React.createElement("div", { style: __assign({}, theme.font.body.semiBold) }, title),
                    React.createElement("div", { style: __assign(__assign({}, theme.font.caption.regular), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px' }) }, description)),
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { style: { width: '60px' } }, "more btn here"),
                    React.createElement("div", { style: { width: '34px' } }, "topRightBtn here")))));
};
export default IamRolesCard;
