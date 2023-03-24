import { __assign } from "tslib";
import React from 'react';
import imgAwsColor from '../../assets/icons/aws-color-18px.png';
import imgGoogleColor from '../../assets/icons/google-color-18px.png';
import imgAzureColor from '../../assets/icons/azure-color-18px.png';
export var CloudIcon = function (_a) {
    var type = _a.type, style = _a.style;
    var iconTable = {
        aws: imgAwsColor,
        gcp: imgGoogleColor,
        azure: imgAzureColor
    };
    var selectedType = type;
    return (React.createElement("img", { src: iconTable[selectedType], alt: iconTable[selectedType], style: __assign({}, style) }));
};
