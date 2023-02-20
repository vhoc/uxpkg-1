"use strict";
exports.__esModule = true;
exports.AccessRequestModal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var SnackbarContent_1 = tslib_1.__importDefault(require("@mui/material/SnackbarContent"));
var Button_1 = require("./Button");
var theme_1 = require("../../theme");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var material_1 = require("@mui/material");
var IconButton_1 = tslib_1.__importDefault(require("@mui/material/IconButton"));
var AccessRequestModal = function (_a) {
    var variant = _a.variant, requestCount = _a.requestCount, leftIcon = _a.leftIcon, textMessage = _a.textMessage, menuItems = _a.menuItems, continueButtonOnClick = _a.continueButtonOnClick, sx = _a.sx;
    var _b = react_1["default"].useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var action = (react_1["default"].createElement("div", { style: { display: 'flex', gap: '20px', alignItems: 'center' } },
        react_1["default"].createElement(Button_1.Button, { variant: variant === 'queued' ? 'primary' : 'success', size: 'sm', onClick: continueButtonOnClick }, "Continue"),
        variant === 'queued' ?
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(IconButton_1["default"], { "aria-label": "more", id: "long-button", "aria-controls": open ? 'long-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": "true", onClick: handleClick, sx: {
                        height: '20px',
                        width: '20px',
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '16px',
                        color: theme_1.colors.white,
                        marginRight: '6px'
                    } },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsisVertical })),
                react_1["default"].createElement(material_1.Menu, { id: "long-menu", MenuListProps: {
                        'aria-labelledby': 'long-button'
                    }, anchorEl: anchorEl, open: open, onClose: handleClose, sx: {
                        fontFamily: 'IBM Plex Sans'
                    } }, menuItems && menuItems.length >= 1 ?
                    menuItems.map(function (item) {
                        return (react_1["default"].createElement(material_1.MenuItem, { key: item.value, selected: item.selected || false, onClick: item.onClick, sx: {
                                fontFamily: 'IBM Plex Sans',
                                fontSize: '14px'
                            } }, item.label));
                    })
                    :
                        null))
            :
                null));
    var message = (react_1["default"].createElement("div", { style: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontFamily: 'IBM Plex Sans',
            fontWeight: '600',
            fontSize: '14px'
        } },
        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: leftIcon }),
        react_1["default"].createElement("span", null, "".concat(requestCount ? requestCount.toString() + ' ' : '').concat(textMessage))));
    return (react_1["default"].createElement(SnackbarContent_1["default"], { sx: tslib_1.__assign({ height: '50px', backgroundColor: variant === 'queued' ? '#274A7F' : theme_1.colors.green[50] }, sx), message: message, action: action }));
};
exports.AccessRequestModal = AccessRequestModal;
