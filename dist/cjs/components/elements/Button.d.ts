import { HTMLAttributes, ReactNode } from "react";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'success';
    children?: ReactNode;
    disabled?: boolean;
    textColor?: string;
    size?: 'sm' | 'md';
    /** Override standard sizes' height */
    height?: string;
    /** Override standard sizes' width */
    width?: string;
}
export declare const Button: ({ children, size, variant, disabled, textColor, width, height, ...ButtonProps }: ButtonProps) => JSX.Element;
