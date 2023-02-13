import React, { HTMLAttributes, ReactNode, useState } from "react"
import { theme, colors, variants, sizes } from '../../theme'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'gray' | 'grayBlue' | 'grayRed'
    children?: ReactNode
    disabled?: boolean
    textColor?: string
    size?: 'sm' | 'md'

    /** Override standard sizes' height */
    height?: string,
    
    /** Override standard sizes' width */
    width?: string,
}

export const Button = ({children, size = 'sm', variant = 'primary', disabled = false, textColor = colors.white, width, height, ...ButtonProps}: ButtonProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const [focus, setFocus] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes.button
    const selectedSize = size as SizeKey

    const componentStyle = (hover: boolean, active: boolean): object => ({
        /**
         * The proper order is:
         * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
         * Otherwise, the states get messed up.
         */
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        height: height || sizes.button[selectedSize].height,
        width: width ||'auto',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.button[selectedSize].fontSize,
        paddingLeft: sizes.button[selectedSize].paddingLeft,
        paddingRight: sizes.button[selectedSize].paddingRight,
        paddingTop: sizes.button[selectedSize].paddingTop,
        paddingBottom: sizes.button[selectedSize].paddingBottom,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: 'auto',
        //outlineWidth: focus ? '2px' : '0px'
        outlineWidth: '0px',
    })

    return (
            <button
                style={componentStyle(hover, active)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                {...ButtonProps}
            >
                {children}
            </button>
    )

}