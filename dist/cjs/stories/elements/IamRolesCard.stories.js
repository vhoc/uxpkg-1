"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var IamRolesCard_1 = tslib_1.__importDefault(require("../../components/elements/IamRolesCard"));
exports["default"] = {
    title: 'composite/IamRolesCard',
    component: IamRolesCard_1["default"]
};
exports.Default = {
    args: {
        selected: false,
        expanded: false,
        title: 'AmazonAugmentedAIFullAccess',
        description: 'Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI.'
    }
};
