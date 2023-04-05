"use strict";
exports.__esModule = true;
exports.RiskIndicator = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var SignalBars_1 = require("./SignalBars");
var Typography_1 = require("../Typography");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var RiskIndicator = function (_a) {
    var variant = _a.variant, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '84px', backgroundColor: variant === 'online' ? theme_1.colors.blue[5] : variant === 'offline' ? 'rgb(254, 243, 245)' : theme_1.colors.gray[5], paddingTop: '5px', paddingRight: '8px', paddingBottom: '3px', paddingLeft: '8px', display: 'flex', gap: '8px', alignItems: 'baseline', borderRadius: '4px' }, style) },
        variant === 'offline' || variant === 'online' ?
            variant === 'online' ?
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faSignalBars, color: theme_1.colors.blue[60] })
                :
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faSignalSlash, color: theme_1.colors.red[50] })
            :
                react_1["default"].createElement(SignalBars_1.SignalBars, { variant: variant }),
        react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: { textTransform: 'capitalize' } }, variant)));
};
exports.RiskIndicator = RiskIndicator;
