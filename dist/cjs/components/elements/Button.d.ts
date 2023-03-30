import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { HTMLAttributes, ReactNode } from "react";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'success' | 'warning' | 'danger';
    children?: ReactNode;
    disabled?: boolean;
    textColor?: string;
    size?: 'sm' | 'md';
    /** Override standard sizes' height */
    height?: string;
    /** Override standard sizes' width */
    width?: string;
    /** Enables or disables an icon in the button */
    icon?: IconProp | undefined;
    /** Sets the position of the optional icon */
    iconPosition?: 'start' | 'end';
    /** Sets the color of the icon */
    iconColor?: string | undefined;
    /** onClick button event */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export declare const Button: ({ children, size, variant, disabled, icon, iconPosition, iconColor, width, height, onClick, ...ButtonProps }: ButtonProps) => JSX.Element;
