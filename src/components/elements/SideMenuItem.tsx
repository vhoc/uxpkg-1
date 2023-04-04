import React from "react"
import { HTMLAttributes, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { variants, theme, colors } from '../../theme'
import { SideMenuSectionName } from "./SideMenuSectionName";

export interface SideMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
    /** Container style overrides. */
    style?: React.CSSProperties
    /** The type of the item to be rendered. */
    itemType?: 'item' | 'section'
    /** Color scheme (currently only 'primary' is supported for this component). */
    variant?: 'primary'
    /** Selected state of the control (true or false). */
    selected?: boolean
    /** Collapsed state of the control (true or false). */
    collapsed?: boolean
    /** FontAwesomeIcon IconProp */
    icon?: IconProp | null
    /** Disabled state of the control (true or false). */
    disabled?: boolean
    /** Text label of the control. */
    label?: string | null
    /** Function to run when clicking on the control. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Whether to keep the control in an extended (not collapsed) state or not. */
    keepExtended?: boolean
    /** Unused? */
    //setCollapsed?: (state: boolean) => void
}

export const SideMenuItem = ({ style, variant = 'primary', itemType, selected = false, collapsed = false, icon, disabled = false, label, onClick, keepExtended,...props }: SideMenuItemProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    if ( itemType === 'section' ) {
        return (
            <SideMenuSectionName
                label={label}
                collapsed={collapsed}
                keepExtended={keepExtended}
            />
        )
    } else {
        return <button
        type="button"
        style={{
            /**
             * The proper order is:
             * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
             * Otherwise, the states get messed up.
             */
            backgroundColor: (selected || hover) ? variants[selectedVariant].sideBarMenuItemBgColorHover : variants[selectedVariant].sideBarMenuItemBgColor,
            color: (selected || hover) ? variants[selectedVariant].sideBarMenuItemTextColor : variants[selectedVariant].sideBarMenuItemTextColor,
            textTransform: 'capitalize',
            paddingLeft: '15px',
            paddingRight: '15px',
            height: '34px',
            fontFamily: theme.font.buttonLabel.regular.fontFamily,
            fontSize: '14px',
            borderRadius: '4px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            border: 'none',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: (collapsed && !keepExtended) ? 'fit-content' : '266px',
            gap: '15px',
            ...style,
        }}
        onMouseEnter={() => {
            setHover(true)
        }}
        onMouseLeave={() => {
            setHover(false)
        }}
        onClick={onClick}
        {...props}
    >
        <div style={{ textAlign: 'center', width: '24px', alignSelf: 'center', }}>
            <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={icon as IconProp} color={selected ? variants[selectedVariant].sideBarMenuItemIconColorHover : colors.gray[70]} />
        </div>
        {
            (!collapsed || keepExtended) ?
                <div
                    style={{
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                    }}
                >
                    {label}
                </div>
            :
                null
        }
    </button>
    }
}