"use strict";
exports.__esModule = true;
exports.MenuButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Popper_1 = tslib_1.__importDefault(require("@mui/material/Popper"));
var IconButton_1 = require("./IconButton");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var MenuButtonItem_1 = require("./MenuButtonItem");
var material_1 = require("@mui/material");
require("../../assets/styles/dropdown.css");
var MenuButton = function (_a) {
    var menuItems = _a.menuItems;
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var useClickOutsideEvent = function (ref) {
        (0, react_1.useEffect)(function () {
            var handleClickOutside = function (event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setAnchorEl(null);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return function () {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };
    var wrapperRef = (0, react_1.useRef)(null);
    useClickOutsideEvent(wrapperRef);
    var handleClick = function (event) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popper' : undefined;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(IconButton_1.IconButton, { "aria-describedby": id, icon: pro_regular_svg_icons_1.faEllipsisV, onClick: handleClick, size: "sm", variant: "gray", style: {
                width: '34px',
                height: '34px'
            } }),
        react_1["default"].createElement(Popper_1["default"], { id: id, open: open, anchorEl: anchorEl, ref: wrapperRef },
            react_1["default"].createElement(material_1.Paper, { sx: {
                    width: '150px',
                    maxWidth: '150px',
                    maxHeight: '200px',
                    paddingTop: '10px',
                    paddingBottom: '10px'
                } },
                react_1["default"].createElement("ul", null, menuItems && menuItems.length >= 1 ?
                    menuItems.map(function (item, index) {
                        return (react_1["default"].createElement(MenuButtonItem_1.MenuButtonItem, { key: index, action: item.action, icon: item.icon, title: item.title, disabled: item.disabled, size: item.size }));
                    })
                    :
                        null)))));
};
exports.MenuButton = MenuButton;
