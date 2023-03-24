"use strict";
exports.__esModule = true;
exports.Azure = exports.GCP = exports.AWS = void 0;
var CloudIcon_1 = require("../../components/graphical/CloudIcon");
exports["default"] = {
    title: 'elements/Graphical/CloudIcon',
    component: CloudIcon_1.CloudIcon
};
exports.AWS = {
    args: {
        type: 'aws'
    }
};
exports.GCP = {
    args: {
        type: 'gcp'
    }
};
exports.Azure = {
    args: {
        type: 'azure'
    }
};
