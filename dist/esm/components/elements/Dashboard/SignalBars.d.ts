import React, { HTMLAttributes } from 'react';
export interface SignalBarsProps extends HTMLAttributes<HTMLImageElement> {
    /** The level of the risk defines the number of filled bars and their color */
    level: 'none' | 'low' | 'medium' | 'high' | 'critical';
    /** CSS Overrides */
    style?: React.CSSProperties | undefined;
}
export declare const SignalBars: ({ level, style }: SignalBarsProps) => JSX.Element;
