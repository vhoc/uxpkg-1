import React from "react";
import { HTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface SideMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
    style?: React.CSSProperties;
    itemType?: 'item' | 'section';
    variant?: 'primary';
    selected?: boolean;
    collapsed?: boolean;
    icon?: IconProp | null;
    disabled?: boolean;
    label?: string | null;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    keepExtended?: boolean;
}
export declare const SideMenuItem: ({ style, variant, itemType, selected, collapsed, icon, disabled, label, onClick, keepExtended, ...props }: SideMenuItemProps) => JSX.Element;
export default SideMenuItem;
