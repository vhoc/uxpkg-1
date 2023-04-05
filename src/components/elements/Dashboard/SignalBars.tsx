import React, { HTMLAttributes } from 'react'
import RiskLevelNone from '../../../assets/icons/risk-low.svg'
import RiskLevelLow from '../../../assets/icons/risk-low.svg'
import RiskLevelMedium from '../../../assets/icons/risk-med.svg'
import RiskLevelHigh from '../../../assets/icons/risk-high.svg'
import RiskLevelCritical from '../../../assets/icons/risk-critical.png'

export interface SignalBarsProps extends HTMLAttributes<HTMLImageElement> {
    /** The level of the risk defines the number of filled bars and their color */
    variant: 'none' | 'low' | 'medium' | 'high' | 'critical'
    /** CSS Overrides */
    style?: React.CSSProperties | undefined
}

export const SignalBars = ({ variant, style }: SignalBarsProps): JSX.Element => {

    const variantsTable = {
        none: RiskLevelNone,
        low: RiskLevelLow,
        medium: RiskLevelMedium,
        high: RiskLevelHigh,
        critical: RiskLevelCritical,
    }

    type LevelType = keyof typeof variantsTable
    const selectedVariant = variant as LevelType

    return (
        <img
            src={variantsTable[selectedVariant]}
            style={{
                display: 'flex',
                width: '15px',
                height: '14px',
                ...style,
            }}
            alt={`${selectedVariant} risk`}
        >

        </img>
    )
    
}