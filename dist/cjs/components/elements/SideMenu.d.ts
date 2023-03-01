import React from "react";
import { HTMLAttributes } from "react";
import { SideMenuItemProps } from "./SideMenuItem";
export interface SideMenuProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary';
    menuItems?: SideMenuItemProps[];
    style?: React.CSSProperties | undefined;
}
export declare const SideMenu: ({ variant, menuItems, style, ...props }: SideMenuProps) => JSX.Element;
