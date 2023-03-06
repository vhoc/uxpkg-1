"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var PolicyModal_1 = require("../../components/elements/PolicyModal");
var ResourceDropDownItem_1 = require("../../components/elements/ResourceDropDownItem");
var UserGroupBar_1 = require("../../components/elements/UserGroupBar");
exports["default"] = {
    title: 'composite/PolicyModal',
    component: PolicyModal_1.PolicyModal
};
exports.Default = {
    args: {
        title: 'AWSTestPol',
        caption: 'StagingAWSAcc / 581726338340',
        onClickFullDetail: function () { return alert("View Full Detail button clicked!"); },
        onClickClose: function () { return alert("Close button clicked!"); },
        resourcesAmount: 9,
        identitiesAmount: 3,
        tabs: [
            {
                label: "Resources (7)",
                tabContent: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c5 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c5", resourceType: "AWS EC2 Network Interface" }),
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c6 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c6", resourceType: "AWS EC2 Network Interface" }),
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c7 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c7", resourceType: "AWS EC2 Network Interface" }),
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c8 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c8", resourceType: "AWS EC2 Network Interface" }),
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c9 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c9", resourceType: "AWS EC2 Network Interface" }),
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c0 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c0", resourceType: "AWS EC2 Network Interface" }),
                    react_1["default"].createElement(ResourceDropDownItem_1.ResourceDropDownItem, { icon: "[i]", onClick: function () { return alert("Resource eni-03a9ab07d4c9111c1 clicked!"); }, resourceName: "eni-03a9ab07d4c9111c1", resourceType: "AWS EC2 Network Interface" }))
            },
            {
                label: "Identities with access (3)",
                tabContent: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return alert("Adding user Bill Murray"); }, caption: "bill@company.com", name: "Bill Murray", removeButtonOnClick: function () { return alert("Removing user Bill Murray"); }, style: {
                            width: '100%'
                        }, type: "user", endButton: false, onClick: function () { return alert("Bill Murray clicked!"); } }),
                    react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return alert("Adding user John Travolta"); }, caption: "john@company.com", name: "John Travolta", removeButtonOnClick: function () { return alert("Removing user John Travolta"); }, style: {
                            width: '100%'
                        }, type: "user", endButton: false, onClick: function () { return alert("John Travolta clicked!"); } }),
                    react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return alert("Adding user Will Smith"); }, caption: "will@company.com", name: "Will Smith", removeButtonOnClick: function () { return alert("Removing user Will Smith"); }, style: {
                            width: '100%'
                        }, type: "user", endButton: false, onClick: function () { return alert("Will Smith clicked!"); } }))
            },
        ]
    }
};
