import React, { HTMLAttributes } from "react";
export interface MenuButtonItemProps extends HTMLAttributes<HTMLLIElement> {
    action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    icon?: any;
    title: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    size?: 'sm' | 'md';
}
export declare const MenuButtonItem: ({ variant, size, action, icon, title, disabled }: MenuButtonItemProps) => JSX.Element;
