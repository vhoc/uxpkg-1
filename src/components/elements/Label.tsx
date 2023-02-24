import React, { CSSProperties, HTMLAttributes, MouseEventHandler } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { theme, variants } from '../../theme'

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning'
    text: string
    iconButton?: IconProp
    //width?: string
    //height?: string
    style?: CSSProperties | undefined
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export const Label = ({ variant = 'gray', text, iconButton, onClick, style, ...LabelProps }: LabelProps): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    const componentStyle = (): object => ({
        backgroundColor: variants[selectedVariant].labelBgColor,
        color: variants[selectedVariant].labelTextColor,
        textTransform: 'capitalize',
        //height: height || 'auto',
        width: 'fit-content',
        maxWidth: '300px',
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
        height: '32px',
        ...style,
    })

    return (
        <div
            style={componentStyle()}
            {...LabelProps}
        >
            <div
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    textAlign: 'left',
                }}
            >
                { text }
            </div>
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