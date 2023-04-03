import React, { HTMLAttributes } from 'react';
export interface AccountRiskItemProps extends HTMLAttributes<HTMLDivElement> {
    /** If the element is an AWS, GCP or AZURE. This will set the corresponding icon accordingly*/
    accountProvider?: 'aws' | 'gcp' | 'azure' | undefined;
    /** Icon override for the element. It can be of any type */
    icon?: any;
    /** The title of the element to be analyzed */
    title: string;
    /** Gray text underneath the title */
    caption?: string | undefined;
    /** Risk severity */
    riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical';
    /** Function to run when clicking on the component. */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    /** Container style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const AccountRiskItem: ({ accountProvider, icon, title, caption, riskLevel, onClick, style, }: AccountRiskItemProps) => JSX.Element;
