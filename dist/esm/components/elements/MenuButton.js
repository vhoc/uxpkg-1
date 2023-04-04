import React, { useState, useRef, useEffect } from "react";
import Popper from "@mui/material/Popper";
import { IconButton } from "./IconButton";
import { faEllipsisV } from "@fortawesome/pro-regular-svg-icons";
import { MenuButtonItem } from "./MenuButtonItem";
import { Paper } from "@mui/material";
import '../../assets/styles/dropdown.css';
export var MenuButton = function (_a) {
    var menuItems = _a.menuItems;
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var useClickOutsideEvent = function (ref) {
        useEffect(function () {
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
    var wrapperRef = useRef(null);
    useClickOutsideEvent(wrapperRef);
    var handleClick = function (event) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popper' : undefined;
    return (React.createElement("div", null,
        React.createElement(IconButton, { "aria-describedby": id, icon: faEllipsisV, onClick: handleClick, size: "sm", variant: "gray", style: {
                width: '34px',
                height: '34px'
            } }),
        React.createElement(Popper, { id: id, open: open, anchorEl: anchorEl, ref: wrapperRef },
            React.createElement(Paper, { sx: {
                    width: '150px',
                    maxWidth: '150px',
                    maxHeight: '200px',
                    paddingTop: '10px',
                    paddingBottom: '10px'
                } },
                React.createElement("ul", null, menuItems && menuItems.length >= 1 ?
                    menuItems.map(function (item, index) {
                        return (React.createElement(MenuButtonItem, { key: index, action: item.action, icon: item.icon, title: item.title, disabled: item.disabled, size: item.size }));
                    })
                    :
                        null)))));
};
