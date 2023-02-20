import { __assign, __rest } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export var AlertModal = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, children = _a.children, props = __rest(_a, ["icon", "title", "description", "children"]);
    return (React.createElement("div", __assign({ style: {
            width: '657px',
            minHeight: '190px',
            backgroundColor: colors.white,
            boxShadow: '3px 6px 12px 3px rgba(0,0,0,0.24)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '27px',
            paddingBottom: '24px',
            paddingLeft: '32px',
            paddingRight: '32px',
            borderRadius: '8px'
        } }, props),
        React.createElement("div", { style: {
                display: 'flex',
                gap: '16px'
            } },
            icon ?
                React.createElement(FontAwesomeIcon, { style: { marginTop: '6px' }, icon: icon, color: colors.yellow[50] })
                :
                    React.createElement("div", null, "\u00A0"),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: "column",
                    gap: '16px'
                } },
                React.createElement("div", { style: {
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '18px',
                        fontWeight: 'normal',
                        color: colors.gray[90]
                    } }, title),
                React.createElement("div", { style: {
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        color: colors.gray[70]
                    } }, description))),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px'
            } }, children)));
};
