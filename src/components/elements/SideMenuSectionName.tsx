import React from "react"
import { HTMLAttributes } from "react";
import { variants, theme, colors } from '../../theme'

export interface SideMenuSectionNameProps extends HTMLAttributes<HTMLButtonElement> {
    /** Color scheme of the control (currently only 'primary' is supported for this component). */
    variant?: 'primary'
    /** Text label of the section */
    label?: string | null
    /** Whether to keep the control in an extended (not collapsed) state or not. */
    keepExtended?: boolean
    /** Collapsed state of the component (true or false). */
    collapsed?: boolean
}

export const SideMenuSectionName = ({ variant = 'primary', keepExtended, collapsed, label, ...props }: SideMenuSectionNameProps): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey
    
    return <button
        type="button"
        style={{
            /**
             * The proper order is:
             * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
             * Otherwise, the states get messed up.
             */
            backgroundColor: variants[selectedVariant].sideBarMenuItemBgColor,
            color: colors.gray[30],
            textTransform: 'uppercase',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '15px',
            paddingRight: '15px',
            height: '34px',
            fontFamily: theme.font.buttonLabel.regular.fontFamily,
            fontSize: '13px',
            borderRadius: '4px',
            border: 'none',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            width: (collapsed && !keepExtended) ? '50px' : '266px',
        }}
        {...props}
    >
        <div
            style={{
                width: (collapsed && !keepExtended) ? '50px' : '266px',
                textAlign: 'left',
            }}
        >
            { (collapsed && !keepExtended) ? '' : label }
        </div>
    </button>
}