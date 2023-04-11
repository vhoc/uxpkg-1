import React from "react";
import { HTMLAttributes } from "react";
import { SideMenuItemProps } from "./SideMenuItem";
export interface SideMenuProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary';
    /** Items on the menu */
    menuItems?: SideMenuItemProps[];
    /** Style overrides for the container */
    style?: React.CSSProperties | undefined;
    /** Whether the bar is collapsed or not */
    collapsed?: boolean;
    /** Callback function to run when the mouse cursor enters the component */
    onMouseEnter?: (React.MouseEventHandler<HTMLDivElement>) | undefined;
    /** Callback function to run when the mouse cursor leaves the component */
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const SideMenu: ({ variant, menuItems, onMouseEnter, onMouseLeave, style, collapsed, }: SideMenuProps) => JSX.Element;
