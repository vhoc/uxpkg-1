import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React, { HTMLAttributes, ReactElement } from 'react'
import { ButtonProps } from './Button'
import { colors } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface AlertModalProps extends HTMLAttributes<HTMLDivElement> {
    icon?: IconProp
    title?: string
    description?: string
    children?: ReactElement<ButtonProps> | Array<ReactElement<ButtonProps>>
}

export const AlertModal = ({ icon, title, description, children, ...props }: AlertModalProps): JSX.Element => {

    return (
        <div
            style={{
                width: '657px',
                minHeight: '190px',
                backgroundColor: colors.white,
                boxShadow: '3px 6px 12px 3px rgba(0,0,0,0.24)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                paddingTop: '27px',
                paddingBottom: '24px',
                paddingLeft: '32px',
                paddingRight: '32px',
                borderRadius: '8px',
            }}
            {...props}
        >

            {/** TOP ROW */}
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                }}
            >

                {/** TOP ROW - Left pane */}
                {
                    icon ?
                        <FontAwesomeIcon style={{ marginTop: '6px' }} icon={icon} color={colors.yellow[50]} />
                    :
                        <div>&nbsp;</div>
                }

                {/** TOP ROW - Right pane */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: '16px',
                    }}
                >
                    <div style={{ 
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '18px',
                        fontWeight: 'normal',
                        color: colors.gray[90],
                     }}
                     >
                        {title}
                    </div>
                    <div style={{ 
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        color: colors.gray[70],
                     }}
                     >
                        {description}
                    </div>

                </div>

            </div>

            {/** BOTTOM ROW */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px',
                }}
            >
                {children}
            </div>

        </div>
    )

}