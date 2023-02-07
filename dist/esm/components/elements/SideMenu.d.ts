import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { HTMLAttributes } from "react";
interface IMenuItems {
    menuSection: string;
    icon: IconProp;
    itemType: 'item' | 'section';
    variant: 'primary';
    collapsed: boolean;
    selected: boolean;
    disabled: boolean;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export interface SideMenuProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary';
    menuItems?: IMenuItems[];
}
declare const SideMenu: ({ variant, menuItems, ...props }: SideMenuProps) => JSX.Element;
export default SideMenu;
