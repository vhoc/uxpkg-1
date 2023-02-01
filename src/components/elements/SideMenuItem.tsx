import React from "react"
import { HTMLAttributes, ReactNode, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { variants, theme } from '../../theme'

export interface SideMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode | null
    style?: React.CSSProperties
    variant?: 'primary'
    collapsed?: boolean
    icon?: IconProp | null
    disabled?: boolean
}

export const SideMenuItem = ({ children, style, variant = 'primary', collapsed = false, icon, disabled = false, ...props }: SideMenuItemProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const [focus, setFocus] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    const componentStyle = (hover: boolean, active: boolean): object => ({
        /**
         * The proper order is:
         * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
         * Otherwise, the states get messed up.
         */
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        //width: width ||sizes.iconButton[selectedSize].width,
        paddingLeft: '12px',
        paddingRight: '12px',
        height: '34px',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        outlineStyle: 'auto',
        outlineWidth: focus ? '2px' : '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })

    return <button
        type="button"
        style={componentStyle(hover, active)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
    >
        {children}
    </button>
}