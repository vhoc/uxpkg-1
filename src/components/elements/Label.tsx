import React, { HTMLAttributes, MouseEventHandler } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { theme, variants } from '../../theme'

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning'
    text: string
    iconButton?: IconProp
    width?: string
    height?: string
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export const Label = ({ variant = 'gray', text, iconButton, height, width, onClick, ...LabelProps }: LabelProps): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    const componentStyle = (): object => ({
        backgroundColor: variants[selectedVariant].labelBgColor,
        color: variants[selectedVariant].labelTextColor,
        textTransform: 'capitalize',
        //height: height || 'auto',
        width: 'fit-content',
        fontFamily: theme.font.body.regular.fontFamily,
        fontSize: '13px',
        borderRadius: '4px',
        border: 'none',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '8px',
        paddingRight: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '6px',
        alignItems: 'center',
    })

    return (
        <div
            style={componentStyle()}
            {...LabelProps}
        >
            <span>{ text }</span>
            {
                iconButton ?
                    <div
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={onClick}
                    >
                        <FontAwesomeIcon icon={iconButton as IconProp} />
                    </div>
                    
                :
                    null
            }            
        </div>
    )

}