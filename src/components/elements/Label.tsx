import React, { CSSProperties, HTMLAttributes, MouseEventHandler } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { theme, variants } from '../../theme'

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    /** The variant (color scheme) of the label */
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning'
    /** Optional label text. Leave empty and set iconButton for an icon-only label that can work as a button or not.  */
    text?: string | undefined
    /** Icon with optional onClick event. If no button functionality is needed, just don't define an onClick property. */
    iconButton?: IconProp
    /** Icon position. 'start' or 'end'. It defaults to 'start'. Leaving the 'text' prop empty make this prop irrelevant. */
    iconPosition?: 'start' | 'end'
    /** Style overrides */
    style?: CSSProperties | undefined
    /** onClick function */
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export const Label = ({ variant = 'gray', text, iconButton, iconPosition = 'start', onClick, style, ...LabelProps }: LabelProps): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    const componentStyle = (): object => ({
        backgroundColor: variants[selectedVariant].labelBgColor,
        color: variants[selectedVariant].labelTextColor,
        textTransform: 'capitalize',
        //height: height || 'auto',
        width: text ? 'fit-content' : '32px',
        //maxWidth: '255px',
        fontFamily: theme.font.body.regular.fontFamily,
        fontSize: '13px',
        borderRadius: '4px',
        border: 'none',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '8px',
        paddingRight: '8px',
        display: 'flex',
        justifyContent: text ? 'space-between' : 'center',
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
        {
            iconButton && iconPosition === 'start' ?
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
        {
            text ?
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
            :
                null
        }            
        {
            iconButton && iconPosition === 'end' ?
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