import { __assign, __rest } from "tslib";
import React from "react";
import { FormControlLabel, Checkbox, ThemeProvider } from "@mui/material";
import { colors } from "../../theme";
import { mtheme } from "../../theme";
import "@fontsource/ibm-plex-sans";
export var FilterBarItem = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.checked, checked = _c === void 0 ? false : _c, amount = _a.amount, onClick = _a.onClick, props = __rest(_a, ["name", "checked", "amount", "onClick"]);
    return (React.createElement("div", __assign({ style: {
            display: 'flex',
            width: 'fit-content'
        } }, props),
        React.createElement(ThemeProvider, { theme: mtheme },
            React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { checked: checked, sx: {
                        color: colors.gray[30]
                    }, onClick: onClick }), label: "".concat(name, " ").concat(amount ? '(' + amount + ')' : ''), sx: {
                    fontFamily: 'IBM Plex Sans !important',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#232529'
                } }))));
};
