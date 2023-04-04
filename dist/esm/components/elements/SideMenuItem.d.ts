import React from "react";
import { HTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface SideMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
    /** Container style overrides. */
    style?: React.CSSProperties;
    /** The type of the item to be rendered. */
    itemType?: 'item' | 'section';
    /** Color scheme (currently only 'primary' is supported for this component). */
    variant?: 'primary';
    /** Selected state of the control (true or false). */
    selected?: boolean;
    /** Collapsed state of the control (true or false). */
    collapsed?: boolean;
    /** FontAwesomeIcon IconProp */
    icon?: IconProp | null;
    /** Disabled state of the control (true or false). */
    disabled?: boolean;
    /** Text label of the control. */
    label?: string | null;
    /** Function to run when clicking on the control. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Whether to keep the control in an extended (not collapsed) state or not. */
    keepExtended?: boolean;
}
export declare const SideMenuItem: ({ style, variant, itemType, selected, collapsed, icon, disabled, label, onClick, keepExtended, ...props }: SideMenuItemProps) => JSX.Element;
