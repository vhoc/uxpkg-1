import React, { useState, HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { variants, theme, sizes } from '../../theme'
import { styled } from '@mui/material/styles'

export interface MenuButtonItemProps extends HTMLAttributes<HTMLLIElement> {
    action?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    icon?: any,
    title: string 
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear'
    size?: 'sm' | 'md'
}

export const MenuButtonItem = ({ variant = 'clear', size = 'sm', action, icon, title, disabled = false }: MenuButtonItemProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes.button
    const selectedSize = size as SizeKey

    const MyButton = styled('button')({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        minWidth: '150px',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.button[selectedSize].fontSize,
        paddingLeft:  sizes.popOverMenuItem[selectedSize].paddingLeft,
        paddingRight: sizes.popOverMenuItem[selectedSize].paddingRight,
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: ( variant === 'clear') ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: isImageDropDown ? 'none' : 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px',
        textAlign: 'left',
    })

    return (
        <li
            style={{
                position: 'relative',
                fontSize: '14px',
                width: 'fit-content',
            }}
        >
            <MyButton
                onClick={action}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
            >
                <span style={ { display: 'flex', gap: '8px' } }>
                    <span>{ icon ? <FontAwesomeIcon icon={icon}/> : '' }</span>
                    <span>{ title }</span>
                </span>
                <span></span>                    
            </MyButton>

        </li>
    )

}