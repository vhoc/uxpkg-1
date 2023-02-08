import React, { useState } from "react"
import { HTMLAttributes } from "react"
import { colors, variants } from "../../theme"
import SideMenuItem from "./SideMenuItem"
import { faSignOutAlt } from "@fortawesome/sharp-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SideMenuItemProps } from "./SideMenuItem"

export interface SideMenuProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary'
    menuItems?: SideMenuItemProps[]
}

const SideMenu = ({variant = 'primary', menuItems, ...props}:SideMenuProps): JSX.Element => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [keepExtended, setKeepExtended] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    return (
        <div
            style={{
                width: (collapsed && !keepExtended) ? '70px' : '289px',
                minHeight: '100%',
                height: '100%',
                backgroundColor: variants[selectedVariant].sideBarBgColor,
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '8px',
                paddingRight: '13px',
                display: 'flex',
                flexDirection: 'column',
            }}
            //onMouseOver={() => setCollapsed(false)}
            //onMouseOut={() => setCollapsed(true)}
            {...props}        
        >
            {
                menuItems && menuItems.length >= 1 ?
                    menuItems.map((item, index) => {
                        return (
                            <SideMenuItem
                                key={index}
                                itemType={item.itemType}
                                icon={item.icon}
                                variant={item.variant}
                                disabled={item.disabled}
                                collapsed={collapsed}
                                setCollapsed={setCollapsed}
                                selected={item.selected}
                                label={item.label}
                                onClick={item.onClick}
                                keepExtended={keepExtended}
                            />
                        )
                    })
                :
                    null
            }

            <button
                style={{
                    backgroundColor: colors.white,
                    border: 'none',
                    borderTopColor: '#E3E3E3',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px',
                    color: keepExtended ? colors.gray[70] : colors.gray[30],
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: '13px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    width: (collapsed && !keepExtended) ? '46px' : '266px',
                }}
                onMouseEnter={() => {
                    setCollapsed(false)
                }}
                onMouseLeave={() => {
                    setCollapsed(true)
                }}
                onClick={() => setKeepExtended(prevState => (!prevState))}
            >
                <FontAwesomeIcon icon={faSignOutAlt} />
                {
                    (!collapsed || keepExtended) ?
                        <span style={{
                            fontSize: '15px',
                            color: keepExtended ? colors.gray[70] : colors.gray[50],
                            marginLeft: '12px',
                        }}>
                            Keep Menu Open
                        </span>
                    :
                        null
                }
            </button>

        </div>
    )
}

export default SideMenu