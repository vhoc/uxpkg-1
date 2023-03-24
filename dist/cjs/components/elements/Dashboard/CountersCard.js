"use strict";
exports.__esModule = true;
exports.CountersCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Typography_1 = require("../Typography");
var CounterItem_1 = require("./CounterItem");
var ChartPercentBar_1 = require("./ChartPercentBar");
var theme_1 = require("../../../theme");
var CountersCard = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'simple' : _b, icon = _a.icon, title = _a.title, counterItems = _a.counterItems, data = _a.data, criteria = _a.criteria, content = _a.content, style = _a.style;
    var _c = (0, react_1.useState)(0), total = _c[0], setTotal = _c[1];
    /**
     * Sum the total of the 'count' property for all the items
     * in the counterItems object prop.
     */
    (0, react_1.useEffect)(function () {
        if (type === 'simple' && counterItems && counterItems.length >= 1) {
            var _sum = counterItems.reduce(function (accumulator, object) {
                return accumulator + object.count;
            }, 0);
            setTotal(_sum);
        }
        if (type === 'percent-bar' && data && data.length >= 1) {
            var _sum = data.reduce(function (accumulator, object) {
                return accumulator + object.value;
            }, 0);
            setTotal(_sum);
        }
    }, [counterItems, type, data]);
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ minWidth: type === 'mini' ? '150px' : '250px', width: type === 'mini' ? '150px' : '250px', paddingTop: '12px', paddingRight: '16px', paddingLeft: '16px', paddingBottom: '8px', display: 'flex', flexDirection: 'column', gap: '12px', 
            //justifyContent: 'space-between',
            borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(216, 221, 228)', borderRadius: '4px', backgroundColor: theme_1.colors.white }, style) },
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            react_1["default"].createElement("div", { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
                icon ? react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, color: theme_1.colors.gray[70] }) : null,
                react_1["default"].createElement(Typography_1.Typography, { variant: 'title-regular' }, title)),
            type !== "mini" ?
                react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-medium' }, String(total))
                :
                    null),
        type === 'percent-bar' ?
            react_1["default"].createElement(ChartPercentBar_1.ChartPercentBar, { data: data || [], criteria: title || '' })
            :
                type === 'mini' ?
                    react_1["default"].createElement(Typography_1.Typography, { variant: 'inputText-typed' }, content)
                    :
                        counterItems && counterItems.length >= 1 ?
                            react_1["default"].createElement("div", { style: { display: 'flex', flexWrap: 'wrap' } }, counterItems.map(function (item, index) {
                                return (react_1["default"].createElement(CounterItem_1.CounterItem, { key: index, element: item.element, count: item.count, style: { marginRight: '36px', marginBottom: '8px' } }));
                            }))
                            :
                                null));
};
exports.CountersCard = CountersCard;
