"use strict";
exports.__esModule = true;
exports.NoActionButtons = exports.ManyRoles = exports.Default = void 0;
var tslib_1 = require("tslib");
var SummaryResourceCard_1 = require("../../components/elements/SummaryResourceCard");
var Label_1 = require("../../components/elements/Label");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'composite/SummaryResourceCard',
    component: SummaryResourceCard_1.SummaryResourceCard
};
exports.Default = {
    args: {
        resourceIcon: '[Icon]',
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' })),
        isEditButtonEnabled: false,
        isDeleteButtonEnabled: true,
        onClickEditButton: function () { return alert("Edit button clicked!"); },
        onClickDeleteButton: function () { return alert("Delete button clicked!"); }
    }
};
exports.ManyRoles = {
    args: {
        resourceIcon: '[Icon]',
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-AmplifyAdministratorAccess-Amplify' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' })),
        isEditButtonEnabled: false,
        isDeleteButtonEnabled: true,
        onClickEditButton: function () { return alert("Edit button clicked!"); },
        onClickDeleteButton: function () { return alert("Delete button clicked!"); }
    }
};
exports.NoActionButtons = {
    args: {
        resourceIcon: '[Icon]',
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AmazonAugmentedAIIntegratedAPIAccess' }),
            react_1["default"].createElement(Label_1.Label, { variant: 'grayBlue', text: 'AdministratorAccess-Amplify' })),
        actionButtons: false,
        isEditButtonEnabled: false,
        isDeleteButtonEnabled: false
    }
};
