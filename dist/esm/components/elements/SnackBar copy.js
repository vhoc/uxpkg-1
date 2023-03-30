import { __assign } from "tslib";
import React from "react";
import SnackbarContent from '@mui/material/SnackbarContent';
import { Button } from "./Button";
import { colors } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export var SnackBar = function (_a) {
    var variant = _a.variant, requestCount = _a.requestCount, leftIcon = _a.leftIcon, textMessage = _a.textMessage, menuItems = _a.menuItems, continueButtonOnClick = _a.continueButtonOnClick, sx = _a.sx;
    var _b = React.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var action = (React.createElement("div", { style: { display: 'flex', gap: '20px', alignItems: 'center' } },
        React.createElement(Button, { variant: variant === 'info' ? 'primary' : 'success', size: 'sm', onClick: continueButtonOnClick }, "Continue"),
        variant === 'info' ?
            React.createElement("div", null,
                React.createElement(IconButton, { "aria-label": "more", id: "long-button", "aria-controls": open ? 'long-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": "true", onClick: handleClick, sx: {
                        height: '20px',
                        width: '20px',
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '16px',
                        color: colors.white,
                        marginRight: '6px'
                    } },
                    React.createElement(FontAwesomeIcon, { icon: faEllipsisVertical })),
                React.createElement(Menu, { id: "long-menu", MenuListProps: {
                        'aria-labelledby': 'long-button'
                    }, anchorEl: anchorEl, open: open, onClose: handleClose, sx: {
                        fontFamily: 'IBM Plex Sans'
                    } }, menuItems && menuItems.length >= 1 ?
                    menuItems.map(function (item) {
                        return (React.createElement(MenuItem, { key: item.value, selected: item.selected || false, onClick: item.onClick, sx: {
                                fontFamily: 'IBM Plex Sans',
                                fontSize: '14px'
                            } }, item.label));
                    })
                    :
                        null))
            :
                null));
    var message = (React.createElement("div", { style: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontFamily: 'IBM Plex Sans',
            fontWeight: '600',
            fontSize: '14px'
        } },
        React.createElement(FontAwesomeIcon, { icon: leftIcon }),
        React.createElement("span", null, "".concat(requestCount ? requestCount.toString() + ' ' : '').concat(textMessage))));
    return (React.createElement(SnackbarContent, { sx: __assign({ height: '50px', backgroundColor: variant === 'queued' ? '#274A7F' : colors.green[50] }, sx), message: message, action: action }));
};
