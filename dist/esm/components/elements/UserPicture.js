import { __assign, __rest } from "tslib";
import React from "react";
export var UserPicture = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 32 : _b, _c = _a.height, height = _c === void 0 ? 32 : _c, src = _a.src, props = __rest(_a, ["width", "height", "src"]);
    return React.createElement("div", __assign({ style: {
            width: width,
            height: height,
            backgroundImage: "url('".concat(src, "')"),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            clipPath: "circle(50% at 50% 50%)"
        } }, props));
};
