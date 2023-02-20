"use strict";
exports.__esModule = true;
exports.UserPicture = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var UserPicture = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 32 : _b, _c = _a.height, height = _c === void 0 ? 32 : _c, src = _a.src, props = tslib_1.__rest(_a, ["width", "height", "src"]);
    return react_1["default"].createElement("div", tslib_1.__assign({ style: {
            width: width,
            height: height,
            backgroundImage: "url('".concat(src, "')"),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            clipPath: "circle(50% at 50% 50%)"
        } }, props));
};
exports.UserPicture = UserPicture;
