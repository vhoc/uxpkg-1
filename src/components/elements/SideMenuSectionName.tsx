import React from "react"
import { HTMLAttributes } from "react";
import { variants, theme, colors } from '../../theme'

export interface SideMenuSectionNameProps extends HTMLAttributes<HTMLButtonElement> {
    style?: React.CSSProperties
    variant?: 'primary'
    label?: string
}

export const SideMenuSectionName = ({ style, variant = 'primary', label, ...props }: SideMenuSectionNameProps): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    const componentStyle = (): object => ({
        /**
         * The proper order is:
         * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
         * Otherwise, the states get messed up.
         */
        backgroundColor: variants[selectedVariant].sideBarMenuItemBgColor,
        color: colors.gray[30],
        textTransform: 'uppercase',
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
        width: '266px',
    })

    return <button
        type="button"
        style={componentStyle()}
        {...props}
    >
        <div>
            {label}
        </div>
    </button>
}

export default SideMenuSectionName