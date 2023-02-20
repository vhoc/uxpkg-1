"use strict";
exports.__esModule = true;
exports.AccessRequestSubmitted = exports.AccessRequestQueued = void 0;
var AccessRequestModal_1 = require("../../components/elements/AccessRequestModal");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'Elements/Feedback/AccessRequestModal',
    component: AccessRequestModal_1.AccessRequestModal
};
exports.AccessRequestQueued = {
    args: {
        variant: 'queued',
        requestCount: 1,
        leftIcon: sharp_solid_svg_icons_1.faRightToBracket,
        textMessage: 'Access request on queue',
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
exports.AccessRequestSubmitted = {
    args: {
        variant: 'submitted',
        leftIcon: sharp_solid_svg_icons_1.faCheck,
        textMessage: 'Access request has been submitted',
        continueButtonOnClick: function () { return alert("Continue button clicked."); }
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faRightToBracket, sharp_solid_svg_icons_1.faCheck);
