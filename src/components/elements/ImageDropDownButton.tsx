import React, { HTMLAttributes, useState } from 'react'
import { MenuItems } from './MenuItems'
import { IDropDownItem } from '../../util/sample-data'
import { faTimes } from "@fortawesome/sharp-solid-svg-icons"
import { variants, sizes, theme } from '../../theme'

//import '../../assets/styles/dropdown.css'


export interface ImageDropDownButtonProps extends HTMLAttributes<HTMLUListElement> {
    /** Array of objects with the following scructure:
     * [{ icon?, title, style?, action?, submenu?  }]  
     * - icon: [Optional], Type: IconDefinition (FontAwesome)
     * - title: [Mandatory], Type: string
     * - style: [Optional], Type: object
     * - action: [Optional], Type: Function
     * - submenu: [Optional], Properties[] (Recursive)
     */
    menuItems?: IDropDownItem[]
    variant?: 'clear' | 'gray'
    disabled?: boolean
    size?: 'sm'
    height?: string
    /** Whether to show the down arrow or not */
    hasDownArrow?: boolean
    /** Adapts the component for use with an image or a FontAwesomeIcon */
    mode?: 'image' | 'icon'
}

/** A Navigation bar with a multilevel dynamic dropdown menu. */
export const ImageDropDownButton = ({menuItems = [{ icon: faTimes, title: `No menus found` }], variant = 'clear', size = 'sm', height, disabled, hasDownArrow = true, mode = 'image',}: ImageDropDownButtonProps) : JSX.Element => {

    //console.warn(menuItems)
    const depthLevel = 0
    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const [focus, setFocus] = useState<boolean>(false)

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
        width: 'fit-content',
        height: height,
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme.font.buttonLabel.regular.fontSize,
        paddingLeft: sizes.button[selectedSize].paddingLeft,
        paddingRight: sizes.button[selectedSize].paddingRight,
        paddingTop: sizes.button[selectedSize].paddingTop,
        paddingBottom: sizes.button[selectedSize].paddingBottom,
        borderRadius: '0px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none', 
        marginBlockStart: '0',
        marginBlockEnd: '0',
        outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        outlineStyle: 'auto',
        outlineWidth: focus ? '2px' : '0px',
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
                paddingLeft: '12px',
            }}
            //className='menus'
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
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                        disabled={disabled || false}
                        variant={variant}
                        hasDownArrow={hasDownArrow}
                        mode={mode}
                        isImageDropDown={true}
                        height={'32px'}
                    />
                )
            })
        }
        </ul>
    )
}