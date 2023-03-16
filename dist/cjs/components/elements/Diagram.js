"use strict";
exports.__esModule = true;
exports.Diagram = void 0;
var tslib_1 = require("tslib");
/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
var react_1 = tslib_1.__importStar(require("react"));
var react_xarrows_1 = tslib_1.__importStar(require("react-xarrows"));
require("./styles.css");
var User_png_1 = tslib_1.__importDefault(require("./assets/icons/User.png"));
var Policy_png_1 = tslib_1.__importDefault(require("./assets/icons/Policy.png"));
var Role_png_1 = tslib_1.__importDefault(require("./assets/icons/Role.png"));
var Instance_png_1 = tslib_1.__importDefault(require("./assets/icons/Instance.png"));
var Compute_png_1 = tslib_1.__importDefault(require("./assets/icons/Compute.png"));
var users_png_1 = tslib_1.__importDefault(require("./assets/icons/users.png"));
var types = [User_png_1["default"], Policy_png_1["default"], Role_png_1["default"], Instance_png_1["default"], Compute_png_1["default"], users_png_1["default"]];
var Diagram = function (_a) {
    var data = _a.data, arrows = _a.arrows, actions = _a.actions, containerStyle = _a.containerStyle, columnStyle = _a.columnStyle;
    var _b = (0, react_1.useState)(null), selectedPath = _b[0], setSelectedPath = _b[1];
    var _c = (0, react_1.useState)([]), mappedPaths = _c[0], setMappedPaths = _c[1];
    var _d = (0, react_1.useState)(), visible = _d[0], setVisible = _d[1];
    var updateXarrow = (0, react_xarrows_1.useXarrow)();
    (0, react_1.useEffect)(function () {
        var paths = data[0];
        var _statePaths = [];
        paths.forEach(function (element) {
            if (element.route !== undefined && element.route !== null)
                _statePaths.push(tslib_1.__spreadArray([element.id], element.route, true));
        });
        setMappedPaths(_statePaths);
    }, [data]);
    var handlePath = function (node, indexX, indexY) {
        if (Boolean(data[indexX][indexY].route)) {
            var _path = findArrayWithElement(mappedPaths, node);
            setSelectedPath(_path);
        }
        else {
            connectPaths({
                startID: node,
                endID: node
            });
        }
    };
    function findArrayWithElement(arrays, element) {
        var _data = arrays.filter(function (array) { return array.includes(element); });
        return _data[0];
    }
    var connectPaths = function (node) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var prevNodes, nextNodes, current;
        return tslib_1.__generator(this, function (_a) {
            prevNodes = findPath(node.endID, false);
            nextNodes = findPath(node.startID, true);
            current = [node.endID, node.startID];
            setSelectedPath(tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], current, true), nextNodes, true), prevNodes, true));
            return [2 /*return*/];
        });
    }); };
    var findPath = function (node, prev) {
        if (arrows === undefined)
            return [];
        var found = [];
        var elementsFound = arrows.filter(function (element) {
            return prev ? element.endID === node : element.startID === node;
        });
        if (elementsFound.length) {
            elementsFound.forEach(function (foundElement) {
                prev
                    ? found.push.apply(found, tslib_1.__spreadArray([foundElement.startID], findPath(foundElement.startID, true), false)) : found.push.apply(found, tslib_1.__spreadArray([foundElement.endID], findPath(foundElement.endID, false), false));
            });
        }
        return found;
    };
    var toogleVisible = function (id) {
        if (visible === "" || visible !== id) {
            setVisible(id);
        }
        else if (visible === id) {
            setVisible("");
        }
    };
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({}, containerStyle), className: "container", onScroll: updateXarrow },
        react_1["default"].createElement("div", { className: "dia-content" },
            react_1["default"].createElement(react_xarrows_1.Xwrapper, null, data.map(function (column, index) { return (react_1["default"].createElement("div", { key: index, className: "dia-column" },
                column.map(function (element, i) {
                    return (react_1["default"].createElement("div", { key: "".concat(index, "-").concat(i), className: "element-container ".concat(index !== data.length - 1 ? "element-col" : "") },
                        react_1["default"].createElement("div", { className: "dropdown" },
                            react_1["default"].createElement("div", { id: element.id, className: "dia-row ".concat(!((element.type !== undefined &&
                                    element.type !== null) ||
                                    !!element.icon)
                                    ? "dia-row_placehold"
                                    : ""), style: tslib_1.__assign({}, columnStyle), onMouseOver: function () { return handlePath(element.id, index, i); }, onMouseLeave: function () { return setSelectedPath(null); }, onClick: function () { return toogleVisible(element.id); } }, element.type !== undefined && element.type !== null && element.type < types.length ? (react_1["default"].createElement("img", { src: "".concat(types[element.type]), alt: types[element.type], height: "100%", width: "100%" })) : element.icon ? (react_1["default"].createElement("img", { src: element.icon, alt: element.value, height: "100%", width: "100%" })) : (element.id)),
                            react_1["default"].createElement("div", { className: "dropdown-content ".concat(visible === element.id ? "show-dropdown" : "") }, !!actions &&
                                actions.map(function (action) {
                                    if (action.type === element.type ||
                                        action.type === undefined ||
                                        action.type === null) {
                                        return (react_1["default"].createElement("div", { className: "actions-text", key: "option-".concat(action.id), id: "".concat(action.id), onClick: action.onClick }, action.label));
                                    }
                                    else {
                                        return null;
                                    }
                                }))),
                        react_1["default"].createElement("div", { className: "text-container" },
                            react_1["default"].createElement("p", { className: "element-label" }, element.label),
                            element.description && (react_1["default"].createElement("p", { className: "element-description" }, element.description)))));
                }),
                arrows &&
                    arrows.map(function (arrow, i) {
                        var hovered = !!selectedPath &&
                            selectedPath.find(function (id) { return arrow.startID === id; }) &&
                            selectedPath.find(function (id) { return arrow.endID === id; });
                        return (react_1["default"].createElement(react_xarrows_1["default"], { key: "arrow-".concat(i), color: "".concat(hovered ? "#D8A032" : "#C8CDD4"), zIndex: hovered ? 999 : 0, showHead: false, strokeWidth: 2, passProps: {
                                onMouseOver: function () {
                                    connectPaths(arrow);
                                },
                                onMouseLeave: function () {
                                    setSelectedPath(null);
                                }
                            }, end: String(arrow.endID), start: String(arrow.startID), endAnchor: "left", startAnchor: "right" }));
                    }))); })))));
};
exports.Diagram = Diagram;
//export default Diagram;
