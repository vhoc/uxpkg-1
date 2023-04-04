import { HTMLAttributes } from "react";
export interface SideMenuSectionNameProps extends HTMLAttributes<HTMLButtonElement> {
    /** Color scheme of the control (currently only 'primary' is supported for this component). */
    variant?: 'primary';
    /** Text label of the section */
    label?: string | null;
    /** Whether to keep the control in an extended (not collapsed) state or not. */
    keepExtended?: boolean;
    /** Collapsed state of the component (true or false). */
    collapsed?: boolean;
}
export declare const SideMenuSectionName: ({ variant, keepExtended, collapsed, label, ...props }: SideMenuSectionNameProps) => JSX.Element;
