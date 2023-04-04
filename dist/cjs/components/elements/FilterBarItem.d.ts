import React, { HTMLAttributes } from "react";
import "@fontsource/ibm-plex-sans";
export interface FilterBarItemProps extends HTMLAttributes<HTMLElement> {
    /** The name or label to be shown along the checkbox control. */
    name?: string;
    /** The checked state of the control. */
    checked?: boolean;
    /** An optional number to be shown between parenthesis at the end of the label. */
    amount?: number;
    /** Function to be run when clicking on the checkbox. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export declare const FilterBarItem: ({ name, checked, amount, onClick, ...props }: FilterBarItemProps) => JSX.Element;
