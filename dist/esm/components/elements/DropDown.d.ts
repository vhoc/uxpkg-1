import { HTMLAttributes } from 'react';
import '../../assets/styles/dropdown.css';
export interface DropDownProps extends HTMLAttributes<HTMLUListElement> {
    submenus: any;
    dropdown: boolean;
    depthLevel: number;
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    disabled?: boolean;
    size?: 'sm' | 'md';
    height?: string;
    width?: string;
}
export declare const DropDown: ({ submenus, dropdown, depthLevel, variant, disabled, size, height, width, ...DropDownProps }: DropDownProps) => JSX.Element;
