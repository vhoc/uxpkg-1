import React, { HTMLAttributes, useState } from 'react'
import { MenuItems } from './MenuItems'
import { IDropDownItem } from '../../util/sample-data'
import { faTimes } from "@fortawesome/sharp-solid-svg-icons"
import { variants, sizes, theme } from '../../theme'

//import '../../assets/styles/dropdown.css'


export interface DropDownButtonProps extends HTMLAttributes<HTMLUListElement> {
    /** Array of objects with the following scructure:  
     * [{ icon?, title, style?, action?, submenu?  }]  
     * - icon: [Optional], Type: IconDefinition (FontAwesome)  
     * - title: [Mandatory], Type: string  
     * - style: [Optional], Type: object  
     * - action: [Optional], Type: Function  
     * - submenu: [Optional], Properties[] (Recursive)  
     */
    menuItems?: IDropDownItem[]
    /** The variant determines the color scheme. */
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear'
    /** Whether the control is disabled or not. */
    disabled?: boolean
    /** The size of the control. */
    size?: 'sm'
    /** Height override for the control. */
    height?: string
    /** Shows or hides the downward arrow. */
    hasDownArrow?: boolean
}

/** A Navigation bar with a multilevel dynamic dropdown menu. */
export const DropDownButton = ({menuItems = [{ icon: faTimes, title: `No menus found` }], variant = 'primary', size = 'sm', height, disabled, hasDownArrow = true, ...DropDownButtonProps}: DropDownButtonProps) : JSX.Element => {

    const depthLevel = 0
    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes.button
    const selectedSize = size as SizeKey

    const componentStyle = (hover: boolean, active: boolean): object => ({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        height: height,
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme.font.buttonLabel.regular.fontSize,
        paddingLeft: sizes.button[selectedSize].paddingLeft,
        paddingRight: sizes.button[selectedSize].paddingRight,
        paddingTop: sizes.button[selectedSize].paddingTop,
        paddingBottom: sizes.button[selectedSize].paddingBottom,
        borderRadius: variant === 'clear' ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none', 
        marginBlockStart: '0',
        marginBlockEnd: '0',
        outlineWidth: '0px',
    })


    return (
        <ul
            style={{
                listStyle: 'none',
                marginBlockStart: '0px !important',
                marginBlockEnd: '0px !important',
                paddingInlineStart: '0px',
                margin: '0px',
                width: 'fit-content',
                height: height,
            }}            
            {...DropDownButtonProps}
        >
        {
            menuItems.map((menu, index) => {
                return (
                    <MenuItems
                        style={componentStyle(hover, active)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onMouseDown={() => setActive(true)}
                        onMouseUp={() => setActive(false)}
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                        disabled={disabled || false}
                        variant={variant}
                        hasDownArrow={hasDownArrow}
                    />
                )
            })
        }
        </ul>
    )
}