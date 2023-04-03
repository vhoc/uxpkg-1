import React, { HTMLAttributes } from 'react'
import { colors } from '../../../theme'
import { SignalBars } from './SignalBars'
import { Typography } from '../Typography'

export interface RiskIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    /** The level of the risk defines the number of filled bars and their color */
    level: 'none' | 'low' | 'medium' | 'high' | 'critical'
    /** CSS Overrides */
    style?: React.CSSProperties | undefined
}

export const RiskIndicator = ({ level, style }: RiskIndicatorProps): JSX.Element => {
    
    return (
        <div
            style={{
                width: '84px',
                backgroundColor: colors.gray[5],
                paddingTop: '5px',
                paddingRight: '8px',
                paddingBottom: '3px',
                paddingLeft: '8px',
                display: 'flex',
                gap: '8px',
                alignItems: 'baseline',
                borderRadius: '4px',
                ...style,
            }}
        >
            <SignalBars level={level}/>
            <Typography variant={'body-regular'} style={{ textTransform: 'capitalize', }}>{ level }</Typography>
        </div>
    )

}