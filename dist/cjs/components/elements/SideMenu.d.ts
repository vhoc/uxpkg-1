import { HTMLAttributes } from "react";
import { SideMenuItemProps } from "./SideMenuItem";
export interface SideMenuProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary';
    menuItems?: SideMenuItemProps[];
}
declare const SideMenu: ({ variant, menuItems, ...props }: SideMenuProps) => JSX.Element;
export default SideMenu;
