import React, { HTMLAttributes } from 'react'
import { Typography } from '../Typography'
import { colors } from '../../../theme'

export interface ChartItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string
    color?: string | undefined
    amount: number
    percent: number
    caption?: string | undefined
}

export const ChartItem = ({ title, color, amount, percent, caption }: ChartItemProps): JSX.Element => {

    return (
        <div
            style={{
                display: 'flex',
                gap: '10px',
            }}
        >

            {/** LEFT PANE */}
            <div
                style={{    
                    width: '16px',
                    height: '16px',
                    backgroundColor: color,
                    borderRadius: '4px',
                }}
            >
            </div>

            {/** RIGHT PANE */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant={'body-semiBold'} color={colors.gray[90]} style={{ lineHeight: 'unset' }}>{title}</Typography>
                <Typography variant={'h4-medium'} >{String(amount)} ({String(percent)}%)</Typography>
                <Typography variant={'caption-regular'}>{caption}</Typography>
            </div>

        </div>
    )

}