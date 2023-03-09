import React from "react";
import '../../assets/styles/dropdown.css';
export interface IMenuItem {
    icon?: any;
    title: string;
    style?: object;
    action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    size?: 'sm' | 'md';
    disabled?: boolean;
}
export interface MenuButtonProps {
    menuItems: IMenuItem[];
    size?: 'sm' | 'md';
    disabled?: boolean;
}
export declare const MenuButton: ({ menuItems }: MenuButtonProps) => JSX.Element;
