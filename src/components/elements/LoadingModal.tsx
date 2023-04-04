import React, {HTMLAttributes} from 'react'
import { colors } from '../../theme'
import { Spinner } from '../graphical/Spinner'
import { Typography } from './Typography'

export interface LoadingModalProps extends HTMLAttributes<HTMLDivElement> {
    /** A text message to be shown in the modal. */
    message: string
    /** A smaller text to be shown below the message. */
    caption?: string | undefined
}

export const LoadingModal = ({ message, caption, ...props }: LoadingModalProps): JSX.Element => {
    return (
        <div
            style={{
                minWidth: '344px',
                width: 'fit-content',
                maxWidth: '700px',
                backgroundColor: colors.white,
                boxShadow: '0px 2px 4px RGBA(34, 41, 69, 0.37)',
                borderRadius: '8px',
                paddingTop: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                paddingRight: '32px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'wait',
                gap: '16px',
            }}
            {...props}
        >
            <Spinner/>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '85%',
                }}
            >
                <Typography
                    variant={'body-semiBold'}
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    {message}
                </Typography>
                <Typography
                    variant={'body-regular'}                    
                    style={{
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    {caption}
                </Typography>
            </div>
        </div>
    )
}