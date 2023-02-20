import React, { HTMLAttributes, useState } from 'react'
import { MenuItems } from './MenuItems'
import '../../assets/styles/dropdown.css'
import { colors, variants, sizes, theme } from '../../theme'

export interface DropDownProps extends HTMLAttributes<HTMLUListElement> {
    submenus: any
    dropdown: boolean
    depthLevel: number
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear'
    disabled?: boolean
    size?: 'sm' | 'md'
    height?: string
    width?: string
}

export const DropDown = ({ submenus, dropdown, depthLevel, variant = 'primary', disabled, size = 'md', height, width, ...DropDownProps}: DropDownProps): JSX.Element => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""

  const [hover, setHover] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  //const [focus, setFocus] = useState<boolean>(false)

  type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes.button
    const selectedSize = size as SizeKey

  const componentStyle = (hover: boolean, active: boolean): object => ({
    backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
    color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
    //backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
    //color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
    textTransform: 'capitalize',
    height: height || sizes.button[selectedSize].height,
    width: 'fit-content',
    fontFamily: theme.font.buttonLabel.regular.fontFamily,
    fontSize: theme.font.buttonLabel.regular.fontSize,
    paddingLeft: sizes.button[selectedSize].paddingLeft,
    paddingRight: sizes.button[selectedSize].paddingRight,
    paddingTop: sizes.button[selectedSize].paddingTop,
    paddingBottom: sizes.button[selectedSize].paddingBottom,
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none', 
    marginBlockStart: '0',
    marginBlockEnd: '0',
    //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
    //outlineStyle: 'auto',
    //outlineWidth: focus ? '2px' : '0px',
    outlineWidth: '0px',
})

  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}
      style={{
        backgroundColor: colors.white,
      }}
      {...DropDownProps}
    >
    {
        submenus.map((submenu: any, index: number) => {
          return (
            <MenuItems
              style={componentStyle(hover, active)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onMouseDown={() => setActive(true)}
              onMouseUp={() => setActive(false)}
              //onFocus={() => setFocus(true)}
              //onBlur={() => setFocus(false)}
              items={submenu}
              key={index}
              depthLevel={depthLevel}
              disabled={disabled || false}
              variant={variant}
            />
          )
            
        })
    }
    </ul>
  )
}