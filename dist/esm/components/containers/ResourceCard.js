import { __assign, __rest } from "tslib";
import React from "react";
import { View } from "../layout/View";
import { colors } from '../../theme';
export var ResourceCard = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(View, { radius: "4px", borderColor: colors.blue[20], borderStyle: 'solid', borderWidth: '1px', backgroundColor: colors.white, padding: '16px 16px 16px 24px' },
        React.createElement("div", __assign({}, props))));
};
