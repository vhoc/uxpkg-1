import React, { HTMLAttributes } from 'react';
export interface ResourceAccountRiskMeterProps extends HTMLAttributes<HTMLDivElement> {
    /** If the element is an AWS, GCP or AZURE. This will set the corresponding icon accordingly*/
    accountProvider?: 'aws' | 'gcp' | 'azure' | undefined;
    /** Icon override for the element. It can be of any type */
    icon?: any;
    /** The title of the element to be analyzed */
    title: string;
    /** Percentage of users that are in compliance to the security policies. */
    compliantUserPercentage: number;
    /** Percentage of users that exceed their required privileges at LOW leveL */
    lowRiskUserPercentage: number;
    /** Percentage of users that exceed their required privileges at MEDIUM level */
    mediumRiskUserPercentage: number;
    /** Percentage of users that exceed their required privileges at HIGH level */
    highRiskUserPercentage: number;
    /** Percentage of users that exceed their required privileges at CRITICAL level */
    criticalRiskUserPercentage: number;
    /** Container style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const ResourceAccountRiskMeter: ({ icon, accountProvider, title, compliantUserPercentage, lowRiskUserPercentage, mediumRiskUserPercentage, highRiskUserPercentage, criticalRiskUserPercentage, style, }: ResourceAccountRiskMeterProps) => JSX.Element;
