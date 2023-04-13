import React from 'react'
import { PaginatorProps } from './Paginator'
import { colors } from '../../theme'
import { Typography } from './Typography'

export interface PaginationBarProps extends PaginatorProps {
    /** Text string at the left side of the paginator. */
    caption?: string | undefined
    /** Place for the paginator component. */
    children?: React.ReactElement<PaginatorProps> | undefined
    /** Container style overrides.*/
    style?: React.CSSProperties | undefined
}

export const PaginationBar = ({ caption, children, style }: PaginationBarProps): JSX.Element => {

    return (
        <div
            style={{
                backgroundColor: colors.white,
                paddingTop: '13px',
                paddingRight: '8px',
                paddingLeft: '1px',
                paddingBottom: '0px',
                borderTop: `1px solid ${ colors.gray[20] } `,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                ...style,
            }}
        >
            <Typography
                variant={'body-regular'}
            >
                { caption }
            </Typography>
            { children }
        </div>
    )
    
}