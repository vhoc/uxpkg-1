import React from "react"
import { HTMLAttributes, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { variants, theme } from '../../theme'
import SideMenuSectionName from "./SideMenuSectionName";

export interface SideMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
    style?: React.CSSProperties
    itemType?: 'item' | 'section'
    variant?: 'primary'
    selected?: boolean
    collapsed?: boolean
    icon?: IconProp | null
    disabled?: boolean
    label?: string | null
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    keepExtended?: boolean
}

export const SideMenuItem = ({ style, variant = 'primary', itemType, selected = false, collapsed = false, icon, disabled = false, label, onClick, keepExtended,...props }: SideMenuItemProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)
    //const [active, setActive] = useState<boolean>(false)
    //const [focus, setFocus] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    if ( itemType === 'section' ) {
        return (
            <SideMenuSectionName label={label} collapsed={collapsed} keepExtended={keepExtended}/>
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
            justifyContent: 'start',
            alignItems: 'center',
            width: (collapsed && !keepExtended) ? 'fit-content' : '266px',
            gap: '15px'
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
        //onMouseDown={() => setActive(true)}
        //onMouseUp={() => setActive(false)}
        //onFocus={() => setFocus(true)}
        //onBlur={() => setFocus(false)}
        {...props}
    >
        <div>
            <FontAwesomeIcon icon={icon as IconProp} color={selected ? variants[selectedVariant].sideBarMenuItemIconColorHover : variants[selectedVariant].sideBarMenuItemIconColor} />
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

export default SideMenuItem