import React, { HTMLAttributes } from 'react'
import { colors } from '../../../theme'
import { SignalBars } from './SignalBars'
import { Typography } from '../Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignalBars } from '@fortawesome/pro-solid-svg-icons'
import { faSignalSlash } from '@fortawesome/pro-regular-svg-icons'

export interface RiskIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    /** The variant defines the number of filled bars and their color */
    variant: 'none' | 'low' | 'medium' | 'high' | 'critical' | 'online' | 'offline'
    /** CSS Overrides */
    style?: React.CSSProperties | undefined
}

export const RiskIndicator = ({ variant, style }: RiskIndicatorProps): JSX.Element => {
    
    return (
        <div
            style={{
                width: '84px',
                backgroundColor: variant === 'online' ? colors.blue[5] : variant === 'offline' ? 'rgb(254, 243, 245)' : colors.gray[5],
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
        {
            variant === 'offline' || variant === 'online' ?
                variant === 'online' ?
                    <FontAwesomeIcon icon={faSignalBars} color={colors.blue[60]}/>
                :
                    <FontAwesomeIcon icon={faSignalSlash} color={colors.red[50]}/>
            :
            <SignalBars variant={variant}/>
        }
            <Typography variant={'body-regular'} style={{ textTransform: 'capitalize', }}>{ variant }</Typography>
        </div>
    )

}