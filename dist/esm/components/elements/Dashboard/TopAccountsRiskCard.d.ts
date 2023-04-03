import React, { HTMLAttributes } from 'react';
import { ResourceAccountRiskMeterProps } from './ResourceAccountRiskMeter';
export interface TopAccountsRiskCardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Array of **ResourceAccountRiskMeterProps**
     * {
     * &nbsp;&nbsp;&nbsp;&nbsp; accountProvider?: 'aws' | 'gcp' | 'azure' | undefined
     * &nbsp;&nbsp;&nbsp;&nbsp; icon?: any
     * &nbsp;&nbsp;&nbsp;&nbsp; title: string
     * &nbsp;&nbsp;&nbsp;&nbsp; compliantUserPercentage: number
     * &nbsp;&nbsp;&nbsp;&nbsp; lowRiskUserPercentage: number
     * &nbsp;&nbsp;&nbsp;&nbsp; mediumRiskUserPercentage: number
     * &nbsp;&nbsp;&nbsp;&nbsp; highRiskUserPercentage: number
     * &nbsp;&nbsp;&nbsp;&nbsp; criticalRiskUserPercentage: number
     * &nbsp;&nbsp;&nbsp;&nbsp; style?: React.CSSProperties | undefined
     * }
     */
    items: ResourceAccountRiskMeterProps[];
    /** Container style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const TopAccountsRiskCard: ({ items, style }: TopAccountsRiskCardProps) => JSX.Element;
