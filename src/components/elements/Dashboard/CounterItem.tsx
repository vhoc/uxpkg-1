import React, { HTMLAttributes } from 'react'
import { ICounterItem } from '../../../types'
import { Typography } from '../Typography'

export interface CounterItemProps extends ICounterItem, HTMLAttributes<HTMLDivElement> {
    /** Element (any type) */
    element?: any
    /** Count */
    count: number
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const CounterItem = ({ element, count, style }: CounterItemProps):JSX.Element => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                width: 'fit-content',
                ...style,
            }}
        >

            <div>{element}</div>
            <Typography variant={'body-semiBold'} style={{ lineHeight: 'unset' }}>{String(count)}</Typography>

        </div>
    )
}