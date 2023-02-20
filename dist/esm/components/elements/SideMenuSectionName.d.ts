import { HTMLAttributes } from "react";
export interface SideMenuSectionNameProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary';
    label?: string | null;
    keepExtended?: boolean;
    collapsed?: boolean;
}
export declare const SideMenuSectionName: ({ variant, keepExtended, collapsed, label, ...props }: SideMenuSectionNameProps) => JSX.Element;
