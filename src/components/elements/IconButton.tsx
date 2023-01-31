import React, { HTMLAttributes, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { theme, colors, variants, sizes } from '../../theme'

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** 
     * Requires importing the icon from the parent component. Like so:  
     * import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
     * Then, you would use 'faBookmark' on the icon property when using the component.
     */
    icon: IconProp
    variant: 'primary' | 'tertiary' | 'gray' | 'grayBlue' | 'grayRed'
    disabled?: boolean
    textColor?: string
    size?: 'sm'

    /** Override standard sizes' height */
    height?: string,
    
    /** Override standard sizes' width */
    width?: string,
}

export const IconButton = ({icon, size = 'sm', variant = 'primary', disabled = false, textColor = colors.white, width, height, ...IconButtonProps}: IconButtonProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const [focus, setFocus] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes.iconButton
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
        height: height || sizes.iconButton[selectedSize].height,
        //width: width ||sizes.iconButton[selectedSize].width,
        paddingLeft: '12px',
        paddingRight: '12px',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.iconButton[selectedSize].fontSize,
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

    return (
            <button
                style={componentStyle(hover, active)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                {...IconButtonProps}
            >
                <FontAwesomeIcon icon={icon as IconProp} />
            </button>
    )

}