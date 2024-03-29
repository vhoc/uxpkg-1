import React, { CSSProperties, HTMLAttributes, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { theme, colors, variants, sizes } from '../../theme'
import { Badge } from "./Badge"

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Style overrides */
    style?: CSSProperties | undefined
    /** 
     * Requires importing the icon from the parent component. Like so:  
     * import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
     * Then, you would use 'faBookmark' on the icon property when using the component.
     */
    icon: IconProp
    /** Variant to determine the color scheme of the button. */
    variant: 'primary' | 'tertiary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear'
    /** The disabled/enable state of the button. */
    disabled?: boolean
    /** Button text color override. */
    textColor?: string
    /** The size of the button. */
    size?: 'sm'
    /** Override standard sizes' height. */
    height?: string,    
    /** Override standard sizes' width. */
    width?: string,
    /** Displays a badge on the button and specifies its content. */
    badge?: string,
    /** Function to run when clicking on the button. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const IconButton = ({style, icon, size = 'sm', variant = 'primary', disabled = false, onClick, textColor = colors.white, width, height, badge, ...IconButtonProps}: IconButtonProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    //const [focus, setFocus] = useState<boolean>(false)

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
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //zIndex: '500',
        position: 'relative',
        ...style,
    })

    return (
            <button
                style={componentStyle(hover, active)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
                //onFocus={() => setFocus(true)}
                //onBlur={() => setFocus(false)}
                onClick={onClick}
                {...IconButtonProps}
            >
                <FontAwesomeIcon icon={icon as IconProp} />
                
                {
                    badge ?
                        <Badge label={badge}/>
                    :
                        null
                }
            </button>
    )

}