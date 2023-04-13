import React, { HTMLAttributes } from 'react';
export interface RiskModalButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Icon at the left side of the button. Any kind of component.*/
    icon?: any;
    /** Optional style overrides for the icon container. */
    iconContainerStyle?: React.CSSProperties | undefined;
    /** Title of the button */
    title: string;
    /** Risk level, it's the same type as the RiskIndicator component variant. */
    riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical' | 'online' | 'offline';
    /** Callback function to run when clicking on the component */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style overrides for the button. */
    style?: React.CSSProperties | undefined;
}
export declare const RiskModalButton: ({ icon, iconContainerStyle, title, riskLevel, onClick, style }: RiskModalButtonProps) => JSX.Element;
