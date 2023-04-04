import React from "react";
import '../../assets/styles/dropdown.css';
export interface IMenuItem {
    /** asdasdasd */
    icon?: any;
    title: string;
    style?: object;
    action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    size?: 'sm' | 'md';
    disabled?: boolean;
}
export interface MenuButtonProps {
    /**
     * Array of IMenuItem:
     * -- icon (any) _Optional_
     * -- title (string)
     * -- style (object) _Optional_
     * -- action (React.MouseEventHandler<HTMLButtonElement> | undefined) _Optional_
     * -- variant ('primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear') _Optional_
     * -- size ('sm' | 'md') _Optional_
     * -- disabled (boolean) _Optional_
     */
    menuItems: IMenuItem[];
    /** The size of the button. */
    size?: 'sm' | 'md';
    /** Disabled state of the button. */
    disabled?: boolean;
}
export declare const MenuButton: ({ menuItems }: MenuButtonProps) => JSX.Element;
