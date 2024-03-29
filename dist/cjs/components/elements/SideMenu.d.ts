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
    /** Callback function to run when the Keep Open button is clicked */
    onClickKeepOpen?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Keep the menu open regardles of the hover state of the component. */
    keepOpen?: boolean;
}
export declare const SideMenu: ({ variant, menuItems, onMouseEnter, onMouseLeave, style, collapsed, onClickKeepOpen, keepOpen, }: SideMenuProps) => JSX.Element;
