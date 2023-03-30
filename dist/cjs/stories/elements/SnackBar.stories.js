"use strict";
exports.__esModule = true;
exports.Danger = exports.Warning = exports.Success = exports.CustomIcon = exports.Primary = void 0;
var SnackBar_1 = require("../../components/elements/SnackBar");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
exports["default"] = {
    title: 'Elements/Feedback/SnackBar',
    component: SnackBar_1.SnackBar
};
exports.Primary = {
    args: {
        variant: 'primary',
        //leftIcon: faRightToBracket,
        showDropDownButton: true,
        textMessage: '1 Access request on queue',
        continueButtonOnClick: function () { return alert("Continue button clicked."); },
        menuItems: [
            {
                value: "first-item",
                label: 'First item',
                onClick: function () { return alert("First option clicked"); }
            },
            {
                value: "second-item",
                label: 'Second item',
                onClick: function () { return alert("Second option clicked"); }
            },
            {
                value: "third-item",
                label: 'Third item',
                onClick: function () { return alert("Third option clicked"); }
            },
        ]
    }
};
exports.CustomIcon = {
    args: {
        variant: 'primary',
        leftIcon: pro_solid_svg_icons_1.faRightToBracket,
        showDropDownButton: true,
        textMessage: '1 Access request on queue',
        continueButtonOnClick: function () { return alert("Continue button clicked."); },
        menuItems: [
            {
                value: "first-item",
                label: 'First item',
                onClick: function () { return alert("First option clicked"); }
            },
            {
                value: "second-item",
                label: 'Second item',
                onClick: function () { return alert("Second option clicked"); }
            },
            {
                value: "third-item",
                label: 'Third item',
                onClick: function () { return alert("Third option clicked"); }
            },
        ]
    }
};
exports.Success = {
    args: {
        variant: 'success',
        //leftIcon: faCheck,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
exports.Warning = {
    args: {
        variant: 'warning',
        //leftIcon: faHexagonExclamation,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
exports.Danger = {
    args: {
        variant: 'danger',
        showExtraButton: true,
        extraButtonLabel: 'Log',
        extraButtonOnClick: function () { return alert("Log button clicked."); },
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
fontawesome_svg_core_1.library.add(pro_solid_svg_icons_1.faRightToBracket, pro_solid_svg_icons_1.faCheck, pro_solid_svg_icons_1.faHexagonExclamation, pro_solid_svg_icons_1.faTriangleExclamation);
