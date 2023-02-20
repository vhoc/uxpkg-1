import { HTMLAttributes } from "react";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    label: string;
}
export declare const Badge: ({ label, ...props }: BadgeProps) => JSX.Element;
