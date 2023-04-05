import React, { HTMLAttributes } from 'react';
export interface RiskIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    /** The variant defines the number of filled bars and their color */
    variant: 'none' | 'low' | 'medium' | 'high' | 'critical' | 'online' | 'offline';
    /** CSS Overrides */
    style?: React.CSSProperties | undefined;
}
export declare const RiskIndicator: ({ variant, style }: RiskIndicatorProps) => JSX.Element;
