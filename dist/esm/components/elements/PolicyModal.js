import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { Button } from './Button';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { TabGroup } from './TabGroup';
export var PolicyModal = function (_a) {
    //const [selectedElement, setSelectedElement] = useState<any>()
    var title = _a.title, caption = _a.caption, onClickFullDetail = _a.onClickFullDetail, onClickClose = _a.onClickClose, style = _a.style, _b = _a.resourcesAmount, resourcesAmount = _b === void 0 ? 0 : _b, _c = _a.identitiesAmount, identitiesAmount = _c === void 0 ? 0 : _c, tabs = _a.tabs;
    return (React.createElement("div", { style: __assign({ backgroundColor: colors.white, borderStyle: 'solid', borderWidth: '1px', borderColor: colors.gray[20], borderRadius: '8px', width: '626px', height: '540px', paddingTop: '29px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '24px', boxShadow: '3px 6px 12px 3px rgba(0,0,0,0.24)' }, style) },
        React.createElement("div", { style: {
                display: 'flex', justifyContent: 'space-between'
            } },
            React.createElement("div", { style: {
                    display: 'flex', flexDirection: 'column'
                } },
                React.createElement(Typography, { variant: 'title-regular' }, title),
                React.createElement(Typography, { variant: 'caption-regular' }, caption)),
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '12px'
                } },
                React.createElement(Button, { size: "sm", variant: "grayBlue", onClick: onClickFullDetail }, "View Full Detail"),
                React.createElement(Button, { icon: faTimes, iconPosition: "end", size: "sm", variant: "gray", onClick: onClickClose }, "Close"))),
        React.createElement(TabGroup, { tabContentHeight: "360px", tabs: tabs })));
};
