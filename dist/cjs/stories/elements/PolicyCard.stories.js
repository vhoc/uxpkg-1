"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var PolicyCard_1 = require("../../components/elements/PolicyCard");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'Composite/PolicyCard',
    component: PolicyCard_1.PolicyCard
};
exports.Default = {
    args: {
        policyName: 'AWSTestPol',
        accountName: 'StagingAWSAcc',
        accountNumber: '581726338340',
        expirationTime: 'Ends in 23 days',
        onClickResources: function () { return alert("Resources button clicked!"); },
        onClickIdentities: function () { return alert("Identities button clicked!"); },
        resourcesAmount: 3,
        identitiesAmount: 4,
        menuItems: [
            {
                title: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faEllipsisV }),
                submenu: [
                    {
                        title: 'Option 1'
                    },
                    {
                        title: 'Option 2',
                        action: function () { return alert('Action example'); }
                    },
                    {
                        title: 'Option 3'
                    },
                ]
            }
        ]
    }
};
fontawesome_svg_core_1.library.add(pro_regular_svg_icons_1.faEllipsisV);
