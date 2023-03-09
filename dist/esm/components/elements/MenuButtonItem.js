import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { variants, theme, sizes } from '../../theme';
import { styled } from '@mui/material/styles';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
export var MenuButtonItem = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'clear' : _b, _c = _a.size, size = _c === void 0 ? 'sm' : _c, action = _a.action, icon = _a.icon, title = _a.title, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    var _e = useState(false), hover = _e[0], setHover = _e[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var MyButton = styled(ButtonUnstyled)({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        //backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        minWidth: '150px',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.button[selectedSize].fontSize,
        paddingLeft: sizes.popOverMenuItem[selectedSize].paddingLeft,
        paddingRight: sizes.popOverMenuItem[selectedSize].paddingRight,
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: (variant === 'clear') ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: isImageDropDown ? 'none' : 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px',
        textAlign: 'left'
    });
    return (React.createElement("li", { style: {
            position: 'relative',
            fontSize: '14px',
            width: 'fit-content'
        } },
        React.createElement(MyButton, { onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: action },
            React.createElement("span", { style: { display: 'flex', gap: '8px' } },
                React.createElement("span", null, icon ? React.createElement(FontAwesomeIcon, { icon: icon }) : ''),
                React.createElement("span", null, title)),
            React.createElement("span", null))));
};
