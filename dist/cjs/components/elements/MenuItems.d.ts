import React, { HTMLAttributes } from 'react';
import '../../assets/styles/dropdown.css';
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
    style?: React.CSSProperties;
    /**
     * If using an icon you need to import it and place into items.icon Like so:
     * import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
     * Then, you would use 'faBookmark' on the icon property when using the component.
     */
    items: {
        icon?: any;
        title: string | JSX.Element;
        style?: object;
        submenu?: any;
        action?: any;
    };
    depthLevel: number;
    disabled?: boolean;
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    size?: 'sm' | 'md';
    /** Override standard sizes' height */
    height?: string;
    /** Override standard sizes' width */
    width?: string;
    hasDownArrow?: boolean;
    isImageDropDown?: boolean;
    /** Adapts the component for use with an image or a FontAwesomeIcon */
    mode?: 'image' | 'icon';
}
export declare const MenuItems: ({ style, items, depthLevel, disabled, variant, size, height, width, isImageDropDown, hasDownArrow, mode, ...MenuItemProps }: MenuItemProps) => JSX.Element;
