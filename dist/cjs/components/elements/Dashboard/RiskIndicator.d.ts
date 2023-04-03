import React, { HTMLAttributes } from 'react';
export interface RiskIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    /** The level of the risk defines the number of filled bars and their color */
    level: 'none' | 'low' | 'medium' | 'high' | 'critical';
    /** CSS Overrides */
    style?: React.CSSProperties | undefined;
}
export declare const RiskIndicator: ({ level, style }: RiskIndicatorProps) => JSX.Element;
