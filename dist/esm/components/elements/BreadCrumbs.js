import { __assign, __rest } from "tslib";
import React from "react";
import { Breadcrumbs } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { colors } from "../../theme";
export var BreadCrumbs = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Breadcrumbs, __assign({ separator: React.createElement(FontAwesomeIcon, { icon: faChevronRight, size: 'xs', color: colors.gray[30] }) }, props), children));
};
