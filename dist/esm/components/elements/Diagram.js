import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from "react";
import Xarrow, { Xwrapper, useXarrow } from "react-xarrows";
import "./styles.css";
import { DisplayTypeToIconMap } from "../graphical/ResourceTypesIcons";
export var Diagram = function (_a) {
    var data = _a.data, arrows = _a.arrows, actions = _a.actions, containerStyle = _a.containerStyle, columnStyle = _a.columnStyle;
    var _b = useState(null), selectedPath = _b[0], setSelectedPath = _b[1];
    var _c = useState([]), mappedPaths = _c[0], setMappedPaths = _c[1];
    var _d = useState(), visible = _d[0], setVisible = _d[1];
    var updateXarrow = useXarrow();
    useEffect(function () {
        var paths = data[0];
        var _statePaths = [];
        paths.forEach(function (element) {
            if (element.route !== undefined && element.route !== null)
                _statePaths.push(__spreadArray([element.id], element.route, true));
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
    var connectPaths = function (node) { return __awaiter(void 0, void 0, void 0, function () {
        var prevNodes, nextNodes, current;
        return __generator(this, function (_a) {
            prevNodes = findPath(node.endID, false);
            nextNodes = findPath(node.startID, true);
            current = [node.endID, node.startID];
            setSelectedPath(__spreadArray(__spreadArray(__spreadArray([], current, true), nextNodes, true), prevNodes, true));
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
                    ? found.push.apply(found, __spreadArray([foundElement.startID], findPath(foundElement.startID, true), false)) : found.push.apply(found, __spreadArray([foundElement.endID], findPath(foundElement.endID, false), false));
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
    return (React.createElement("div", { className: "container", style: __assign({}, containerStyle), onScroll: updateXarrow },
        React.createElement("div", { className: "dia-content" },
            React.createElement(Xwrapper, null, data.map(function (column, index) { return (React.createElement("div", { key: index, className: "dia-column" },
                column.map(function (element, i) {
                    return (React.createElement("div", { key: "".concat(index, "-").concat(i), className: "element-container ".concat(index !== data.length - 1 ? "element-col" : "") },
                        React.createElement("div", { className: "dropdown" },
                            React.createElement("div", { id: element.id, className: "dia-row ".concat(!((element.type !== undefined &&
                                    element.type !== null) ||
                                    !!element.icon)
                                    ? "dia-row_placehold"
                                    : ""), style: __assign({}, columnStyle), onMouseOver: function () { return handlePath(element.id, index, i); }, onMouseLeave: function () { return setSelectedPath(null); }, onClick: function () { return toogleVisible(element.id); } }, 
                            //element.type !== undefined && element.type !== null && element.type < Object.keys(DisplayTypeToIconMap).length ? (
                            element.type !== undefined && element.type !== null ? (
                            // make here a typeof keyof something something
                            React.createElement("img", { src: "".concat(DisplayTypeToIconMap[element.type]), alt: DisplayTypeToIconMap[element.type], height: "100%", width: "100%" })) : element.icon ? (React.createElement("img", { src: element.icon, alt: element.value, height: "100%", width: "100%" })) : (element.id)),
                            React.createElement("div", { className: "dropdown-content ".concat(visible === element.id ? "show-dropdown" : "") }, !!actions &&
                                actions.map(function (action) {
                                    if (action.type === element.type ||
                                        action.type === undefined ||
                                        action.type === null) {
                                        return (React.createElement("div", { className: "actions-text", key: "option-".concat(action.id), id: "".concat(action.id), onClick: action.onClick }, action.label));
                                    }
                                    else {
                                        return null;
                                    }
                                }))),
                        React.createElement("div", { className: "text-container" },
                            React.createElement("p", { className: "element-label" }, element.label),
                            element.description && (React.createElement("p", { className: "element-description" }, element.description)))));
                }),
                arrows &&
                    arrows.map(function (arrow, i) {
                        var hovered = !!selectedPath &&
                            selectedPath.find(function (id) { return arrow.startID === id; }) &&
                            selectedPath.find(function (id) { return arrow.endID === id; });
                        return (React.createElement(Xarrow, { key: "arrow-".concat(i), color: "".concat(hovered ? "#D8A032" : "#C8CDD4"), zIndex: hovered ? 999 : 0, showHead: false, strokeWidth: 2, passProps: {
                                onMouseOver: function () {
                                    connectPaths(arrow);
                                },
                                onMouseLeave: function () {
                                    setSelectedPath(null);
                                }
                            }, end: String(arrow.endID), start: String(arrow.startID), endAnchor: "left", startAnchor: "right" }));
                    }))); })))));
};
//export default Diagram;
