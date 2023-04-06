"use strict";
exports.__esModule = true;
exports.ServiceIcons = void 0;
var tslib_1 = require("tslib");
/** AWS ICONS Imports */
var server_svg_1 = tslib_1.__importDefault(require("../../assets/icons/server.svg"));
var server_private_svg_1 = tslib_1.__importDefault(require("../../assets/icons/server-private.svg"));
var database_svg_1 = tslib_1.__importDefault(require("../../assets/icons/database.svg"));
var app_role_svg_1 = tslib_1.__importDefault(require("../../assets/icons/app-role.svg"));
var app_role_dynamic_svg_1 = tslib_1.__importDefault(require("../../assets/icons/app-role-dynamic.svg"));
exports.ServiceIcons = {
    server: server_svg_1["default"],
    serverPrivate: server_private_svg_1["default"],
    database: database_svg_1["default"],
    appRole: app_role_svg_1["default"],
    appRoleDynamic: app_role_dynamic_svg_1["default"]
};
