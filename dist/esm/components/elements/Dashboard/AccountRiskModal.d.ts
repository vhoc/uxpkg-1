import React, { HTMLAttributes } from 'react';
import { AccountRiskItemProps } from './AccountRiskItem';
export interface AccountRiskModalProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Array of AccountRiskItemProps
     * {
     * &nbsp;&nbsp;&nbsp;&nbsp; accountProvider?: 'aws' | 'gcp' | 'azure' | undefined
     * &nbsp;&nbsp;&nbsp;&nbsp; icon?: any
     * &nbsp;&nbsp;&nbsp;&nbsp; title: string
     * &nbsp;&nbsp;&nbsp;&nbsp; caption?: string | undefined
     * &nbsp;&nbsp;&nbsp;&nbsp; riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical'
     * &nbsp;&nbsp;&nbsp;&nbsp; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
     * &nbsp;&nbsp;&nbsp;&nbsp; style?: React.CSSProperties | undefined
     * }
     */
    items: AccountRiskItemProps[];
    /** Function to run when clicking on the Close button */
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Container style overrides. */
    style?: React.CSSProperties | undefined;
}
export declare const AccountRiskModal: ({ items, style, onCloseButtonClick, }: AccountRiskModalProps) => JSX.Element;
